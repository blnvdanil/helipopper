(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('tippy.js'), require('rxjs'), require('rxjs/operators'), require('@ngneat/overview')) :
    typeof define === 'function' && define.amd ? define('@ngneat/helipopper', ['exports', '@angular/core', '@angular/common', 'tippy.js', 'rxjs', 'rxjs/operators', '@ngneat/overview'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ngneat = global.ngneat || {}, global.ngneat.helipopper = {}), global.ng.core, global.ng.common, global.tippy, global.rxjs, global.rxjs.operators, global.ngneatOverview));
}(this, (function (exports, i0, common, tippy, rxjs, operators, i1) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var tippy__default = /*#__PURE__*/_interopDefaultLegacy(tippy);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var TIPPY_CONFIG = new i0.InjectionToken('Tippy config', {
        providedIn: 'root',
        factory: function () {
            return {};
        }
    });
    var TIPPY_REF = new i0.InjectionToken('TIPPY_REF');
    function coerceElement(element) {
        return element instanceof i0.ElementRef ? element.nativeElement : element;
    }

    var supportsIntersectionObserver = false;
    var supportsResizeObserver = false;
    if (typeof window !== 'undefined') {
        supportsIntersectionObserver = 'IntersectionObserver' in window;
        supportsResizeObserver = 'ResizeObserver' in window;
    }
    function inView(host, options) {
        if (options === void 0) { options = {
            root: null,
            threshold: 0.3
        }; }
        var element = coerceElement(host);
        return new rxjs.Observable(function (subscriber) {
            if (!supportsIntersectionObserver) {
                subscriber.next();
                subscriber.complete();
                return;
            }
            var observer = new IntersectionObserver(function (entries) {
                // Several changes may occur in the same tick, we want to check the latest entry state.
                var entry = entries[entries.length - 1];
                if (entry.isIntersecting) {
                    subscriber.next();
                    subscriber.complete();
                }
            }, options);
            observer.observe(element);
            return function () { return observer.disconnect(); };
        });
    }
    function isElementOverflow(host) {
        // Don't access the `offsetWidth` multipe times since it triggers layout updates.
        var hostOffsetWidth = host.offsetWidth;
        return hostOffsetWidth > host.parentElement.offsetWidth || hostOffsetWidth < host.scrollWidth;
    }
    function overflowChanges(host) {
        var element = coerceElement(host);
        return dimensionsChanges(element).pipe(operators.auditTime(150), operators.map(function () { return isElementOverflow(element); }));
    }
    function dimensionsChanges(target) {
        return resizeObserverStrategy(target);
    }
    function resizeObserverStrategy(target) {
        return new rxjs.Observable(function (subscriber) {
            if (!supportsResizeObserver) {
                subscriber.next();
                subscriber.complete();
                return;
            }
            var observer = new ResizeObserver(function () { return subscriber.next(true); });
            observer.observe(target);
            return function () { return observer.disconnect(); };
        });
    }
    function onlyTippyProps(allProps) {
        var tippyProps = {};
        var ownProps = [
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
        Object.keys(allProps).forEach(function (prop) {
            if (!ownProps.includes(prop)) {
                tippyProps[prop] = allProps[prop];
            }
        });
        return tippyProps;
    }
    function normalizeClassName(className) {
        var classes = isString(className) ? className.split(' ') : className;
        return classes.map(function (klass) { return klass === null || klass === void 0 ? void 0 : klass.trim(); }).filter(Boolean);
    }
    function isString(value) {
        return typeof value === 'string';
    }

    var TippyDirective = /** @class */ (function () {
        function TippyDirective(platformId, globalConfig, injector, viewService, vcr, zone, hostRef) {
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
            this.visible = new i0.EventEmitter();
            this.isVisible = false;
            this.changed = new i0.EventEmitter();
            this.destroyed = new rxjs.Subject();
            this.enabled = true;
            this.variationDefined = false;
        }
        TippyDirective.prototype.ngOnChanges = function (changes) {
            if (common.isPlatformServer(this.platformId))
                return;
            var props = Object.keys(changes).reduce(function (acc, change) {
                if (change === 'isVisible')
                    return acc;
                acc[change] = changes[change].currentValue;
                return acc;
            }, {});
            var variation;
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
        };
        TippyDirective.prototype.ngOnInit = function () {
            if (this.useHostWidth) {
                this.props.maxWidth = this.hostWidth;
            }
        };
        TippyDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.zone.runOutsideAngular(function () {
                if (_this.lazy) {
                    if (_this.onlyTextOverflow) {
                        inView(_this.host)
                            .pipe(operators.switchMap(function () { return overflowChanges(_this.host); }), operators.takeUntil(_this.destroyed))
                            .subscribe(function (isElementOverflow) {
                            _this.checkOverflow(isElementOverflow);
                        });
                    }
                    else {
                        inView(_this.host)
                            .pipe(operators.takeUntil(_this.destroyed))
                            .subscribe(function () {
                            _this.createInstance();
                        });
                    }
                }
                else if (_this.onlyTextOverflow) {
                    overflowChanges(_this.host)
                        .pipe(operators.takeUntil(_this.destroyed))
                        .subscribe(function (isElementOverflow) {
                        _this.checkOverflow(isElementOverflow);
                    });
                }
                else {
                    _this.createInstance();
                }
            });
        };
        TippyDirective.prototype.ngOnDestroy = function () {
            var _a;
            this.destroyed.next();
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.destroy();
            this.destroyView();
        };
        TippyDirective.prototype.destroyView = function () {
            var _a;
            (_a = this.viewRef) === null || _a === void 0 ? void 0 : _a.destroy();
            this.viewRef = null;
        };
        TippyDirective.prototype.show = function () {
            var _a;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.show();
        };
        TippyDirective.prototype.hide = function () {
            var _a;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.hide();
        };
        TippyDirective.prototype.enable = function () {
            var _a;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.enable();
        };
        TippyDirective.prototype.disable = function () {
            var _a;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.disable();
        };
        TippyDirective.prototype.setProps = function (props) {
            var _a;
            this.props = props;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.setProps(onlyTippyProps(props));
        };
        TippyDirective.prototype.setStatus = function () {
            var _a, _b;
            this.enabled ? (_a = this.instance) === null || _a === void 0 ? void 0 : _a.enable() : (_b = this.instance) === null || _b === void 0 ? void 0 : _b.disable();
        };
        Object.defineProperty(TippyDirective.prototype, "host", {
            get: function () {
                return this.customHost || this.hostRef.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TippyDirective.prototype, "hostWidth", {
            get: function () {
                return this.host.getBoundingClientRect().width + "px";
            },
            enumerable: false,
            configurable: true
        });
        TippyDirective.prototype.createInstance = function () {
            var _this = this;
            if (this.content == null) {
                return;
            }
            this.zone.runOutsideAngular(function () {
                _this.instance = tippy__default['default'](_this.host, Object.assign(Object.assign(Object.assign({ allowHTML: true, appendTo: document.body }, onlyTippyProps(_this.globalConfig)), onlyTippyProps(_this.props)), { onMount: function (instance) {
                        var _a, _b;
                        _this.isVisible = true;
                        _this.visible.next(true);
                        _this.useHostWidth && _this.listenToHostResize();
                        (_b = (_a = _this.globalConfig).onMount) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                    }, onCreate: function (instance) {
                        var e_1, _c;
                        var _a, _b;
                        if (_this.className) {
                            try {
                                for (var _d = __values(normalizeClassName(_this.className)), _e = _d.next(); !_e.done; _e = _d.next()) {
                                    var klass = _e.value;
                                    instance.popper.classList.add(klass);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        (_b = (_a = _this.globalConfig).onCreate) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                        if (_this.isVisible === true) {
                            instance.show();
                        }
                    }, onShow: function (instance) {
                        var _a, _b;
                        _this.zone.run(function () {
                            var content = _this.resolveContent();
                            if (i1.isString(content)) {
                                instance.setProps({ allowHTML: false });
                            }
                            instance.setContent(content);
                            _this.hideOnEscape && _this.handleEscapeButton();
                        });
                        if (_this.useHostWidth) {
                            // Don't access `hostWidth` multiple times since it's a getter that calls `getBoundingClientRect()`,
                            // which triggers the whole layout update.
                            var hostWidth = _this.hostWidth;
                            instance.popper.style.width = hostWidth;
                            instance.popper.style.maxWidth = hostWidth;
                            instance.popper.firstElementChild.style.maxWidth = hostWidth;
                        }
                        (_b = (_a = _this.globalConfig).onShow) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                    }, onHidden: function (instance) {
                        var _a, _b;
                        _this.destroyView();
                        _this.isVisible = false;
                        _this.visible.next(false);
                        (_b = (_a = _this.globalConfig).onHidden) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                    } }));
                _this.setStatus();
                _this.setProps(_this.props);
                _this.variation === 'contextMenu' && _this.handleContextMenu();
            });
        };
        TippyDirective.prototype.resolveContent = function () {
            if (!this.viewOptions$ && !i1.isString(this.content)) {
                if (i1.isComponent(this.content)) {
                    this.viewOptions$ = {
                        injector: i0.Injector.create({
                            providers: [{ provide: TIPPY_REF, useValue: this.instance }],
                            parent: this.injector
                        })
                    };
                }
                else if (i1.isTemplateRef(this.content)) {
                    this.viewOptions$ = {
                        context: {
                            $implicit: this.hide.bind(this),
                            data: this.data
                        }
                    };
                }
            }
            this.viewRef = this.viewService.createView(this.content, Object.assign({ vcr: this.vcr }, this.viewOptions$));
            var content = this.viewRef.getElement();
            if (i1.isString(content) && this.globalConfig.beforeRender) {
                content = this.globalConfig.beforeRender(content);
            }
            return content;
        };
        TippyDirective.prototype.handleContextMenu = function () {
            var _this = this;
            rxjs.fromEvent(this.host, 'contextmenu')
                .pipe(operators.takeUntil(this.destroyed))
                .subscribe(function (event) {
                event.preventDefault();
                _this.instance.setProps({
                    getReferenceClientRect: function () { return ({
                        width: 0,
                        height: 0,
                        top: event.clientY,
                        bottom: event.clientY,
                        left: event.clientX,
                        right: event.clientX
                    }); }
                });
                _this.instance.show();
            });
        };
        TippyDirective.prototype.handleEscapeButton = function () {
            var _this = this;
            this.pressButton$(document.body, 'Escape')
                .pipe(operators.takeUntil(rxjs.merge(this.destroyed, this.visible.pipe(operators.filter(function (v) { return !v; })))))
                .subscribe(function () { return _this.hide(); });
        };
        TippyDirective.prototype.pressButton$ = function (element, codeButton) {
            return rxjs.fromEvent(element, 'keydown').pipe(operators.filter(function (_c) {
                var code = _c.code;
                return codeButton === code;
            }));
        };
        TippyDirective.prototype.checkOverflow = function (isElementOverflow) {
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
        };
        TippyDirective.prototype.listenToHostResize = function () {
            var _this = this;
            dimensionsChanges(this.host)
                .pipe(operators.takeUntil(rxjs.merge(this.destroyed, this.visible)))
                .subscribe(function () {
                _this.instance.popper.style.width = _this.hostWidth;
            });
        };
        return TippyDirective;
    }());
    TippyDirective.ɵfac = function TippyDirective_Factory(t) { return new (t || TippyDirective)(i0__namespace.ɵɵdirectiveInject(i0.PLATFORM_ID), i0__namespace.ɵɵdirectiveInject(TIPPY_CONFIG), i0__namespace.ɵɵdirectiveInject(i0__namespace.Injector), i0__namespace.ɵɵdirectiveInject(i1__namespace.ViewService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ViewContainerRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    TippyDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: TippyDirective, selectors: [["", "tippy", ""]], inputs: { appendTo: "appendTo", delay: "delay", duration: "duration", hideOnClick: "hideOnClick", interactive: "interactive", interactiveBorder: "interactiveBorder", maxWidth: "maxWidth", offset: "offset", placement: "placement", popperOptions: "popperOptions", showOnCreate: "showOnCreate", trigger: "trigger", triggerTarget: "triggerTarget", zIndex: "zIndex", lazy: "lazy", variation: "variation", isEnabled: "isEnabled", className: "className", onlyTextOverflow: "onlyTextOverflow", data: "data", useHostWidth: "useHostWidth", hideOnEscape: "hideOnEscape", content: ["tippy", "content"], customHost: ["tippyHost", "customHost"], isVisible: "isVisible" }, outputs: { visible: "visible", changed: "changed" }, exportAs: ["tippy"], features: [i0__namespace.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TippyDirective, [{
                type: i0.Directive,
                args: [{
                        // eslint-disable-next-line @angular-eslint/directive-selector
                        selector: '[tippy]',
                        exportAs: 'tippy'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [TIPPY_CONFIG]
                        }] }, { type: i0__namespace.Injector }, { type: i1__namespace.ViewService }, { type: i0__namespace.ViewContainerRef }, { type: i0__namespace.NgZone }, { type: i0__namespace.ElementRef }];
        }, { appendTo: [{
                    type: i0.Input
                }], delay: [{
                    type: i0.Input
                }], duration: [{
                    type: i0.Input
                }], hideOnClick: [{
                    type: i0.Input
                }], interactive: [{
                    type: i0.Input
                }], interactiveBorder: [{
                    type: i0.Input
                }], maxWidth: [{
                    type: i0.Input
                }], offset: [{
                    type: i0.Input
                }], placement: [{
                    type: i0.Input
                }], popperOptions: [{
                    type: i0.Input
                }], showOnCreate: [{
                    type: i0.Input
                }], trigger: [{
                    type: i0.Input
                }], triggerTarget: [{
                    type: i0.Input
                }], zIndex: [{
                    type: i0.Input
                }], lazy: [{
                    type: i0.Input
                }], variation: [{
                    type: i0.Input
                }], isEnabled: [{
                    type: i0.Input
                }], className: [{
                    type: i0.Input
                }], onlyTextOverflow: [{
                    type: i0.Input
                }], data: [{
                    type: i0.Input
                }], useHostWidth: [{
                    type: i0.Input
                }], hideOnEscape: [{
                    type: i0.Input
                }], content: [{
                    type: i0.Input,
                    args: ['tippy']
                }], customHost: [{
                    type: i0.Input,
                    args: ['tippyHost']
                }], visible: [{
                    type: i0.Output
                }], isVisible: [{
                    type: i0.Input
                }], changed: [{
                    type: i0.Output
                }] });
    })();
    function isChanged(key, changes) {
        return key in changes;
    }

    var TippyModule = /** @class */ (function () {
        function TippyModule() {
        }
        TippyModule.forRoot = function (config) {
            if (config === void 0) { config = {}; }
            return {
                ngModule: TippyModule,
                providers: [
                    {
                        provide: TIPPY_CONFIG,
                        useValue: config
                    }
                ]
            };
        };
        return TippyModule;
    }());
    TippyModule.ɵfac = function TippyModule_Factory(t) { return new (t || TippyModule)(); };
    TippyModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: TippyModule });
    TippyModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({});
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TippyModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TippyDirective],
                        exports: [TippyDirective]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(TippyModule, { declarations: [TippyDirective], exports: [TippyDirective] }); })();

    var tooltipVariation = {
        theme: null,
        arrow: false,
        animation: 'scale',
        trigger: 'mouseenter',
        offset: [0, 5]
    };
    var popperVariation = {
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

    var TippyService = /** @class */ (function () {
        function TippyService(globalConfig, view, injector) {
            this.globalConfig = globalConfig;
            this.view = view;
            this.injector = injector;
        }
        TippyService.prototype.create = function (host, content, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            var config = Object.assign(Object.assign(Object.assign(Object.assign({ onShow: function (instance) {
                    var _a;
                    if (!instance.$viewOptions) {
                        instance.$viewOptions = {};
                        if (i1.isTemplateRef(content)) {
                            instance.$viewOptions.context = Object.assign({ $implicit: instance.hide.bind(instance) }, options.context);
                        }
                        else if (i1.isComponent(content)) {
                            instance.context = options.context;
                            instance.$viewOptions.injector = i0.Injector.create({
                                providers: [{ provide: TIPPY_REF, useValue: instance }],
                                parent: options.injector || _this.injector
                            });
                        }
                    }
                    instance.view = _this.view.createView(content, Object.assign(Object.assign({}, options), instance.$viewOptions));
                    instance.setContent(instance.view.getElement());
                    (_a = options === null || options === void 0 ? void 0 : options.onShow) === null || _a === void 0 ? void 0 : _a.call(options, instance);
                }, onHidden: function (instance) {
                    var _a;
                    instance.view.destroy();
                    (_a = options === null || options === void 0 ? void 0 : options.onHidden) === null || _a === void 0 ? void 0 : _a.call(options, instance);
                    instance.view = null;
                } }, onlyTippyProps(this.globalConfig)), this.globalConfig.variations[options.variation || this.globalConfig.defaultVariation]), onlyTippyProps(options)), { onCreate: function (instance) {
                    var e_1, _d;
                    var _a, _b, _c;
                    if (options.className) {
                        try {
                            for (var _e = __values(normalizeClassName(options.className)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var klass = _f.value;
                                instance.popper.classList.add(klass);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                    (_b = (_a = _this.globalConfig).onCreate) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                    (_c = options.onCreate) === null || _c === void 0 ? void 0 : _c.call(options, instance);
                } });
            return tippy__default['default'](host, config);
        };
        return TippyService;
    }());
    TippyService.ɵfac = function TippyService_Factory(t) { return new (t || TippyService)(i0__namespace.ɵɵinject(TIPPY_CONFIG), i0__namespace.ɵɵinject(i1__namespace.ViewService), i0__namespace.ɵɵinject(i0__namespace.Injector)); };
    TippyService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: TippyService, factory: TippyService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TippyService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [TIPPY_CONFIG]
                        }] }, { type: i1__namespace.ViewService }, { type: i0__namespace.Injector }];
        }, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TIPPY_CONFIG = TIPPY_CONFIG;
    exports.TIPPY_REF = TIPPY_REF;
    exports.TippyDirective = TippyDirective;
    exports.TippyModule = TippyModule;
    exports.TippyService = TippyService;
    exports.inView = inView;
    exports.overflowChanges = overflowChanges;
    exports.popperVariation = popperVariation;
    exports.tooltipVariation = tooltipVariation;
    exports.withContextMenuVariation = withContextMenuVariation;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngneat-helipopper.umd.js.map
