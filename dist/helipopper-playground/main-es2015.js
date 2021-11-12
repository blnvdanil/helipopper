(self["webpackChunkhelipopper_playground"] = self["webpackChunkhelipopper_playground"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4121:
/*!********************************************************!*\
  !*** ./projects/ngneat/helipopper/src/lib/defaults.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tooltipVariation": function() { return /* binding */ tooltipVariation; },
/* harmony export */   "popperVariation": function() { return /* binding */ popperVariation; },
/* harmony export */   "withContextMenuVariation": function() { return /* binding */ withContextMenuVariation; }
/* harmony export */ });
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


/***/ }),

/***/ 6544:
/*!***************************************************************!*\
  !*** ./projects/ngneat/helipopper/src/lib/tippy.directive.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippyDirective": function() { return /* binding */ TippyDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tippy.js */ 253);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6937);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3763);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7540);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5755);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4689);
/* harmony import */ var _ngneat_overview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/overview */ 3633);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 153);
/* harmony import */ var _tippy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy.types */ 9781);










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
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isVisible = false;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.enabled = true;
        this.variationDefined = false;
    }
    ngOnChanges(changes) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformServer)(this.platformId))
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
        this.zone.run(() => {
            if (this.lazy) {
                if (this.onlyTextOverflow) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.inView)(this.host)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.overflowChanges)(this.host)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed))
                        .subscribe(isElementOverflow => {
                        this.checkOverflow(isElementOverflow);
                    });
                }
                else {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.inView)(this.host)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed))
                        .subscribe(() => {
                        this.createInstance();
                    });
                }
            }
            else if (this.onlyTextOverflow) {
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.overflowChanges)(this.host)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed))
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
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.setProps((0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyTippyProps)(props));
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
        this.zone.run(() => {
            this.instance = (0,tippy_js__WEBPACK_IMPORTED_MODULE_7__.default)(this.host, Object.assign(Object.assign(Object.assign({ allowHTML: true, appendTo: document.body }, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyTippyProps)(this.globalConfig)), (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onlyTippyProps)(this.props)), { onMount: instance => {
                    var _a, _b;
                    this.isVisible = true;
                    this.visible.next(true);
                    this.useHostWidth && this.listenToHostResize();
                    (_b = (_a = this.globalConfig).onMount) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                }, onCreate: instance => {
                    var _a, _b;
                    if (this.className) {
                        for (const klass of (0,_utils__WEBPACK_IMPORTED_MODULE_0__.normalizeClassName)(this.className)) {
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
                        if ((0,_ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isString)(content)) {
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
        if (!this.viewOptions$ && !(0,_ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isString)(this.content)) {
            if ((0,_ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isComponent)(this.content)) {
                this.viewOptions$ = {
                    injector: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
                        providers: [{ provide: _tippy_types__WEBPACK_IMPORTED_MODULE_1__.TIPPY_REF, useValue: this.instance }],
                        parent: this.injector
                    })
                };
            }
            else if ((0,_ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isTemplateRef)(this.content)) {
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
        if ((0,_ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isString)(content) && this.globalConfig.beforeRender) {
            content = this.globalConfig.beforeRender(content);
        }
        return content;
    }
    handleContextMenu() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this.host, 'contextmenu')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed))
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.destroyed, this.visible.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(v => !v)))))
            .subscribe(() => this.hide());
    }
    pressButton$(element, codeButton) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(element, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(({ code }) => codeButton === code));
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
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.dimensionsChanges)(this.host)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.destroyed, this.visible)))
            .subscribe(() => {
            this.instance.popper.style.width = this.hostWidth;
        });
    }
}
TippyDirective.ɵfac = function TippyDirective_Factory(t) { return new (t || TippyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_tippy_types__WEBPACK_IMPORTED_MODULE_1__.TIPPY_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.ViewService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
TippyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: TippyDirective, selectors: [["", "tippy", ""]], inputs: { appendTo: "appendTo", delay: "delay", duration: "duration", hideOnClick: "hideOnClick", interactive: "interactive", interactiveBorder: "interactiveBorder", maxWidth: "maxWidth", offset: "offset", placement: "placement", popperOptions: "popperOptions", showOnCreate: "showOnCreate", trigger: "trigger", triggerTarget: "triggerTarget", zIndex: "zIndex", lazy: "lazy", variation: "variation", isEnabled: "isEnabled", className: "className", onlyTextOverflow: "onlyTextOverflow", data: "data", useHostWidth: "useHostWidth", hideOnEscape: "hideOnEscape", content: ["tippy", "content"], customHost: ["tippyHost", "customHost"], isVisible: "isVisible" }, outputs: { visible: "visible", changed: "changed" }, exportAs: ["tippy"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
function isChanged(key, changes) {
    return key in changes;
}


/***/ }),

/***/ 437:
/*!************************************************************!*\
  !*** ./projects/ngneat/helipopper/src/lib/tippy.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippyModule": function() { return /* binding */ TippyModule; }
