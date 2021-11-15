import { Directive, EventEmitter, Inject, Injector, Input, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import tippy from 'tippy.js';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { isComponent, isString, isTemplateRef } from '@ngneat/overview';
import { dimensionsChanges, inView, normalizeClassName, onlyTippyProps, overflowChanges } from './utils';
import { TIPPY_CONFIG, TIPPY_REF } from './tippy.types';
import * as i0 from "@angular/core";
import * as i1 from "@ngneat/overview";
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
TippyDirective.ɵfac = function TippyDirective_Factory(t) { return new (t || TippyDirective)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(TIPPY_CONFIG), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i1.ViewService), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
TippyDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TippyDirective, selectors: [["", "tippy", ""]], inputs: { appendTo: "appendTo", delay: "delay", duration: "duration", hideOnClick: "hideOnClick", interactive: "interactive", interactiveBorder: "interactiveBorder", maxWidth: "maxWidth", offset: "offset", placement: "placement", popperOptions: "popperOptions", showOnCreate: "showOnCreate", trigger: "trigger", triggerTarget: "triggerTarget", zIndex: "zIndex", lazy: "lazy", variation: "variation", isEnabled: "isEnabled", className: "className", onlyTextOverflow: "onlyTextOverflow", data: "data", useHostWidth: "useHostWidth", hideOnEscape: "hideOnEscape", content: ["tippy", "content"], customHost: ["tippyHost", "customHost"], isVisible: "isVisible" }, outputs: { visible: "visible", changed: "changed" }, exportAs: ["tippy"], features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TippyDirective, [{
        type: Directive,
        args: [{
                // eslint-disable-next-line @angular-eslint/directive-selector
                selector: '[tippy]',
                exportAs: 'tippy'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [TIPPY_CONFIG]
            }] }, { type: i0.Injector }, { type: i1.ViewService }, { type: i0.ViewContainerRef }, { type: i0.NgZone }, { type: i0.ElementRef }]; }, { appendTo: [{
            type: Input
        }], delay: [{
            type: Input
        }], duration: [{
            type: Input
        }], hideOnClick: [{
            type: Input
        }], interactive: [{
            type: Input
        }], interactiveBorder: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], offset: [{
            type: Input
        }], placement: [{
            type: Input
        }], popperOptions: [{
            type: Input
        }], showOnCreate: [{
            type: Input
        }], trigger: [{
            type: Input
        }], triggerTarget: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], lazy: [{
            type: Input
        }], variation: [{
            type: Input
        }], isEnabled: [{
            type: Input
        }], className: [{
            type: Input
        }], onlyTextOverflow: [{
            type: Input
        }], data: [{
            type: Input
        }], useHostWidth: [{
            type: Input
        }], hideOnEscape: [{
            type: Input
        }], content: [{
            type: Input,
            args: ['tippy']
        }], customHost: [{
            type: Input,
            args: ['tippyHost']
        }], visible: [{
            type: Output
        }], isVisible: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
