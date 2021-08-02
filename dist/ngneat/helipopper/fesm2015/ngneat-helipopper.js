import * as i0 from '@angular/core';
import { InjectionToken, ElementRef, EventEmitter, Injector, Directive, Inject, PLATFORM_ID, ViewContainerRef, NgZone, Input, Output, NgModule, Injectable } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import tippy from 'tippy.js';
import { Observable, Subject, fromEvent, merge } from 'rxjs';
import { auditTime, map, switchMap, takeUntil, filter } from 'rxjs/operators';
import * as i2 from '@ngneat/overview';
import { isString as isString$1, isComponent, isTemplateRef, ViewService } from '@ngneat/overview';

const TIPPY_CONFIG = new InjectionToken('Tippy config', {
    providedIn: 'root',
    factory() {
        return {};
    }
});
const TIPPY_REF = new InjectionToken('TIPPY_REF');
function coerceElement(element) {
    return element instanceof ElementRef ? element.nativeElement : element;
}

let supportsIntersectionObserver = false;
let supportsResizeObserver = false;
if (typeof window !== 'undefined') {
    supportsIntersectionObserver = 'IntersectionObserver' in window;
    supportsResizeObserver = 'ResizeObserver' in window;
}
function inView(host, options = {
    root: null,
    threshold: 0.3
}) {
    const element = coerceElement(host);
    return new Observable(subscriber => {
        if (!supportsIntersectionObserver) {
            subscriber.next();
            subscriber.complete();
            return;
        }
        const observer = new IntersectionObserver(entries => {
            // Several changes may occur in the same tick, we want to check the latest entry state.
            const entry = entries[entries.length - 1];
            if (entry.isIntersecting) {
                subscriber.next();
                subscriber.complete();
            }
        }, options);
        observer.observe(element);
        return () => observer.disconnect();
    });
}
function isElementOverflow(host) {
    // Don't access the `offsetWidth` multipe times since it triggers layout updates.
    const hostOffsetWidth = host.offsetWidth;
    return hostOffsetWidth > host.parentElement.offsetWidth || hostOffsetWidth < host.scrollWidth;
}
function overflowChanges(host) {
    const element = coerceElement(host);
    return dimensionsChanges(element).pipe(auditTime(150), map(() => isElementOverflow(element)));
}
function dimensionsChanges(target) {
    return resizeObserverStrategy(target);
}
function resizeObserverStrategy(target) {
    return new Observable(subscriber => {
        if (!supportsResizeObserver) {
            subscriber.next();
            subscriber.complete();
            return;
        }
        const observer = new ResizeObserver(() => subscriber.next(true));
        observer.observe(target);
        return () => observer.disconnect();
    });
}
function onlyTippyProps(allProps) {
    const tippyProps = {};
    const ownProps = [
        'variations',
        'useHostWidth',
        'defaultVariation',
        'beforeRender',
        'lazy',
        'variation',
        'isEnabled',
        'className',
        'onlyTextOverflow',
        'data',
        'content',
        'hideOnEscape',
        'customHost'
    ];
    Object.keys(allProps).forEach(prop => {
        if (!ownProps.includes(prop)) {
            tippyProps[prop] = allProps[prop];
        }
    });
    return tippyProps;
}
function normalizeClassName(className) {
    const classes = isString(className) ? className.split(' ') : className;
    return classes.map(klass => klass === null || klass === void 0 ? void 0 : klass.trim()).filter(Boolean);
}
function isString(value) {
    return typeof value === 'string';
}