/* harmony export */ });
/* harmony import */ var _tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippy.directive */ 6544);
/* harmony import */ var _tippy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tippy.types */ 9781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



class TippyModule {
    static forRoot(config = {}) {
        return {
            ngModule: TippyModule,
            providers: [
                {
                    provide: _tippy_types__WEBPACK_IMPORTED_MODULE_1__.TIPPY_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
TippyModule.ɵfac = function TippyModule_Factory(t) { return new (t || TippyModule)(); };
TippyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TippyModule });
TippyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TippyModule, { declarations: [_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective], exports: [_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective] }); })();


/***/ }),

/***/ 586:
/*!*************************************************************!*\
  !*** ./projects/ngneat/helipopper/src/lib/tippy.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippyService": function() { return /* binding */ TippyService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js */ 253);
/* harmony import */ var _ngneat_overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/overview */ 3633);
/* harmony import */ var _tippy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippy.types */ 9781);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ 153);







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
                    if ((0,_ngneat_overview__WEBPACK_IMPORTED_MODULE_2__.isTemplateRef)(content)) {
                        instance.$viewOptions.context = Object.assign({ $implicit: instance.hide.bind(instance) }, options.context);
                    }
                    else if ((0,_ngneat_overview__WEBPACK_IMPORTED_MODULE_2__.isComponent)(content)) {
                        instance.$viewOptions.injector = _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector.create({
                            providers: [{ provide: _tippy_types__WEBPACK_IMPORTED_MODULE_0__.TIPPY_REF, useValue: instance }],
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
            } }, (0,_utils__WEBPACK_IMPORTED_MODULE_1__.onlyTippyProps)(this.globalConfig)), this.globalConfig.variations[options.variation || this.globalConfig.defaultVariation]), (0,_utils__WEBPACK_IMPORTED_MODULE_1__.onlyTippyProps)(options)), { onCreate: instance => {
                var _a, _b, _c;
                if (options.className) {
                    for (const klass of (0,_utils__WEBPACK_IMPORTED_MODULE_1__.normalizeClassName)(options.className)) {
                        instance.popper.classList.add(klass);
                    }
                }
                (_b = (_a = this.globalConfig).onCreate) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                (_c = options.onCreate) === null || _c === void 0 ? void 0 : _c.call(options, instance);
            } });
        return (0,tippy_js__WEBPACK_IMPORTED_MODULE_4__.default)(host, config);
    }
}
TippyService.ɵfac = function TippyService_Factory(t) { return new (t || TippyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_tippy_types__WEBPACK_IMPORTED_MODULE_0__.TIPPY_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngneat_overview__WEBPACK_IMPORTED_MODULE_2__.ViewService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
TippyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TippyService, factory: TippyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9781:
/*!***********************************************************!*\
  !*** ./projects/ngneat/helipopper/src/lib/tippy.types.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TIPPY_CONFIG": function() { return /* binding */ TIPPY_CONFIG; },
/* harmony export */   "TIPPY_REF": function() { return /* binding */ TIPPY_REF; },
/* harmony export */   "coerceElement": function() { return /* binding */ coerceElement; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

const TIPPY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Tippy config', {
    providedIn: 'root',
    factory() {
        return {};
    }
});
const TIPPY_REF = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('TIPPY_REF');
function coerceElement(element) {
    return element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? element.nativeElement : element;
}


/***/ }),

/***/ 153:
/*!*****************************************************!*\
  !*** ./projects/ngneat/helipopper/src/lib/utils.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inView": function() { return /* binding */ inView; },