function isChanged(key, changes) {
    return key in changes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmduZWF0L2hlbGlwb3BwZXIvc3JjL2xpYi90aXBweS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBRUwsTUFBTSxFQUNOLFdBQVcsRUFNWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBOEMsTUFBTSxrQkFBa0IsQ0FBQztBQUVwSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekcsT0FBTyxFQUFhLFlBQVksRUFBRSxTQUFTLEVBQTBDLE1BQU0sZUFBZSxDQUFDOzs7QUFPM0csTUFBTSxPQUFPLGNBQWM7SUF1Q3pCLFlBQytCLFVBQWtCLEVBQ2pCLFlBQXlCLEVBQy9DLFFBQWtCLEVBQ2xCLFdBQXdCLEVBQ3hCLEdBQXFCLEVBQ3JCLElBQVksRUFDWixPQUFtQjtRQU5FLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDL0MsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixRQUFHLEdBQUgsR0FB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SztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBRUcsSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDVSxPQUFPO2tCQUF0QixLQUFLO21CQUFDLE9BQU87WUFDTSxVQUFVO2tCQUE3QixLQUFLO21CQUFDLFdBQVc7WUFFUixPQUFPO2tCQUFoQixNQUFNO1lBQ1MsU0FBUztrQkFBeEIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU07O0FBK1JULFNBQVMsU0FBUyxDQUFJLEdBQVksRUFBRSxPQUFVO0lBQzVDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQsIGlzU3RyaW5nLCBpc1RlbXBsYXRlUmVmLCBWaWV3U2VydmljZSwgVmlld09wdGlvbnMsIFZpZXdSZWYsIENvbnRlbnQgfSBmcm9tICdAbmduZWF0L292ZXJ2aWV3JztcblxuaW1wb3J0IHsgZGltZW5zaW9uc0NoYW5nZXMsIGluVmlldywgbm9ybWFsaXplQ2xhc3NOYW1lLCBvbmx5VGlwcHlQcm9wcywgb3ZlcmZsb3dDaGFuZ2VzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMsIFRJUFBZX0NPTkZJRywgVElQUFlfUkVGLCBUaXBweUNvbmZpZywgVGlwcHlJbnN0YW5jZSwgVGlwcHlQcm9wcyB9IGZyb20gJy4vdGlwcHkudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbdGlwcHldJyxcbiAgZXhwb3J0QXM6ICd0aXBweSdcbn0pXG5leHBvcnQgY2xhc3MgVGlwcHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQElucHV0KCkgYXBwZW5kVG86IFRpcHB5UHJvcHNbJ2FwcGVuZFRvJ107XG4gIEBJbnB1dCgpIGRlbGF5OiBUaXBweVByb3BzWydkZWxheSddO1xuICBASW5wdXQoKSBkdXJhdGlvbjogVGlwcHlQcm9wc1snZHVyYXRpb24nXTtcbiAgQElucHV0KCkgaGlkZU9uQ2xpY2s6IFRpcHB5UHJvcHNbJ2hpZGVPbkNsaWNrJ107XG4gIEBJbnB1dCgpIGludGVyYWN0aXZlOiBUaXBweVByb3BzWydpbnRlcmFjdGl2ZSddO1xuICBASW5wdXQoKSBpbnRlcmFjdGl2ZUJvcmRlcjogVGlwcHlQcm9wc1snaW50ZXJhY3RpdmVCb3JkZXInXTtcbiAgQElucHV0KCkgbWF4V2lkdGg6IFRpcHB5UHJvcHNbJ21heFdpZHRoJ107XG4gIEBJbnB1dCgpIG9mZnNldDogVGlwcHlQcm9wc1snb2Zmc2V0J107XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogVGlwcHlQcm9wc1sncGxhY2VtZW50J107XG4gIEBJbnB1dCgpIHBvcHBlck9wdGlvbnM6IFRpcHB5UHJvcHNbJ3BvcHBlck9wdGlvbnMnXTtcbiAgQElucHV0KCkgc2hvd09uQ3JlYXRlOiBUaXBweVByb3BzWydzaG93T25DcmVhdGUnXTtcbiAgQElucHV0KCkgdHJpZ2dlcjogVGlwcHlQcm9wc1sndHJpZ2dlciddO1xuICBASW5wdXQoKSB0cmlnZ2VyVGFyZ2V0OiBUaXBweVByb3BzWyd0cmlnZ2VyVGFyZ2V0J107XG4gIEBJbnB1dCgpIHpJbmRleDogVGlwcHlQcm9wc1snekluZGV4J107XG5cbiAgQElucHV0KCkgbGF6eTogYm9vbGVhbjtcbiAgQElucHV0KCkgdmFyaWF0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlzRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgb25seVRleHRPdmVyZmxvdyA9IGZhbHNlO1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIHVzZUhvc3RXaWR0aCA9IGZhbHNlO1xuICBASW5wdXQoKSBoaWRlT25Fc2NhcGUgPSBmYWxzZTtcbiAgQElucHV0KCd0aXBweScpIGNvbnRlbnQ6IENvbnRlbnQ7XG4gIEBJbnB1dCgndGlwcHlIb3N0JykgY3VzdG9tSG9zdDogSFRNTEVsZW1lbnQ7XG5cbiAgQE91dHB1dCgpIHZpc2libGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpIHB1YmxpYyBpc1Zpc2libGUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGluc3RhbmNlOiBUaXBweUluc3RhbmNlO1xuICBwcml2YXRlIHZpZXdSZWY6IFZpZXdSZWY7XG4gIHByaXZhdGUgZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBwcm9wczogUGFydGlhbDxUaXBweUNvbmZpZz47XG4gIHByaXZhdGUgZW5hYmxlZCA9IHRydWU7XG4gIHByaXZhdGUgdmFyaWF0aW9uRGVmaW5lZCA9IGZhbHNlO1xuICBwcml2YXRlIHZpZXdPcHRpb25zJDogVmlld09wdGlvbnM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIEBJbmplY3QoVElQUFlfQ09ORklHKSBwcml2YXRlIGdsb2JhbENvbmZpZzogVGlwcHlDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB2aWV3U2VydmljZTogVmlld1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBob3N0UmVmOiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8VGlwcHlEaXJlY3RpdmU+KSB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkgcmV0dXJuO1xuXG4gICAgbGV0IHByb3BzOiBQYXJ0aWFsPFRpcHB5Q29uZmlnPiA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLnJlZHVjZSgoYWNjLCBjaGFuZ2UpID0+IHtcbiAgICAgIGlmIChjaGFuZ2UgPT09ICdpc1Zpc2libGUnKSByZXR1cm4gYWNjO1xuXG4gICAgICBhY2NbY2hhbmdlXSA9IGNoYW5nZXNbY2hhbmdlXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuXG4gICAgbGV0IHZhcmlhdGlvbjogc3RyaW5nO1xuXG4gICAgaWYgKGlzQ2hhbmdlZDxOZ0NoYW5nZXM8VGlwcHlEaXJlY3RpdmU+PigndmFyaWF0aW9uJywgY2hhbmdlcykpIHtcbiAgICAgIHZhcmlhdGlvbiA9IGNoYW5nZXMudmFyaWF0aW9uLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMudmFyaWF0aW9uRGVmaW5lZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghdGhpcy52YXJpYXRpb25EZWZpbmVkKSB7XG4gICAgICB2YXJpYXRpb24gPSB0aGlzLmdsb2JhbENvbmZpZy5kZWZhdWx0VmFyaWF0aW9uO1xuICAgICAgdGhpcy52YXJpYXRpb25EZWZpbmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWF0aW9uKSB7XG4gICAgICBwcm9wcyA9IHtcbiAgICAgICAgLi4udGhpcy5nbG9iYWxDb25maWcudmFyaWF0aW9uc1t2YXJpYXRpb25dLFxuICAgICAgICAuLi5wcm9wc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNDaGFuZ2VkPE5nQ2hhbmdlczxUaXBweURpcmVjdGl2ZT4+KCdpc0VuYWJsZWQnLCBjaGFuZ2VzKSkge1xuICAgICAgdGhpcy5lbmFibGVkID0gY2hhbmdlcy5pc0VuYWJsZWQuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNDaGFuZ2VkPE5nQ2hhbmdlczxUaXBweURpcmVjdGl2ZT4+KCdpc1Zpc2libGUnLCBjaGFuZ2VzKSkge1xuICAgICAgdGhpcy5pc1Zpc2libGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudXNlSG9zdFdpZHRoKSB7XG4gICAgICB0aGlzLnByb3BzLm1heFdpZHRoID0gdGhpcy5ob3N0V2lkdGg7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5sYXp5KSB7XG4gICAgICAgIGlmICh0aGlzLm9ubHlUZXh0T3ZlcmZsb3cpIHtcbiAgICAgICAgICBpblZpZXcodGhpcy5ob3N0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiBvdmVyZmxvd0NoYW5nZXModGhpcy5ob3N0KSksXG4gICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaXNFbGVtZW50T3ZlcmZsb3cgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNoZWNrT3ZlcmZsb3coaXNFbGVtZW50T3ZlcmZsb3cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5WaWV3KHRoaXMuaG9zdClcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vbmx5VGV4dE92ZXJmbG93KSB7XG4gICAgICAgIG92ZXJmbG93Q2hhbmdlcyh0aGlzLmhvc3QpXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKGlzRWxlbWVudE92ZXJmbG93ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPdmVyZmxvdyhpc0VsZW1lbnRPdmVyZmxvdyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5pbnN0YW5jZT8uZGVzdHJveSgpO1xuICAgIHRoaXMuZGVzdHJveVZpZXcoKTtcbiAgfVxuXG4gIGRlc3Ryb3lWaWV3KCkge1xuICAgIHRoaXMudmlld1JlZj8uZGVzdHJveSgpO1xuICAgIHRoaXMudmlld1JlZiA9IG51bGw7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuaW5zdGFuY2U/LnNob3coKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5pbnN0YW5jZT8uaGlkZSgpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuaW5zdGFuY2U/LmVuYWJsZSgpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmluc3RhbmNlPy5kaXNhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFByb3BzKHByb3BzOiBQYXJ0aWFsPFRpcHB5Q29uZmlnPikge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLmluc3RhbmNlPy5zZXRQcm9wcyhvbmx5VGlwcHlQcm9wcyhwcm9wcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdGF0dXMoKSB7XG4gICAgdGhpcy5lbmFibGVkID8gdGhpcy5pbnN0YW5jZT8uZW5hYmxlKCkgOiB0aGlzLmluc3RhbmNlPy5kaXNhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBob3N0KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21Ib3N0IHx8IHRoaXMuaG9zdFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaG9zdFdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aH1weGA7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluc3RhbmNlKCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGlwcHkodGhpcy5ob3N0LCB7XG4gICAgICAgIGFsbG93SFRNTDogdHJ1ZSxcbiAgICAgICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksXG4gICAgICAgIC4uLm9ubHlUaXBweVByb3BzKHRoaXMuZ2xvYmFsQ29uZmlnKSxcbiAgICAgICAgLi4ub25seVRpcHB5UHJvcHModGhpcy5wcm9wcyksXG4gICAgICAgIG9uTW91bnQ6IGluc3RhbmNlID0+IHtcbiAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy52aXNpYmxlLm5leHQodHJ1ZSk7XG4gICAgICAgICAgdGhpcy51c2VIb3N0V2lkdGggJiYgdGhpcy5saXN0ZW5Ub0hvc3RSZXNpemUoKTtcbiAgICAgICAgICB0aGlzLmdsb2JhbENvbmZpZy5vbk1vdW50Py4oaW5zdGFuY2UpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNyZWF0ZTogaW5zdGFuY2UgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrbGFzcyBvZiBub3JtYWxpemVDbGFzc05hbWUodGhpcy5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgIGluc3RhbmNlLnBvcHBlci5jbGFzc0xpc3QuYWRkKGtsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nbG9iYWxDb25maWcub25DcmVhdGU/LihpbnN0YW5jZSk7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblNob3c6IGluc3RhbmNlID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlc29sdmVDb250ZW50KCk7XG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoeyBhbGxvd0hUTUw6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU9uRXNjYXBlICYmIHRoaXMuaGFuZGxlRXNjYXBlQnV0dG9uKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHRoaXMudXNlSG9zdFdpZHRoKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBhY2Nlc3MgYGhvc3RXaWR0aGAgbXVsdGlwbGUgdGltZXMgc2luY2UgaXQncyBhIGdldHRlciB0aGF0IGNhbGxzIGBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKWAsXG4gICAgICAgICAgICAvLyB3aGljaCB0cmlnZ2VycyB0aGUgd2hvbGUgbGF5b3V0IHVwZGF0ZS5cbiAgICAgICAgICAgIGNvbnN0IGhvc3RXaWR0aCA9IHRoaXMuaG9zdFdpZHRoO1xuICAgICAgICAgICAgaW5zdGFuY2UucG9wcGVyLnN0eWxlLndpZHRoID0gaG9zdFdpZHRoO1xuICAgICAgICAgICAgaW5zdGFuY2UucG9wcGVyLnN0eWxlLm1heFdpZHRoID0gaG9zdFdpZHRoO1xuICAgICAgICAgICAgKGluc3RhbmNlLnBvcHBlci5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRWxlbWVudCkuc3R5bGUubWF4V2lkdGggPSBob3N0V2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnLm9uU2hvdz8uKGluc3RhbmNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25IaWRkZW46IGluc3RhbmNlID0+IHtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lWaWV3KCk7XG4gICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnZpc2libGUubmV4dChmYWxzZSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxDb25maWcub25IaWRkZW4/LihpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgICAgdGhpcy5zZXRQcm9wcyh0aGlzLnByb3BzKTtcblxuICAgICAgdGhpcy52YXJpYXRpb24gPT09ICdjb250ZXh0TWVudScgJiYgdGhpcy5oYW5kbGVDb250ZXh0TWVudSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQ29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMudmlld09wdGlvbnMkICYmICFpc1N0cmluZyh0aGlzLmNvbnRlbnQpKSB7XG4gICAgICBpZiAoaXNDb21wb25lbnQodGhpcy5jb250ZW50KSkge1xuICAgICAgICB0aGlzLnZpZXdPcHRpb25zJCA9IHtcbiAgICAgICAgICBpbmplY3RvcjogSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogVElQUFlfUkVGLCB1c2VWYWx1ZTogdGhpcy5pbnN0YW5jZSB9XSxcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5pbmplY3RvclxuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGlzVGVtcGxhdGVSZWYodGhpcy5jb250ZW50KSkge1xuICAgICAgICB0aGlzLnZpZXdPcHRpb25zJCA9IHtcbiAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMuaGlkZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudmlld1JlZiA9IHRoaXMudmlld1NlcnZpY2UuY3JlYXRlVmlldyh0aGlzLmNvbnRlbnQsIHtcbiAgICAgIHZjcjogdGhpcy52Y3IsXG4gICAgICAuLi50aGlzLnZpZXdPcHRpb25zJFxuICAgIH0pO1xuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLnZpZXdSZWYuZ2V0RWxlbWVudCgpO1xuXG4gICAgaWYgKGlzU3RyaW5nKGNvbnRlbnQpICYmIHRoaXMuZ2xvYmFsQ29uZmlnLmJlZm9yZVJlbmRlcikge1xuICAgICAgY29udGVudCA9IHRoaXMuZ2xvYmFsQ29uZmlnLmJlZm9yZVJlbmRlcihjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29udGV4dE1lbnUoKSB7XG4gICAgZnJvbUV2ZW50KHRoaXMuaG9zdCwgJ2NvbnRleHRtZW51JylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6ICgpID0+ICh7XG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHRvcDogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgIGxlZnQ6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVzY2FwZUJ1dHRvbigpIHtcbiAgICB0aGlzLnByZXNzQnV0dG9uJChkb2N1bWVudC5ib2R5LCAnRXNjYXBlJylcbiAgICAgIC5waXBlKHRha2VVbnRpbChtZXJnZSh0aGlzLmRlc3Ryb3llZCwgdGhpcy52aXNpYmxlLnBpcGUoZmlsdGVyKHYgPT4gIXYpKSkpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhpZGUoKSk7XG4gIH1cblxuICBwcml2YXRlIHByZXNzQnV0dG9uJChlbGVtZW50OiBIVE1MRWxlbWVudCwgY29kZUJ1dHRvbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZyb21FdmVudChlbGVtZW50LCAna2V5ZG93bicpLnBpcGUoZmlsdGVyKCh7IGNvZGUgfTogS2V5Ym9hcmRFdmVudCkgPT4gY29kZUJ1dHRvbiA9PT0gY29kZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja092ZXJmbG93KGlzRWxlbWVudE92ZXJmbG93OiBib29sZWFuKSB7XG4gICAgaWYgKGlzRWxlbWVudE92ZXJmbG93KSB7XG4gICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZT8uZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuVG9Ib3N0UmVzaXplKCkge1xuICAgIGRpbWVuc2lvbnNDaGFuZ2VzKHRoaXMuaG9zdClcbiAgICAgIC5waXBlKHRha2VVbnRpbChtZXJnZSh0aGlzLmRlc3Ryb3llZCwgdGhpcy52aXNpYmxlKSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5wb3BwZXIuc3R5bGUud2lkdGggPSB0aGlzLmhvc3RXaWR0aDtcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ2hhbmdlZDxUPihrZXk6IGtleW9mIFQsIGNoYW5nZXM6IFQpIHtcbiAgcmV0dXJuIGtleSBpbiBjaGFuZ2VzO1xufVxuIl19