class TippyDirective {
    constructor(platformId, globalConfig, injector, viewService, vcr, zone, hostRef) {
        this.platformId = platformId;
        this.globalConfig = globalConfig;
        this.injector = injector;
        this.viewService = viewService;
        this.vcr = vcr;
        this.zone = zone;
        this.hostRef = hostRef;
        this.onlyTextOverflow = false;
        this.useHostWidth = false;
        this.hideOnEscape = false;
        this.visible = new EventEmitter();
        this.isVisible = false;
        this.changed = new EventEmitter();
        this.destroyed = new Subject();
        this.enabled = true;
        this.variationDefined = false;
    }
    ngOnChanges(changes) {
        if (isPlatformServer(this.platformId))
            return;
        let props = Object.keys(changes).reduce((acc, change) => {
            if (change === 'isVisible')
                return acc;
            acc[change] = changes[change].currentValue;
            return acc;
        }, {});
        let variation;
        if (isChanged('variation', changes)) {
            variation = changes.variation.currentValue;
            this.variationDefined = true;
        }
        else if (!this.variationDefined) {
            variation = this.globalConfig.defaultVariation;
            this.variationDefined = true;
        }
        if (variation) {
            props = Object.assign(Object.assign({}, this.globalConfig.variations[variation]), props);
        }
        if (isChanged('isEnabled', changes)) {
            this.enabled = changes.isEnabled.currentValue;
            this.setStatus();
        }
        if (isChanged('isVisible', changes)) {
            this.isVisible ? this.show() : this.hide();
        }
        this.setProps(props);
    }
    ngOnInit() {
        if (this.useHostWidth) {
            this.props.maxWidth = this.hostWidth;
        }
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            if (this.lazy) {
                if (this.onlyTextOverflow) {
                    inView(this.host)
                        .pipe(switchMap(() => overflowChanges(this.host)), takeUntil(this.destroyed))
                        .subscribe(isElementOverflow => {
                        this.checkOverflow(isElementOverflow);
                    });
                }
                else {
                    inView(this.host)
                        .pipe(takeUntil(this.destroyed))
                        .subscribe(() => {
                        this.createInstance();
                    });
                }
            }
            else if (this.onlyTextOverflow) {
                overflowChanges(this.host)
                    .pipe(takeUntil(this.destroyed))
                    .subscribe(isElementOverflow => {
                    this.checkOverflow(isElementOverflow);
                });
            }
            else {
                this.createInstance();
            }
        });
    }
    ngOnDestroy() {
        var _a;
        this.destroyed.next();
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.destroy();
        this.destroyView();
    }
    destroyView() {
        var _a;
        (_a = this.viewRef) === null || _a === void 0 ? void 0 : _a.destroy();
        this.viewRef = null;
    }
    show() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.show();
    }
    hide() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.hide();
    }
    enable() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.enable();
    }
    disable() {
        var _a;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.disable();
    }
    setProps(props) {
        var _a;
        this.props = props;
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.setProps(onlyTippyProps(props));
    }
    setStatus() {
        var _a, _b;
        this.enabled ? (_a = this.instance) === null || _a === void 0 ? void 0 : _a.enable() : (_b = this.instance) === null || _b === void 0 ? void 0 : _b.disable();
    }
    get host() {
        return this.customHost || this.hostRef.nativeElement;
    }
    get hostWidth() {
        return `${this.host.getBoundingClientRect().width}px`;
    }
    createInstance() {
        if (this.content == null) {
            return;
        }
        this.zone.runOutsideAngular(() => {
            this.instance = tippy(this.host, Object.assign(Object.assign(Object.assign({ allowHTML: true, appendTo: document.body }, onlyTippyProps(this.globalConfig)), onlyTippyProps(this.props)), { onMount: instance => {
                    var _a, _b;
                    this.isVisible = true;
                    this.visible.next(true);
                    this.useHostWidth && this.listenToHostResize();
                    (_b = (_a = this.globalConfig).onMount) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                }, onCreate: instance => {
                    var _a, _b;
                    if (this.className) {
                        for (const klass of normalizeClassName(this.className)) {
                            instance.popper.classList.add(klass);
                        }
                    }
                    (_b = (_a = this.globalConfig).onCreate) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                    if (this.isVisible === true) {
                        instance.show();
                    }
                }, onShow: instance => {
                    var _a, _b;
                    this.zone.run(() => {
                        const content = this.resolveContent();
                        if (isString$1(content)) {
                            instance.setProps({ allowHTML: false });
                        }
                        instance.setContent(content);
                        this.hideOnEscape && this.handleEscapeButton();
                    });
                    if (this.useHostWidth) {
                        // Don't access `hostWidth` multiple times since it's a getter that calls `getBoundingClientRect()`,
                        // which triggers the whole layout update.
                        const hostWidth = this.hostWidth;
                        instance.popper.style.width = hostWidth;
                        instance.popper.style.maxWidth = hostWidth;
                        instance.popper.firstElementChild.style.maxWidth = hostWidth;
                    }
                    (_b = (_a = this.globalConfig).onShow) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                }, onHidden: instance => {
                    var _a, _b;
                    this.destroyView();
                    this.isVisible = false;
                    this.visible.next(false);
                    (_b = (_a = this.globalConfig).onHidden) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                } }));
            this.setStatus();
            this.setProps(this.props);
            this.variation === 'contextMenu' && this.handleContextMenu();
        });
    }
    resolveContent() {
        if (!this.viewOptions$ && !isString$1(this.content)) {
            if (isComponent(this.content)) {
                this.viewOptions$ = {
                    injector: Injector.create({
                        providers: [{ provide: TIPPY_REF, useValue: this.instance }],
                        parent: this.injector
                    })
                };
            }
            else if (isTemplateRef(this.content)) {
                this.viewOptions$ = {
                    context: {
                        $implicit: this.hide.bind(this),
                        data: this.data
                    }
                };
            }
        }
        this.viewRef = this.viewService.createView(this.content, Object.assign({ vcr: this.vcr }, this.viewOptions$));
        let content = this.viewRef.getElement();
        if (isString$1(content) && this.globalConfig.beforeRender) {
            content = this.globalConfig.beforeRender(content);
        }
        return content;
    }
    handleContextMenu() {
        fromEvent(this.host, 'contextmenu')
            .pipe(takeUntil(this.destroyed))
            .subscribe((event) => {
            event.preventDefault();
            this.instance.setProps({
                getReferenceClientRect: () => ({
                    width: 0,
                    height: 0,
                    top: event.clientY,
                    bottom: event.clientY,
                    left: event.clientX,
                    right: event.clientX
                })
            });
            this.instance.show();
        });
    }
    handleEscapeButton() {
        this.pressButton$(document.body, 'Escape')
            .pipe(takeUntil(merge(this.destroyed, this.visible.pipe(filter(v => !v)))))
            .subscribe(() => this.hide());
    }
    pressButton$(element, codeButton) {
        return fromEvent(element, 'keydown').pipe(filter(({ code }) => codeButton === code));
    }
    checkOverflow(isElementOverflow) {
        var _a;
        if (isElementOverflow) {
            if (!this.instance) {
                this.createInstance();
            }
            else {
                this.instance.enable();
            }
        }
        else {
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.disable();
        }
    }
    listenToHostResize() {
        dimensionsChanges(this.host)
            .pipe(takeUntil(merge(this.destroyed, this.visible)))
            .subscribe(() => {
            this.instance.popper.style.width = this.hostWidth;
        });
    }
}
TippyDirective.decorators = [
    { type: Directive, args: [{
                // eslint-disable-next-line @angular-eslint/directive-selector
                selector: '[tippy]',
                exportAs: 'tippy'
            },] }
];
TippyDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [TIPPY_CONFIG,] }] },
    { type: Injector },
    { type: ViewService },
    { type: ViewContainerRef },
    { type: NgZone },
    { type: ElementRef }
];
TippyDirective.propDecorators = {
    appendTo: [{ type: Input }],
    delay: [{ type: Input }],
    duration: [{ type: Input }],
    hideOnClick: [{ type: Input }],
    interactive: [{ type: Input }],
    interactiveBorder: [{ type: Input }],
    maxWidth: [{ type: Input }],
    offset: [{ type: Input }],
    placement: [{ type: Input }],
    popperOptions: [{ type: Input }],
    showOnCreate: [{ type: Input }],
    trigger: [{ type: Input }],
    triggerTarget: [{ type: Input }],
    zIndex: [{ type: Input }],
    lazy: [{ type: Input }],
    variation: [{ type: Input }],
    isEnabled: [{ type: Input }],
    className: [{ type: Input }],
    onlyTextOverflow: [{ type: Input }],
    data: [{ type: Input }],
    useHostWidth: [{ type: Input }],
    hideOnEscape: [{ type: Input }],
    content: [{ type: Input, args: ['tippy',] }],
    customHost: [{ type: Input, args: ['tippyHost',] }],
    visible: [{ type: Output }],
    isVisible: [{ type: Input }],
    changed: [{ type: Output }]
};
function isChanged(key, changes) {
    return key in changes;
}