/* harmony export */   "overflowChanges": function() { return /* binding */ overflowChanges; },
/* harmony export */   "dimensionsChanges": function() { return /* binding */ dimensionsChanges; },
/* harmony export */   "onlyTippyProps": function() { return /* binding */ onlyTippyProps; },
/* harmony export */   "normalizeClassName": function() { return /* binding */ normalizeClassName; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 872);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _tippy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippy.types */ 9781);



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
    const element = (0,_tippy_types__WEBPACK_IMPORTED_MODULE_0__.coerceElement)(host);
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
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
    const element = (0,_tippy_types__WEBPACK_IMPORTED_MODULE_0__.coerceElement)(host);
    return dimensionsChanges(element).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => isElementOverflow(element)));
}
function dimensionsChanges(target) {
    return resizeObserverStrategy(target);
}
function resizeObserverStrategy(target) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
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


/***/ }),

/***/ 5445:
/*!******************************************************!*\
  !*** ./projects/ngneat/helipopper/src/public-api.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippyModule": function() { return /* reexport safe */ _lib_tippy_module__WEBPACK_IMPORTED_MODULE_0__.TippyModule; },
/* harmony export */   "TippyDirective": function() { return /* reexport safe */ _lib_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective; },
/* harmony export */   "tooltipVariation": function() { return /* reexport safe */ _lib_defaults__WEBPACK_IMPORTED_MODULE_2__.tooltipVariation; },
/* harmony export */   "popperVariation": function() { return /* reexport safe */ _lib_defaults__WEBPACK_IMPORTED_MODULE_2__.popperVariation; },
/* harmony export */   "withContextMenuVariation": function() { return /* reexport safe */ _lib_defaults__WEBPACK_IMPORTED_MODULE_2__.withContextMenuVariation; },
/* harmony export */   "TippyService": function() { return /* reexport safe */ _lib_tippy_service__WEBPACK_IMPORTED_MODULE_3__.TippyService; },
/* harmony export */   "inView": function() { return /* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.inView; },
/* harmony export */   "overflowChanges": function() { return /* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.overflowChanges; },
/* harmony export */   "TIPPY_REF": function() { return /* reexport safe */ _lib_tippy_types__WEBPACK_IMPORTED_MODULE_5__.TIPPY_REF; },
/* harmony export */   "TIPPY_CONFIG": function() { return /* reexport safe */ _lib_tippy_types__WEBPACK_IMPORTED_MODULE_5__.TIPPY_CONFIG; }
/* harmony export */ });
/* harmony import */ var _lib_tippy_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tippy.module */ 437);
/* harmony import */ var _lib_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/tippy.directive */ 6544);
/* harmony import */ var _lib_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/defaults */ 4121);
/* harmony import */ var _lib_tippy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/tippy.service */ 586);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ 153);
/* harmony import */ var _lib_tippy_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/tippy.types */ 9781);








/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _is_visible_isVisible_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-visible/isVisible.component */ 164);
/* harmony import */ var _playground_playground_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground/playground.component */ 6898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    { path: 'is-visible', component: _is_visible_isVisible_component__WEBPACK_IMPORTED_MODULE_0__.IsVisibleComponent },
    { path: '**', component: _playground_playground_component__WEBPACK_IMPORTED_MODULE_1__.PlaygroundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example/example.component */ 6172);
/* harmony import */ var _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/helipopper */ 5445);
/* harmony import */ var _playground_playground_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playground/playground.component */ 6898);
/* harmony import */ var _is_visible_isVisible_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-visible/isVisible.component */ 164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _projects_ngneat_helipopper_src_lib_tippy_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/ngneat/helipopper/src/lib/tippy.module */ 437);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.TippyModule.forRoot({
                defaultVariation: "tooltip",
                variations: {
                    tooltip: _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.tooltipVariation,
                    popper: _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.popperVariation,
                    menu: Object.assign(Object.assign({}, _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.popperVariation), { appendTo: "parent", arrow: false, offset: [0, 0] }),
                    contextMenu: (0,_ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.withContextMenuVariation)(_ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.popperVariation),
                    popperBorder: Object.assign(Object.assign({}, _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.popperVariation), { theme: "light-border" })
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _example_example_component__WEBPACK_IMPORTED_MODULE_2__.ExampleComponent, _playground_playground_component__WEBPACK_IMPORTED_MODULE_4__.PlaygroundComponent, _example_example_component__WEBPACK_IMPORTED_MODULE_2__.ExampleComponent, _is_visible_isVisible_component__WEBPACK_IMPORTED_MODULE_5__.IsVisibleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _projects_ngneat_helipopper_src_lib_tippy_module__WEBPACK_IMPORTED_MODULE_6__.TippyModule] }); })();


/***/ }),

