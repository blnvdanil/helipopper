import { Directive, ElementRef, EventEmitter, Inject, Injector, Input, NgZone, Output, PLATFORM_ID, ViewContainerRef } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import tippy from 'tippy.js';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { isComponent, isString, isTemplateRef, ViewService } from '@ngneat/overview';
import { dimensionsChanges, inView, normalizeClassName, onlyTippyProps, overflowChanges } from './utils';
import { TIPPY_CONFIG, TIPPY_REF } from './tippy.types';
export class TippyDirective {
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
                        if (isString(content)) {
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
        if (!this.viewOptions$ && !isString(this.content)) {
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
        if (isString(content) && this.globalConfig.beforeRender) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmduZWF0L2hlbGlwb3BwZXIvc3JjL2xpYi90aXBweS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04sV0FBVyxFQUNYLGdCQUFnQixFQUtqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQWlDLE1BQU0sa0JBQWtCLENBQUM7QUFFcEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3pHLE9BQU8sRUFBYSxZQUFZLEVBQUUsU0FBUyxFQUEwQyxNQUFNLGVBQWUsQ0FBQztBQU8zRyxNQUFNLE9BQU8sY0FBYztJQXVDekIsWUFDK0IsVUFBa0IsRUFDakIsWUFBeUIsRUFDL0MsUUFBa0IsRUFDbEIsV0FBd0IsRUFDeEIsR0FBcUIsRUFDckIsSUFBWSxFQUNaLE9BQW1CO1FBTkUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUMvQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xC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Q0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBRUwsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3NCQUNMLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxXQUFXO3NCQUVqQixNQUFNO3dCQUNOLEtBQUs7c0JBRUwsTUFBTTs7QUErUlQsU0FBUyxTQUFTLENBQUksR0FBWSxFQUFFLE9BQVU7SUFDNUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBpc0NvbXBvbmVudCwgaXNTdHJpbmcsIGlzVGVtcGxhdGVSZWYsIFZpZXdTZXJ2aWNlLCBWaWV3T3B0aW9ucywgVmlld1JlZiwgQ29udGVudCB9IGZyb20gJ0BuZ25lYXQvb3ZlcnZpZXcnO1xuXG5pbXBvcnQgeyBkaW1lbnNpb25zQ2hhbmdlcywgaW5WaWV3LCBub3JtYWxpemVDbGFzc05hbWUsIG9ubHlUaXBweVByb3BzLCBvdmVyZmxvd0NoYW5nZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IE5nQ2hhbmdlcywgVElQUFlfQ09ORklHLCBUSVBQWV9SRUYsIFRpcHB5Q29uZmlnLCBUaXBweUluc3RhbmNlLCBUaXBweVByb3BzIH0gZnJvbSAnLi90aXBweS50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1t0aXBweV0nLFxuICBleHBvcnRBczogJ3RpcHB5J1xufSlcbmV4cG9ydCBjbGFzcyBUaXBweURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xuICBASW5wdXQoKSBhcHBlbmRUbzogVGlwcHlQcm9wc1snYXBwZW5kVG8nXTtcbiAgQElucHV0KCkgZGVsYXk6IFRpcHB5UHJvcHNbJ2RlbGF5J107XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBUaXBweVByb3BzWydkdXJhdGlvbiddO1xuICBASW5wdXQoKSBoaWRlT25DbGljazogVGlwcHlQcm9wc1snaGlkZU9uQ2xpY2snXTtcbiAgQElucHV0KCkgaW50ZXJhY3RpdmU6IFRpcHB5UHJvcHNbJ2ludGVyYWN0aXZlJ107XG4gIEBJbnB1dCgpIGludGVyYWN0aXZlQm9yZGVyOiBUaXBweVByb3BzWydpbnRlcmFjdGl2ZUJvcmRlciddO1xuICBASW5wdXQoKSBtYXhXaWR0aDogVGlwcHlQcm9wc1snbWF4V2lkdGgnXTtcbiAgQElucHV0KCkgb2Zmc2V0OiBUaXBweVByb3BzWydvZmZzZXQnXTtcbiAgQElucHV0KCkgcGxhY2VtZW50OiBUaXBweVByb3BzWydwbGFjZW1lbnQnXTtcbiAgQElucHV0KCkgcG9wcGVyT3B0aW9uczogVGlwcHlQcm9wc1sncG9wcGVyT3B0aW9ucyddO1xuICBASW5wdXQoKSBzaG93T25DcmVhdGU6IFRpcHB5UHJvcHNbJ3Nob3dPbkNyZWF0ZSddO1xuICBASW5wdXQoKSB0cmlnZ2VyOiBUaXBweVByb3BzWyd0cmlnZ2VyJ107XG4gIEBJbnB1dCgpIHRyaWdnZXJUYXJnZXQ6IFRpcHB5UHJvcHNbJ3RyaWdnZXJUYXJnZXQnXTtcbiAgQElucHV0KCkgekluZGV4OiBUaXBweVByb3BzWyd6SW5kZXgnXTtcblxuICBASW5wdXQoKSBsYXp5OiBib29sZWFuO1xuICBASW5wdXQoKSB2YXJpYXRpb246IHN0cmluZztcbiAgQElucHV0KCkgaXNFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBvbmx5VGV4dE92ZXJmbG93ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgdXNlSG9zdFdpZHRoID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZGVPbkVzY2FwZSA9IGZhbHNlO1xuICBASW5wdXQoJ3RpcHB5JykgY29udGVudDogQ29udGVudDtcbiAgQElucHV0KCd0aXBweUhvc3QnKSBjdXN0b21Ib3N0OiBIVE1MRWxlbWVudDtcblxuICBAT3V0cHV0KCkgdmlzaWJsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgcHVibGljIGlzVmlzaWJsZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgaW5zdGFuY2U6IFRpcHB5SW5zdGFuY2U7XG4gIHByaXZhdGUgdmlld1JlZjogVmlld1JlZjtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHByb3BzOiBQYXJ0aWFsPFRpcHB5Q29uZmlnPjtcbiAgcHJpdmF0ZSBlbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSB2YXJpYXRpb25EZWZpbmVkID0gZmFsc2U7XG4gIHByaXZhdGUgdmlld09wdGlvbnMkOiBWaWV3T3B0aW9ucztcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgQEluamVjdChUSVBQWV9DT05GSUcpIHByaXZhdGUgZ2xvYmFsQ29uZmlnOiBUaXBweUNvbmZpZyxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHZpZXdTZXJ2aWNlOiBWaWV3U2VydmljZSxcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGhvc3RSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxUaXBweURpcmVjdGl2ZT4pIHtcbiAgICBpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSByZXR1cm47XG5cbiAgICBsZXQgcHJvcHM6IFBhcnRpYWw8VGlwcHlDb25maWc+ID0gT2JqZWN0LmtleXMoY2hhbmdlcykucmVkdWNlKChhY2MsIGNoYW5nZSkgPT4ge1xuICAgICAgaWYgKGNoYW5nZSA9PT0gJ2lzVmlzaWJsZScpIHJldHVybiBhY2M7XG5cbiAgICAgIGFjY1tjaGFuZ2VdID0gY2hhbmdlc1tjaGFuZ2VdLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgdmFyaWF0aW9uOiBzdHJpbmc7XG5cbiAgICBpZiAoaXNDaGFuZ2VkPE5nQ2hhbmdlczxUaXBweURpcmVjdGl2ZT4+KCd2YXJpYXRpb24nLCBjaGFuZ2VzKSkge1xuICAgICAgdmFyaWF0aW9uID0gY2hhbmdlcy52YXJpYXRpb24uY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy52YXJpYXRpb25EZWZpbmVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnZhcmlhdGlvbkRlZmluZWQpIHtcbiAgICAgIHZhcmlhdGlvbiA9IHRoaXMuZ2xvYmFsQ29uZmlnLmRlZmF1bHRWYXJpYXRpb247XG4gICAgICB0aGlzLnZhcmlhdGlvbkRlZmluZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YXJpYXRpb24pIHtcbiAgICAgIHByb3BzID0ge1xuICAgICAgICAuLi50aGlzLmdsb2JhbENvbmZpZy52YXJpYXRpb25zW3ZhcmlhdGlvbl0sXG4gICAgICAgIC4uLnByb3BzXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc0NoYW5nZWQ8TmdDaGFuZ2VzPFRpcHB5RGlyZWN0aXZlPj4oJ2lzRW5hYmxlZCcsIGNoYW5nZXMpKSB7XG4gICAgICB0aGlzLmVuYWJsZWQgPSBjaGFuZ2VzLmlzRW5hYmxlZC5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgIH1cblxuICAgIGlmIChpc0NoYW5nZWQ8TmdDaGFuZ2VzPFRpcHB5RGlyZWN0aXZlPj4oJ2lzVmlzaWJsZScsIGNoYW5nZXMpKSB7XG4gICAgICB0aGlzLmlzVmlzaWJsZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcm9wcyhwcm9wcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy51c2VIb3N0V2lkdGgpIHtcbiAgICAgIHRoaXMucHJvcHMubWF4V2lkdGggPSB0aGlzLmhvc3RXaWR0aDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxhenkpIHtcbiAgICAgICAgaWYgKHRoaXMub25seVRleHRPdmVyZmxvdykge1xuICAgICAgICAgIGluVmlldyh0aGlzLmhvc3QpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IG92ZXJmbG93Q2hhbmdlcyh0aGlzLmhvc3QpKSxcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZShpc0VsZW1lbnRPdmVyZmxvdyA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tPdmVyZmxvdyhpc0VsZW1lbnRPdmVyZmxvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpblZpZXcodGhpcy5ob3N0KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9ubHlUZXh0T3ZlcmZsb3cpIHtcbiAgICAgICAgb3ZlcmZsb3dDaGFuZ2VzKHRoaXMuaG9zdClcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoaXNFbGVtZW50T3ZlcmZsb3cgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja092ZXJmbG93KGlzRWxlbWVudE92ZXJmbG93KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmluc3RhbmNlPy5kZXN0cm95KCk7XG4gICAgdGhpcy5kZXN0cm95VmlldygpO1xuICB9XG5cbiAgZGVzdHJveVZpZXcoKSB7XG4gICAgdGhpcy52aWV3UmVmPy5kZXN0cm95KCk7XG4gICAgdGhpcy52aWV3UmVmID0gbnVsbDtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5pbnN0YW5jZT8uc2hvdygpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmluc3RhbmNlPy5oaWRlKCk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5pbnN0YW5jZT8uZW5hYmxlKCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaW5zdGFuY2U/LmRpc2FibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UHJvcHMocHJvcHM6IFBhcnRpYWw8VGlwcHlDb25maWc+KSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuaW5zdGFuY2U/LnNldFByb3BzKG9ubHlUaXBweVByb3BzKHByb3BzKSk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0YXR1cygpIHtcbiAgICB0aGlzLmVuYWJsZWQgPyB0aGlzLmluc3RhbmNlPy5lbmFibGUoKSA6IHRoaXMuaW5zdGFuY2U/LmRpc2FibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUhvc3QgfHwgdGhpcy5ob3N0UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBob3N0V2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5ob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRofXB4YDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSW5zdGFuY2UoKSB7XG4gICAgaWYgKHRoaXMuY29udGVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aXBweSh0aGlzLmhvc3QsIHtcbiAgICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgLi4ub25seVRpcHB5UHJvcHModGhpcy5nbG9iYWxDb25maWcpLFxuICAgICAgICAuLi5vbmx5VGlwcHlQcm9wcyh0aGlzLnByb3BzKSxcbiAgICAgICAgb25Nb3VudDogaW5zdGFuY2UgPT4ge1xuICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnZpc2libGUubmV4dCh0cnVlKTtcbiAgICAgICAgICB0aGlzLnVzZUhvc3RXaWR0aCAmJiB0aGlzLmxpc3RlblRvSG9zdFJlc2l6ZSgpO1xuICAgICAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnLm9uTW91bnQ/LihpbnN0YW5jZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ3JlYXRlOiBpbnN0YW5jZSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtsYXNzIG9mIG5vcm1hbGl6ZUNsYXNzTmFtZSh0aGlzLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2UucG9wcGVyLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdsb2JhbENvbmZpZy5vbkNyZWF0ZT8uKGluc3RhbmNlKTtcbiAgICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2hvdzogaW5zdGFuY2UgPT4ge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMucmVzb2x2ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhjb250ZW50KSkge1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7IGFsbG93SFRNTDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5oaWRlT25Fc2NhcGUgJiYgdGhpcy5oYW5kbGVFc2NhcGVCdXR0b24oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodGhpcy51c2VIb3N0V2lkdGgpIHtcbiAgICAgICAgICAgIC8vIERvbid0IGFjY2VzcyBgaG9zdFdpZHRoYCBtdWx0aXBsZSB0aW1lcyBzaW5jZSBpdCdzIGEgZ2V0dGVyIHRoYXQgY2FsbHMgYGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpYCxcbiAgICAgICAgICAgIC8vIHdoaWNoIHRyaWdnZXJzIHRoZSB3aG9sZSBsYXlvdXQgdXBkYXRlLlxuICAgICAgICAgICAgY29uc3QgaG9zdFdpZHRoID0gdGhpcy5ob3N0V2lkdGg7XG4gICAgICAgICAgICBpbnN0YW5jZS5wb3BwZXIuc3R5bGUud2lkdGggPSBob3N0V2lkdGg7XG4gICAgICAgICAgICBpbnN0YW5jZS5wb3BwZXIuc3R5bGUubWF4V2lkdGggPSBob3N0V2lkdGg7XG4gICAgICAgICAgICAoaW5zdGFuY2UucG9wcGVyLmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5tYXhXaWR0aCA9IGhvc3RXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nbG9iYWxDb25maWcub25TaG93Py4oaW5zdGFuY2UpO1xuICAgICAgICB9LFxuICAgICAgICBvbkhpZGRlbjogaW5zdGFuY2UgPT4ge1xuICAgICAgICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcbiAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudmlzaWJsZS5uZXh0KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmdsb2JhbENvbmZpZy5vbkhpZGRlbj8uKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgICB0aGlzLnNldFByb3BzKHRoaXMucHJvcHMpO1xuXG4gICAgICB0aGlzLnZhcmlhdGlvbiA9PT0gJ2NvbnRleHRNZW51JyAmJiB0aGlzLmhhbmRsZUNvbnRleHRNZW51KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDb250ZW50KCkge1xuICAgIGlmICghdGhpcy52aWV3T3B0aW9ucyQgJiYgIWlzU3RyaW5nKHRoaXMuY29udGVudCkpIHtcbiAgICAgIGlmIChpc0NvbXBvbmVudCh0aGlzLmNvbnRlbnQpKSB7XG4gICAgICAgIHRoaXMudmlld09wdGlvbnMkID0ge1xuICAgICAgICAgIGluamVjdG9yOiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBUSVBQWV9SRUYsIHVzZVZhbHVlOiB0aGlzLmluc3RhbmNlIH1dLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yXG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUZW1wbGF0ZVJlZih0aGlzLmNvbnRlbnQpKSB7XG4gICAgICAgIHRoaXMudmlld09wdGlvbnMkID0ge1xuICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5oaWRlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy52aWV3UmVmID0gdGhpcy52aWV3U2VydmljZS5jcmVhdGVWaWV3KHRoaXMuY29udGVudCwge1xuICAgICAgdmNyOiB0aGlzLnZjcixcbiAgICAgIC4uLnRoaXMudmlld09wdGlvbnMkXG4gICAgfSk7XG5cbiAgICBsZXQgY29udGVudCA9IHRoaXMudmlld1JlZi5nZXRFbGVtZW50KCk7XG5cbiAgICBpZiAoaXNTdHJpbmcoY29udGVudCkgJiYgdGhpcy5nbG9iYWxDb25maWcuYmVmb3JlUmVuZGVyKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5nbG9iYWxDb25maWcuYmVmb3JlUmVuZGVyKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb250ZXh0TWVudSgpIHtcbiAgICBmcm9tRXZlbnQodGhpcy5ob3N0LCAnY29udGV4dG1lbnUnKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogKCkgPT4gKHtcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgYm90dG9tOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgbGVmdDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgIHJpZ2h0OiBldmVudC5jbGllbnRYXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zaG93KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXNjYXBlQnV0dG9uKCkge1xuICAgIHRoaXMucHJlc3NCdXR0b24kKGRvY3VtZW50LmJvZHksICdFc2NhcGUnKVxuICAgICAgLnBpcGUodGFrZVVudGlsKG1lcmdlKHRoaXMuZGVzdHJveWVkLCB0aGlzLnZpc2libGUucGlwZShmaWx0ZXIodiA9PiAhdikpKSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGlkZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlc3NCdXR0b24kKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb2RlQnV0dG9uOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnJvbUV2ZW50KGVsZW1lbnQsICdrZXlkb3duJykucGlwZShmaWx0ZXIoKHsgY29kZSB9OiBLZXlib2FyZEV2ZW50KSA9PiBjb2RlQnV0dG9uID09PSBjb2RlKSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrT3ZlcmZsb3coaXNFbGVtZW50T3ZlcmZsb3c6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNFbGVtZW50T3ZlcmZsb3cpIHtcbiAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICB0aGlzLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlPy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Ub0hvc3RSZXNpemUoKSB7XG4gICAgZGltZW5zaW9uc0NoYW5nZXModGhpcy5ob3N0KVxuICAgICAgLnBpcGUodGFrZVVudGlsKG1lcmdlKHRoaXMuZGVzdHJveWVkLCB0aGlzLnZpc2libGUpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlLnBvcHBlci5zdHlsZS53aWR0aCA9IHRoaXMuaG9zdFdpZHRoO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGFuZ2VkPFQ+KGtleToga2V5b2YgVCwgY2hhbmdlczogVCkge1xuICByZXR1cm4ga2V5IGluIGNoYW5nZXM7XG59XG4iXX0=