class TippyModule {
    static forRoot(config = {}) {
        return {
            ngModule: TippyModule,
            providers: [
                {
                    provide: TIPPY_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
TippyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TippyDirective],
                exports: [TippyDirective]
            },] }
];

const tooltipVariation = {
    theme: null,
    arrow: false,
    animation: 'scale',
    trigger: 'mouseenter',
    offset: [0, 5]
};
const popperVariation = {
    theme: 'light',
    arrow: true,
    offset: [0, 10],
    animation: null,
    trigger: 'click',
    interactive: true
};
function withContextMenuVariation(baseVariation) {
    return Object.assign(Object.assign({}, baseVariation), { placement: 'right-start', trigger: 'manual', arrow: false, offset: [0, 0] });
}

class TippyService {
    constructor(globalConfig, view, injector) {
        this.globalConfig = globalConfig;
        this.view = view;
        this.injector = injector;
    }
    create(host, content, options = {}) {
        const config = Object.assign(Object.assign(Object.assign(Object.assign({ onShow: instance => {
                var _a;
                if (!instance.$viewOptions) {
                    instance.$viewOptions = {};
                    if (isTemplateRef(content)) {
                        instance.$viewOptions.context = Object.assign({ $implicit: instance.hide.bind(instance) }, options.context);
                    }
                    else if (isComponent(content)) {
                        instance.$viewOptions.injector = Injector.create({
                            providers: [{ provide: TIPPY_REF, useValue: instance }],
                            parent: options.injector || this.injector
                        });
                    }
                }
                instance.view = this.view.createView(content, Object.assign(Object.assign({}, options), instance.$viewOptions));
                instance.setContent(instance.view.getElement());
                (_a = options === null || options === void 0 ? void 0 : options.onShow) === null || _a === void 0 ? void 0 : _a.call(options, instance);
            }, onHidden: instance => {
                var _a;
                instance.view.destroy();
                (_a = options === null || options === void 0 ? void 0 : options.onHidden) === null || _a === void 0 ? void 0 : _a.call(options, instance);
                instance.view = null;
            } }, onlyTippyProps(this.globalConfig)), this.globalConfig.variations[options.variation || this.globalConfig.defaultVariation]), onlyTippyProps(options)), { onCreate: instance => {
                var _a, _b, _c;
                if (options.className) {
                    for (const klass of normalizeClassName(options.className)) {
                        instance.popper.classList.add(klass);
                    }
                }
                (_b = (_a = this.globalConfig).onCreate) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                (_c = options.onCreate) === null || _c === void 0 ? void 0 : _c.call(options, instance);
            } });
        return tippy(host, config);
    }
}
TippyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TippyService_Factory() { return new TippyService(i0.ɵɵinject(TIPPY_CONFIG), i0.ɵɵinject(i2.ViewService), i0.ɵɵinject(i0.INJECTOR)); }, token: TippyService, providedIn: "root" });
TippyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
TippyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TIPPY_CONFIG,] }] },
    { type: ViewService },
    { type: Injector }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TIPPY_CONFIG, TIPPY_REF, TippyDirective, TippyModule, TippyService, inView, overflowChanges, popperVariation, tooltipVariation, withContextMenuVariation };
//# sourceMappingURL=ngneat-helipopper.js.map