/***/ 6172:
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleComponent": function() { return /* binding */ ExampleComponent; }
/* harmony export */ });
/* harmony import */ var _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/helipopper */ 5445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class ExampleComponent {
    constructor(tippy) {
        console.log(tippy);
    }
    ngOnInit() {
        console.log("ngOnInit");
    }
    ngOnDestroy() {
        console.log("ngOnDestroy");
    }
}
ExampleComponent.ɵfac = function ExampleComponent_Factory(t) { return new (t || ExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngneat_helipopper__WEBPACK_IMPORTED_MODULE_0__.TIPPY_REF)); };
ExampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleComponent, selectors: [["app-example"]], decls: 2, vars: 0, template: function ExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "example works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 164:
/*!***************************************************!*\
  !*** ./src/app/is-visible/isVisible.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsVisibleComponent": function() { return /* binding */ IsVisibleComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _projects_ngneat_helipopper_src_lib_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../projects/ngneat/helipopper/src/lib/tippy.directive */ 6544);


class IsVisibleComponent {
    constructor() {
        this.visibility = true;
    }
}
IsVisibleComponent.ɵfac = function IsVisibleComponent_Factory(t) { return new (t || IsVisibleComponent)(); };
IsVisibleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IsVisibleComponent, selectors: [["app-is-visible"]], decls: 8, vars: 1, consts: [[1, "btn-container"], ["tippy", "I'm a declarative tooltip", "variation", "tooltip", "trigger", "click", "className", "declarativeTooltip", "data-cy", "tippy-reference-declarative", 1, "btn", "btn-outline-secondary", 3, "isVisible"], ["data-cy", "trigger-declarative", 1, "btn", "btn-outline-info", "btn-sm", "mt-2", 3, "click"]], template: function IsVisibleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Declaritive visibility (already set true before render in the component)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Declaritive Tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IsVisibleComponent_Template_button_click_5_listener() { return ctx.visibility = !ctx.visibility; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Toggle tooltip\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isVisible", ctx.visibility);
    } }, directives: [_projects_ngneat_helipopper_src_lib_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc1Zpc2libGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6898:
/*!****************************************************!*\
  !*** ./src/app/playground/playground.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundComponent": function() { return /* binding */ PlaygroundComponent; }
/* harmony export */ });
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../example/example.component */ 6172);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1565);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/helipopper */ 5445);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _projects_ngneat_helipopper_src_lib_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/ngneat/helipopper/src/lib/tippy.directive */ 6544);








const _c0 = ["inputName"];
const _c1 = ["inputNameComp"];
function PlaygroundComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r22, " ");
} }
function PlaygroundComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r23, " ");
} }
function PlaygroundComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r24.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r24.label, " ");
} }
function PlaygroundComponent_ng_container_0_ng_template_42_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r27, " ");
} }
function PlaygroundComponent_ng_container_0_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlaygroundComponent_ng_container_0_ng_template_42_div_0_Template, 2, 1, "div", 55);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.tooltipPositions);
} }
function PlaygroundComponent_ng_container_0_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Hello");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function PlaygroundComponent_ng_container_0_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", item_r28.label)("lazy", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r28.label);
} }
function PlaygroundComponent_ng_container_0_ng_template_130_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_ng_template_130_Template_li_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const item_r30 = restoredCtx.data; const hide_r29 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r31.copy(item_r30); return hide_r29(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_ng_template_130_Template_li_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const item_r30 = restoredCtx.data; const hide_r29 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r33.duplicate(item_r30); return hide_r29(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Duplicate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PlaygroundComponent_ng_container_0_li_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r13)("data", item_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r34.label, " ");
} }
function PlaygroundComponent_ng_container_0_ng_template_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r18);
} }
function PlaygroundComponent_ng_container_0_ng_template_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Action 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Another action 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Something else here 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r20);
} }
function PlaygroundComponent_ng_container_0_ng_template_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Action 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Another action 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Something else here 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PlaygroundComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PlaygroundComponent_ng_container_0_div_2_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PlaygroundComponent_ng_container_0_div_4_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PlaygroundComponent_ng_container_0_div_6_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Hide on press escape button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " I have a tooltip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Default variation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Click Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "NIL values");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Click me to see my tooltip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Click me but I won't show a tooltip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Click me but I won't show a tooltip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Custom Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 9, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Click Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, PlaygroundComponent_ng_container_0_ng_template_42_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "ng-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Click Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, PlaygroundComponent_ng_container_0_ng_template_50_Template, 3, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Custom Component");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visible", function PlaygroundComponent_ng_container_0_Template_button_visible_57_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.handleStatus($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " Open component ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Manual Trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "p", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Click open to see me");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](65); return _r9.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](65); return _r9.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Lazy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, PlaygroundComponent_ng_container_0_div_76_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Element");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r39.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Text Overflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Start with overflow and change to not overflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r40.changeContent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Change content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Start with not overflow and change to overflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_103_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r41.maxWidth = 100; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Change width");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Show on Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " Show on Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Declaritive visibility (already set true before render in the component)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, " Declaritive Tooltip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_117_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.visibility = !ctx_r42.visibility; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " Toggle tooltip ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Using the Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "button", 22, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_124_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](125); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r43.useService(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "button", 22, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_127_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](128); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r44.useServiceComponent(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Component");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](130, PlaygroundComponent_ng_container_0_ng_template_130_Template, 5, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Context menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](136, PlaygroundComponent_ng_container_0_li_136_Template, 2, 3, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Use host width");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, " Dropdown button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](150, PlaygroundComponent_ng_container_0_ng_template_150_Template, 7, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](152, PlaygroundComponent_ng_container_0_ng_template_152_Template, 7, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](154, PlaygroundComponent_ng_container_0_ng_template_154_Template, 7, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](43);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](151);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.tooltipSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.tooltipTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.tooltipPositions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.tooltipAlignments);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placement", ctx_r0.tooltipPosition)("variation", ctx_r0.tooltipType)("hideOnEscape", ctx_r0.hideOnEsc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", "I have a tooltip value different from nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Visible: ", _r4.isVisible, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", ctx_r0.comp);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isEnabled", !ctx_r0.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.isDisabled ? "Enable" : "Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", ctx_r0.text)("onlyTextOverflow", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("max-width", ctx_r0.maxWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", ctx_r0.text)("onlyTextOverflow", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showOnCreate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isVisible", ctx_r0.visibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r16);
} }
class PlaygroundComponent {
    constructor(fb, service) {
        this.fb = fb;
        this.service = service;
        this.tooltipPositions = ['auto', 'top', 'right', 'bottom', 'left'];
        this.tooltipAlignments = [
            { label: 'start', value: '-start' },
            { label: 'center', value: '' },
            { label: 'end', value: '-end' }
        ];
        this.tooltipTypes = ['popper', 'tooltip', 'popperBorder'];
        this.tooltipSettings = this.fb.group({
            type: this.fb.control('tooltip'),
            alignment: this.fb.control(''),
            position: this.fb.control('top'),
            hideOnEsc: this.fb.control(false)
        });
        this.interval$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => console.log('interval completed')));
        this.items = Array.from({ length: 500 }, (_, i) => ({
            id: i,
            label: `Value ${i + 1}`
        }));
        this.list = Array.from({ length: 5 }, (_, i) => ({
            id: i,
            label: `Value ${i + 1}`
        }));
        this.thoughts = 'We just need someone to talk to 🥺';
        this.isDisabled = false;
        this.text = `Long Long All Text`;
        this.comp = _example_example_component__WEBPACK_IMPORTED_MODULE_0__.ExampleComponent;
        this.maxWidth = 300;
        this.show = true;
        this.visibility = false;
    }
    get tooltipPosition() {
        const { position, alignment } = this.tooltipSettings.value;
        return `${position}${alignment}`;
    }
    get tooltipType() {
        return this.tooltipSettings.value.type;
    }
    get hideOnEsc() {
        return this.tooltipSettings.value.hideOnEsc;
    }
    changeContent() {
        this.text = this.text === `Long Long All Text` ? `Short` : `Long Long All Text`;
    }
    toggle() {
        this.isDisabled = !this.isDisabled;
    }
    handleStatus($event) {
        console.log('show tooltip', $event);
    }
    useService(host) {
        if (!this.instance2) {
            this.instance2 = this.service.create(host, 'Created');
        }
    }
    useServiceComponent(host2) {
        if (!this.instance) {
            this.instance = this.service.create(host2, _example_example_component__WEBPACK_IMPORTED_MODULE_0__.ExampleComponent, {
                variation: 'popper'
            });
        }
    }
    duplicate(item) {
        console.log('duplicate', item);
    }
    copy(item) {
        console.log('copy', item);
    }
}
PlaygroundComponent.ɵfac = function PlaygroundComponent_Factory(t) { return new (t || PlaygroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_helipopper__WEBPACK_IMPORTED_MODULE_1__.TippyService)); };
PlaygroundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlaygroundComponent, selectors: [["app-is-visible"]], viewQuery: function PlaygroundComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputName = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputNameComp = _t.first);
    } }, decls: 6, vars: 1, consts: [[4, "ngIf"], ["type", "text", "placeholder", "Sanitize", "tippy", "<img src='empty.gif' onerror='alert(1);' />", 2, "max-width", "600px"], ["id", "tippy-playground", 2, "text-transform", "capitalize", 3, "formGroup"], ["class", "flex items-center", 4, "ngFor", "ngForOf"], ["type", "checkbox", "formControlName", "hideOnEsc", "id", "hideOnEsc-toggle", 1, "mr-4"], [1, "btn-container"], ["tippy", "Helpful Message", 1, "btn", "btn-outline-primary", 3, "placement", "variation", "hideOnEscape"], ["tippy", "Default tooltip", 1, "btn", "btn-outline-secondary"], ["id", "tippy-value-non-nil", 1, "btn-container"], ["variation", "popper", 1, "btn", "btn-outline-secondary", 3, "tippy"], ["id", "tippy-value-null", 1, "btn-container"], ["id", "tippy-value-undefined", 1, "btn-container"], ["id", "custom-template", 1, "btn-container"], ["tippy2", "tippy"], ["tpl", ""], ["tpl2", ""], ["id", "custom-component"], ["variation", "popper", 1, "btn", "btn-outline-danger", 3, "tippy", "visible"], ["id", "manual-trigger", 1, "block"], [1, "btn-container", "items-center"], ["tippy", "Helpful Message", "trigger", "manual", 1, "mr-4"], ["tippy", "tippy"], [1, "btn", "btn-outline-dark", 3, "click"], ["id", "lazy"], [2, "height", "300px", "overflow-y", "auto"], [3, "tippy", "lazy", 4, "ngFor", "ngForOf"], ["id", "disabled"], ["tippy", "Tooltip", 1, "btn", "btn-outline-dark", 3, "isEnabled"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["id", "text-overflow"], [1, "overflow-hidden", "flex", 2, "max-width", "100px"], ["placement", "right", 1, "ellipsis", 3, "tippy", "onlyTextOverflow"], [1, "btn", "btn-outline-info", "btn-sm", "mt-2", 3, "click"], [1, "overflow-hidden", "flex"], ["tippy", "Shown immediately when created", 1, "btn", "btn-outline-secondary", 3, "showOnCreate"], ["tippy", "I'm a declarative tooltip", "variation", "tooltip", "trigger", "click", "className", "declarativeTooltip", "data-cy", "tippy-reference-declarative", 1, "btn", "btn-outline-secondary", 3, "isVisible"], ["data-cy", "trigger-declarative", 1, "btn", "btn-outline-info", "btn-sm", "mt-2", 3, "click"], ["id", "service"], ["host", ""], ["host2", ""], ["contextMenu", ""], ["id", "context-menu"], [1, "list-group"], ["class", "list-group-item", "variation", "contextMenu", 3, "tippy", "data", 4, "ngFor", "ngForOf"], [1, "flex"], ["type", "text", "placeholder", "host width", "tippy", "hello world", "variation", "menu", "useHostWidth", "true", 2, "flex", "1", "max-width", "600px"], [1, "dropdown"], ["type", "button", "variation", "menu", 1, "btn", "btn-secondary", "dropdown-toggle", 3, "tippy"], ["one", ""], ["two", ""], ["three", ""], [1, "flex", "items-center"], ["type", "radio", "formControlName", "type", "name", "type", 1, "mr-4", 3, "value"], ["type", "radio", "formControlName", "position", "name", "position", 1, "mr-4", 3, "value"], ["type", "radio", "formControlName", "alignment", "name", "alignment", 1, "mr-4", 3, "value"], ["class", "positions", 4, "ngFor", "ngForOf"], [1, "positions"], [3, "tippy", "lazy"], [1, "list-group", "list-group-flush"], [1, "list-group-item", 3, "click"], ["variation", "contextMenu", 1, "list-group-item", 3, "tippy", "data"], ["href", "#", 1, "dropdown-item"], ["href", "#", "placement", "right", "variation", "menu", "trigger", "mouseenter", 1, "dropdown-item", 3, "tippy"]], template: function PlaygroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlaygroundComponent_ng_container_0_Template, 156, 29, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sanitize");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _projects_ngneat_helipopper_src_lib_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map