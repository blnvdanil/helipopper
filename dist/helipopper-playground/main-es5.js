(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkhelipopper_playground"] = self["webpackChunkhelipopper_playground"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    4121:
    /*!********************************************************!*\
      !*** ./projects/ngneat/helipopper/src/lib/defaults.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "tooltipVariation": function tooltipVariation() {
          return (
            /* binding */
            _tooltipVariation
          );
        },

        /* harmony export */
        "popperVariation": function popperVariation() {
          return (
            /* binding */
            _popperVariation
          );
        },

        /* harmony export */
        "withContextMenuVariation": function withContextMenuVariation() {
          return (
            /* binding */
            _withContextMenuVariation
          );
        }
        /* harmony export */

      });

      var _tooltipVariation = {
        theme: null,
        arrow: false,
        animation: 'scale',
        trigger: 'mouseenter',
        offset: [0, 5]
      };
      var _popperVariation = {
        theme: 'light',
        arrow: true,
        offset: [0, 10],
        animation: null,
        trigger: 'click',
        interactive: true
      };

      function _withContextMenuVariation(baseVariation) {
        return Object.assign(Object.assign({}, baseVariation), {
          placement: 'right-start',
          trigger: 'manual',
          arrow: false,
          offset: [0, 0]
        });
      }
      /***/

    },

    /***/
    6544:
    /*!***************************************************************!*\
      !*** ./projects/ngneat/helipopper/src/lib/tippy.directive.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TippyDirective": function TippyDirective() {
          return (
            /* binding */
            _TippyDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var tippy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tippy.js */
      253);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      7762);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      6937);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      3763);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      7540);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      5755);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      4689);
      /* harmony import */


      var _ngneat_overview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngneat/overview */
      3633);
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils */
      153);
      /* harmony import */


      var _tippy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tippy.types */
      9781);

      var _TippyDirective = /*#__PURE__*/function () {
        function _TippyDirective(platformId, globalConfig, injector, viewService, vcr, zone, hostRef) {
          _classCallCheck(this, _TippyDirective);

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

        _createClass(_TippyDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformServer)(this.platformId)) return;
            var props = Object.keys(changes).reduce(function (acc, change) {
              if (change === 'isVisible') return acc;
              acc[change] = changes[change].currentValue;
              return acc;
            }, {});
            var variation;

            if (isChanged('variation', changes)) {
              variation = changes.variation.currentValue;
              this.variationDefined = true;
            } else if (!this.variationDefined) {
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
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.useHostWidth) {
              this.props.maxWidth = this.hostWidth;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.zone.run(function () {
              if (_this.lazy) {
                if (_this.onlyTextOverflow) {
                  (0, _utils__WEBPACK_IMPORTED_MODULE_0__.inView)(_this.host).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function () {
                    return (0, _utils__WEBPACK_IMPORTED_MODULE_0__.overflowChanges)(_this.host);
                  }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(_this.destroyed)).subscribe(function (isElementOverflow) {
                    _this.checkOverflow(isElementOverflow);
                  });
                } else {
                  (0, _utils__WEBPACK_IMPORTED_MODULE_0__.inView)(_this.host).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(_this.destroyed)).subscribe(function () {
                    _this.createInstance();
                  });
                }
              } else if (_this.onlyTextOverflow) {
                (0, _utils__WEBPACK_IMPORTED_MODULE_0__.overflowChanges)(_this.host).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(_this.destroyed)).subscribe(function (isElementOverflow) {
                  _this.checkOverflow(isElementOverflow);
                });
              } else {
                _this.createInstance();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            this.destroyed.next();
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.destroy();
            this.destroyView();
          }
        }, {
          key: "destroyView",
          value: function destroyView() {
            var _a;

            (_a = this.viewRef) === null || _a === void 0 ? void 0 : _a.destroy();
            this.viewRef = null;
          }
        }, {
          key: "show",
          value: function show() {
            var _a;

            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.show();
          }
        }, {
          key: "hide",
          value: function hide() {
            var _a;

            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.hide();
          }
        }, {
          key: "enable",
          value: function enable() {
            var _a;

            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.enable();
          }
        }, {
          key: "disable",
          value: function disable() {
            var _a;

            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.disable();
          }
        }, {
          key: "setProps",
          value: function setProps(props) {
            var _a;

            this.props = props;
            (_a = this.instance) === null || _a === void 0 ? void 0 : _a.setProps((0, _utils__WEBPACK_IMPORTED_MODULE_0__.onlyTippyProps)(props));
          }
        }, {
          key: "setStatus",
          value: function setStatus() {
            var _a, _b;

            this.enabled ? (_a = this.instance) === null || _a === void 0 ? void 0 : _a.enable() : (_b = this.instance) === null || _b === void 0 ? void 0 : _b.disable();
          }
        }, {
          key: "host",
          get: function get() {
            return this.customHost || this.hostRef.nativeElement;
          }
        }, {
          key: "hostWidth",
          get: function get() {
            return "".concat(this.host.getBoundingClientRect().width, "px");
          }
        }, {
          key: "createInstance",
          value: function createInstance() {
            var _this2 = this;

            if (this.content == null) {
              return;
            }

            this.zone.run(function () {
              _this2.instance = (0, tippy_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this2.host, Object.assign(Object.assign(Object.assign({
                allowHTML: true,
                appendTo: document.body
              }, (0, _utils__WEBPACK_IMPORTED_MODULE_0__.onlyTippyProps)(_this2.globalConfig)), (0, _utils__WEBPACK_IMPORTED_MODULE_0__.onlyTippyProps)(_this2.props)), {
                onMount: function onMount(instance) {
                  var _a, _b;

                  _this2.isVisible = true;

                  _this2.visible.next(true);

                  _this2.useHostWidth && _this2.listenToHostResize();
                  (_b = (_a = _this2.globalConfig).onMount) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                },
                onCreate: function onCreate(instance) {
                  var _a, _b;

                  if (_this2.className) {
                    var _iterator = _createForOfIteratorHelper((0, _utils__WEBPACK_IMPORTED_MODULE_0__.normalizeClassName)(_this2.className)),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var klass = _step.value;
                        instance.popper.classList.add(klass);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  (_b = (_a = _this2.globalConfig).onCreate) === null || _b === void 0 ? void 0 : _b.call(_a, instance);

                  if (_this2.isVisible === true) {
                    instance.show();
                  }
                },
                onShow: function onShow(instance) {
                  var _a, _b;

                  _this2.zone.run(function () {
                    var content = _this2.resolveContent();

                    if ((0, _ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isString)(content)) {
                      instance.setProps({
                        allowHTML: false
                      });
                    }

                    instance.setContent(content);
                    _this2.hideOnEscape && _this2.handleEscapeButton();
                  });

                  if (_this2.useHostWidth) {
                    // Don't access `hostWidth` multiple times since it's a getter that calls `getBoundingClientRect()`,
                    // which triggers the whole layout update.
                    var hostWidth = _this2.hostWidth;
                    instance.popper.style.width = hostWidth;
                    instance.popper.style.maxWidth = hostWidth;
                    instance.popper.firstElementChild.style.maxWidth = hostWidth;
                  }

                  (_b = (_a = _this2.globalConfig).onShow) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                },
                onHidden: function onHidden(instance) {
                  var _a, _b;

                  _this2.destroyView();

                  _this2.isVisible = false;

                  _this2.visible.next(false);

                  (_b = (_a = _this2.globalConfig).onHidden) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                }
              }));

              _this2.setStatus();

              _this2.setProps(_this2.props);

              _this2.variation === 'contextMenu' && _this2.handleContextMenu();
            });
          }
        }, {
          key: "resolveContent",
          value: function resolveContent() {
            if (!this.viewOptions$ && !(0, _ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isString)(this.content)) {
              if ((0, _ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isComponent)(this.content)) {
                this.viewOptions$ = {
                  injector: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector.create({
                    providers: [{
                      provide: _tippy_types__WEBPACK_IMPORTED_MODULE_1__.TIPPY_REF,
                      useValue: this.instance
                    }],
                    parent: this.injector
                  })
                };
              } else if ((0, _ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isTemplateRef)(this.content)) {
                this.viewOptions$ = {
                  context: {
                    $implicit: this.hide.bind(this),
                    data: this.data
                  }
                };
              }
            }

            this.viewRef = this.viewService.createView(this.content, Object.assign({
              vcr: this.vcr
            }, this.viewOptions$));
            var content = this.viewRef.getElement();

            if ((0, _ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.isString)(content) && this.globalConfig.beforeRender) {
              content = this.globalConfig.beforeRender(content);
            }

            return content;
          }
        }, {
          key: "handleContextMenu",
          value: function handleContextMenu() {
            var _this3 = this;

            (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this.host, 'contextmenu').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed)).subscribe(function (event) {
              event.preventDefault();

              _this3.instance.setProps({
                getReferenceClientRect: function getReferenceClientRect() {
                  return {
                    width: 0,
                    height: 0,
                    top: event.clientY,
                    bottom: event.clientY,
                    left: event.clientX,
                    right: event.clientX
                  };
                }
              });

              _this3.instance.show();
            });
          }
        }, {
          key: "handleEscapeButton",
          value: function handleEscapeButton() {
            var _this4 = this;

            this.pressButton$(document.body, 'Escape').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0, rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.destroyed, this.visible.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (v) {
              return !v;
            }))))).subscribe(function () {
              return _this4.hide();
            });
          }
        }, {
          key: "pressButton$",
          value: function pressButton$(element, codeButton) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(element, 'keydown').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (_ref) {
              var code = _ref.code;
              return codeButton === code;
            }));
          }
        }, {
          key: "checkOverflow",
          value: function checkOverflow(isElementOverflow) {
            var _a;

            if (isElementOverflow) {
              if (!this.instance) {
                this.createInstance();
              } else {
                this.instance.enable();
              }
            } else {
              (_a = this.instance) === null || _a === void 0 ? void 0 : _a.disable();
            }
          }
        }, {
          key: "listenToHostResize",
          value: function listenToHostResize() {
            var _this5 = this;

            (0, _utils__WEBPACK_IMPORTED_MODULE_0__.dimensionsChanges)(this.host).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0, rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.destroyed, this.visible))).subscribe(function () {
              _this5.instance.popper.style.width = _this5.hostWidth;
            });
          }
        }]);

        return _TippyDirective;
      }();

      _TippyDirective.ɵfac = function TippyDirective_Factory(t) {
        return new (t || _TippyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_tippy_types__WEBPACK_IMPORTED_MODULE_1__.TIPPY_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngneat_overview__WEBPACK_IMPORTED_MODULE_8__.ViewService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
      };

      _TippyDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _TippyDirective,
        selectors: [["", "tippy", ""]],
        inputs: {
          appendTo: "appendTo",
          delay: "delay",
          duration: "duration",
          hideOnClick: "hideOnClick",
          interactive: "interactive",
          interactiveBorder: "interactiveBorder",
          maxWidth: "maxWidth",
          offset: "offset",
          placement: "placement",
          popperOptions: "popperOptions",
          showOnCreate: "showOnCreate",
          trigger: "trigger",
          triggerTarget: "triggerTarget",
          zIndex: "zIndex",
          lazy: "lazy",
          variation: "variation",
          isEnabled: "isEnabled",
          className: "className",
          onlyTextOverflow: "onlyTextOverflow",
          data: "data",
          useHostWidth: "useHostWidth",
          hideOnEscape: "hideOnEscape",
          content: ["tippy", "content"],
          customHost: ["tippyHost", "customHost"],
          isVisible: "isVisible"
        },
        outputs: {
          visible: "visible",
          changed: "changed"
        },
        exportAs: ["tippy"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      function isChanged(key, changes) {
        return key in changes;
      }
      /***/

    },

    /***/
    437:
    /*!************************************************************!*\
      !*** ./projects/ngneat/helipopper/src/lib/tippy.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TippyModule": function TippyModule() {
          return (
            /* binding */
            _TippyModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tippy.directive */
      6544);
      /* harmony import */


      var _tippy_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tippy.types */
      9781);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _TippyModule = /*#__PURE__*/function () {
        function _TippyModule() {
          _classCallCheck(this, _TippyModule);
        }

        _createClass(_TippyModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: _TippyModule,
              providers: [{
                provide: _tippy_types__WEBPACK_IMPORTED_MODULE_1__.TIPPY_CONFIG,
                useValue: config
              }]
            };
          }
        }]);

        return _TippyModule;
      }();

      _TippyModule.ɵfac = function TippyModule_Factory(t) {
        return new (t || _TippyModule)();
      };

      _TippyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _TippyModule
      });
      _TippyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_TippyModule, {
          declarations: [_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
          exports: [_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective]
        });
      })();
      /***/

    },

    /***/
    586:
    /*!*************************************************************!*\
      !*** ./projects/ngneat/helipopper/src/lib/tippy.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TippyService": function TippyService() {
          return (
            /* binding */
            _TippyService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var tippy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tippy.js */
      253);
      /* harmony import */


      var _ngneat_overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngneat/overview */
      3633);
      /* harmony import */


      var _tippy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tippy.types */
      9781);
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils */
      153);

      var _TippyService = /*#__PURE__*/function () {
        function _TippyService(globalConfig, view, injector) {
          _classCallCheck(this, _TippyService);

          this.globalConfig = globalConfig;
          this.view = view;
          this.injector = injector;
        }

        _createClass(_TippyService, [{
          key: "create",
          value: function create(host, content) {
            var _this6 = this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var config = Object.assign(Object.assign(Object.assign(Object.assign({
              onShow: function onShow(instance) {
                var _a;

                if (!instance.$viewOptions) {
                  instance.$viewOptions = {};

                  if ((0, _ngneat_overview__WEBPACK_IMPORTED_MODULE_2__.isTemplateRef)(content)) {
                    instance.$viewOptions.context = Object.assign({
                      $implicit: instance.hide.bind(instance)
                    }, options.context);
                  } else if ((0, _ngneat_overview__WEBPACK_IMPORTED_MODULE_2__.isComponent)(content)) {
                    instance.$viewOptions.injector = _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector.create({
                      providers: [{
                        provide: _tippy_types__WEBPACK_IMPORTED_MODULE_0__.TIPPY_REF,
                        useValue: instance
                      }],
                      parent: options.injector || _this6.injector
                    });
                  }
                }

                instance.view = _this6.view.createView(content, Object.assign(Object.assign({}, options), instance.$viewOptions));
                instance.setContent(instance.view.getElement());
                (_a = options === null || options === void 0 ? void 0 : options.onShow) === null || _a === void 0 ? void 0 : _a.call(options, instance);
              },
              onHidden: function onHidden(instance) {
                var _a;

                instance.view.destroy();
                (_a = options === null || options === void 0 ? void 0 : options.onHidden) === null || _a === void 0 ? void 0 : _a.call(options, instance);
                instance.view = null;
              }
            }, (0, _utils__WEBPACK_IMPORTED_MODULE_1__.onlyTippyProps)(this.globalConfig)), this.globalConfig.variations[options.variation || this.globalConfig.defaultVariation]), (0, _utils__WEBPACK_IMPORTED_MODULE_1__.onlyTippyProps)(options)), {
              onCreate: function onCreate(instance) {
                var _a, _b, _c;

                if (options.className) {
                  var _iterator2 = _createForOfIteratorHelper((0, _utils__WEBPACK_IMPORTED_MODULE_1__.normalizeClassName)(options.className)),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var klass = _step2.value;
                      instance.popper.classList.add(klass);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                (_b = (_a = _this6.globalConfig).onCreate) === null || _b === void 0 ? void 0 : _b.call(_a, instance);
                (_c = options.onCreate) === null || _c === void 0 ? void 0 : _c.call(options, instance);
              }
            });
            return (0, tippy_js__WEBPACK_IMPORTED_MODULE_4__["default"])(host, config);
          }
        }]);

        return _TippyService;
      }();

      _TippyService.ɵfac = function TippyService_Factory(t) {
        return new (t || _TippyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_tippy_types__WEBPACK_IMPORTED_MODULE_0__.TIPPY_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngneat_overview__WEBPACK_IMPORTED_MODULE_2__.ViewService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
      };

      _TippyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _TippyService,
        factory: _TippyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9781:
    /*!***********************************************************!*\
      !*** ./projects/ngneat/helipopper/src/lib/tippy.types.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TIPPY_CONFIG": function TIPPY_CONFIG() {
          return (
            /* binding */
            _TIPPY_CONFIG
          );
        },

        /* harmony export */
        "TIPPY_REF": function TIPPY_REF() {
          return (
            /* binding */
            _TIPPY_REF
          );
        },

        /* harmony export */
        "coerceElement": function coerceElement() {
          return (
            /* binding */
            _coerceElement
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _TIPPY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Tippy config', {
        providedIn: 'root',
        factory: function factory() {
          return {};
        }
      });

      var _TIPPY_REF = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('TIPPY_REF');

      function _coerceElement(element) {
        return element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? element.nativeElement : element;
      }
      /***/

    },

    /***/
    153:
    /*!*****************************************************!*\
      !*** ./projects/ngneat/helipopper/src/lib/utils.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "inView": function inView() {
          return (
            /* binding */
            _inView
          );
        },

        /* harmony export */
        "overflowChanges": function overflowChanges() {
          return (
            /* binding */
            _overflowChanges
          );
        },

        /* harmony export */
        "dimensionsChanges": function dimensionsChanges() {
          return (
            /* binding */
            _dimensionsChanges
          );
        },

        /* harmony export */
        "onlyTippyProps": function onlyTippyProps() {
          return (
            /* binding */
            _onlyTippyProps
          );
        },

        /* harmony export */
        "normalizeClassName": function normalizeClassName() {
          return (
            /* binding */
            _normalizeClassName
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      872);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      1046);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _tippy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tippy.types */
      9781);

      var supportsIntersectionObserver = false;
      var supportsResizeObserver = false;

      if (typeof window !== 'undefined') {
        supportsIntersectionObserver = 'IntersectionObserver' in window;
        supportsResizeObserver = 'ResizeObserver' in window;
      }

      function _inView(host) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          root: null,
          threshold: 0.3
        };
        var element = (0, _tippy_types__WEBPACK_IMPORTED_MODULE_0__.coerceElement)(host);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
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
          return function () {
            return observer.disconnect();
          };
        });
      }

      function isElementOverflow(host) {
        // Don't access the `offsetWidth` multipe times since it triggers layout updates.
        var hostOffsetWidth = host.offsetWidth;
        return hostOffsetWidth > host.parentElement.offsetWidth || hostOffsetWidth < host.scrollWidth;
      }

      function _overflowChanges(host) {
        var element = (0, _tippy_types__WEBPACK_IMPORTED_MODULE_0__.coerceElement)(host);
        return _dimensionsChanges(element).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.auditTime)(150), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function () {
          return isElementOverflow(element);
        }));
      }

      function _dimensionsChanges(target) {
        return resizeObserverStrategy(target);
      }

      function resizeObserverStrategy(target) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
          if (!supportsResizeObserver) {
            subscriber.next();
            subscriber.complete();
            return;
          }

          var observer = new ResizeObserver(function () {
            return subscriber.next(true);
          });
          observer.observe(target);
          return function () {
            return observer.disconnect();
          };
        });
      }

      function _onlyTippyProps(allProps) {
        var tippyProps = {};
        var ownProps = ['variations', 'useHostWidth', 'defaultVariation', 'beforeRender', 'lazy', 'variation', 'isEnabled', 'className', 'onlyTextOverflow', 'data', 'content', 'hideOnEscape', 'customHost'];
        Object.keys(allProps).forEach(function (prop) {
          if (!ownProps.includes(prop)) {
            tippyProps[prop] = allProps[prop];
          }
        });
        return tippyProps;
      }

      function _normalizeClassName(className) {
        var classes = isString(className) ? className.split(' ') : className;
        return classes.map(function (klass) {
          return klass === null || klass === void 0 ? void 0 : klass.trim();
        }).filter(Boolean);
      }

      function isString(value) {
        return typeof value === 'string';
      }
      /***/

    },

    /***/
    5445:
    /*!******************************************************!*\
      !*** ./projects/ngneat/helipopper/src/public-api.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TippyModule": function TippyModule() {
          return (
            /* reexport safe */
            _lib_tippy_module__WEBPACK_IMPORTED_MODULE_0__.TippyModule
          );
        },

        /* harmony export */
        "TippyDirective": function TippyDirective() {
          return (
            /* reexport safe */
            _lib_tippy_directive__WEBPACK_IMPORTED_MODULE_1__.TippyDirective
          );
        },

        /* harmony export */
        "tooltipVariation": function tooltipVariation() {
          return (
            /* reexport safe */
            _lib_defaults__WEBPACK_IMPORTED_MODULE_2__.tooltipVariation
          );
        },

        /* harmony export */
        "popperVariation": function popperVariation() {
          return (
            /* reexport safe */
            _lib_defaults__WEBPACK_IMPORTED_MODULE_2__.popperVariation
          );
        },

        /* harmony export */
        "withContextMenuVariation": function withContextMenuVariation() {
          return (
            /* reexport safe */
            _lib_defaults__WEBPACK_IMPORTED_MODULE_2__.withContextMenuVariation
          );
        },

        /* harmony export */
        "TippyService": function TippyService() {
          return (
            /* reexport safe */
            _lib_tippy_service__WEBPACK_IMPORTED_MODULE_3__.TippyService
          );
        },

        /* harmony export */
        "inView": function inView() {
          return (
            /* reexport safe */
            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.inView
          );
        },

        /* harmony export */
        "overflowChanges": function overflowChanges() {
          return (
            /* reexport safe */
            _lib_utils__WEBPACK_IMPORTED_MODULE_4__.overflowChanges
          );
        },

        /* harmony export */
        "TIPPY_REF": function TIPPY_REF() {
          return (
            /* reexport safe */
            _lib_tippy_types__WEBPACK_IMPORTED_MODULE_5__.TIPPY_REF
          );
        },

        /* harmony export */
        "TIPPY_CONFIG": function TIPPY_CONFIG() {
          return (
            /* reexport safe */
            _lib_tippy_types__WEBPACK_IMPORTED_MODULE_5__.TIPPY_CONFIG
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_tippy_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/tippy.module */
      437);
      /* harmony import */


      var _lib_tippy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/tippy.directive */
      6544);
      /* harmony import */


      var _lib_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/defaults */
      4121);
      /* harmony import */


      var _lib_tippy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/tippy.service */
      586);
      /* harmony import */


      var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lib/utils */
      153);
      /* harmony import */


      var _lib_tippy_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lib/tippy.types */
      9781);
      /***/

    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _is_visible_isVisible_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./is-visible/isVisible.component */
      164);
      /* harmony import */


      var _playground_playground_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./playground/playground.component */
      6898);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: 'is-visible',
        component: _is_visible_isVisible_component__WEBPACK_IMPORTED_MODULE_0__.IsVisibleComponent
      }, {
        path: '**',
        component: _playground_playground_component__WEBPACK_IMPORTED_MODULE_1__.PlaygroundComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _example_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./example/example.component */
      6172);
      /* harmony import */


      var _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/helipopper */
      5445);
      /* harmony import */


      var _playground_playground_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./playground/playground.component */
      6898);
      /* harmony import */


      var _is_visible_isVisible_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./is-visible/isVisible.component */
      164);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _projects_ngneat_helipopper_src_lib_tippy_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../projects/ngneat/helipopper/src/lib/tippy.module */
      437);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.TippyModule.forRoot({
          defaultVariation: "tooltip",
          variations: {
            tooltip: _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.tooltipVariation,
            popper: _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.popperVariation,
            menu: Object.assign(Object.assign({}, _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.popperVariation), {
              appendTo: "parent",
              arrow: false,
              offset: [0, 0]
            }),
            contextMenu: (0, _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.withContextMenuVariation)(_ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.popperVariation),
            popperBorder: Object.assign(Object.assign({}, _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_3__.popperVariation), {
              theme: "light-border"
            })
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _example_example_component__WEBPACK_IMPORTED_MODULE_2__.ExampleComponent, _playground_playground_component__WEBPACK_IMPORTED_MODULE_4__.PlaygroundComponent, _example_example_component__WEBPACK_IMPORTED_MODULE_2__.ExampleComponent, _is_visible_isVisible_component__WEBPACK_IMPORTED_MODULE_5__.IsVisibleComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _projects_ngneat_helipopper_src_lib_tippy_module__WEBPACK_IMPORTED_MODULE_6__.TippyModule]
        });
      })();
      /***/

    },

    /***/
    6172:
    /*!**********************************************!*\
      !*** ./src/app/example/example.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExampleComponent": function ExampleComponent() {
          return (
            /* binding */
            _ExampleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngneat/helipopper */
      5445);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ExampleComponent = /*#__PURE__*/function () {
        function _ExampleComponent(tippy) {
          _classCallCheck(this, _ExampleComponent);

          console.log(tippy);
        }

        _createClass(_ExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("ngOnInit");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("ngOnDestroy");
          }
        }]);

        return _ExampleComponent;
      }();

      _ExampleComponent.ɵfac = function ExampleComponent_Factory(t) {
        return new (t || _ExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngneat_helipopper__WEBPACK_IMPORTED_MODULE_0__.TIPPY_REF));
      };

      _ExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ExampleComponent,
        selectors: [["app-example"]],
        decls: 2,
        vars: 0,
        template: function ExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "example works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    164:
    /*!***************************************************!*\
      !*** ./src/app/is-visible/isVisible.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IsVisibleComponent": function IsVisibleComponent() {
          return (
            /* binding */
            _IsVisibleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _projects_ngneat_helipopper_src_lib_tippy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../projects/ngneat/helipopper/src/lib/tippy.directive */
      6544);

      var _IsVisibleComponent = function _IsVisibleComponent() {
        _classCallCheck(this, _IsVisibleComponent);

        this.visibility = true;
      };

      _IsVisibleComponent.ɵfac = function IsVisibleComponent_Factory(t) {
        return new (t || _IsVisibleComponent)();
      };

      _IsVisibleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _IsVisibleComponent,
        selectors: [["app-is-visible"]],
        decls: 8,
        vars: 1,
        consts: [[1, "btn-container"], ["tippy", "I'm a declarative tooltip", "variation", "tooltip", "trigger", "click", "className", "declarativeTooltip", "data-cy", "tippy-reference-declarative", 1, "btn", "btn-outline-secondary", 3, "isVisible"], ["data-cy", "trigger-declarative", 1, "btn", "btn-outline-info", "btn-sm", "mt-2", 3, "click"]],
        template: function IsVisibleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Declaritive visibility (already set true before render in the component)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Declaritive Tooltip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IsVisibleComponent_Template_button_click_5_listener() {
              return ctx.visibility = !ctx.visibility;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Toggle tooltip\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isVisible", ctx.visibility);
          }
        },
        directives: [_projects_ngneat_helipopper_src_lib_tippy_directive__WEBPACK_IMPORTED_MODULE_0__.TippyDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc1Zpc2libGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    6898:
    /*!****************************************************!*\
      !*** ./src/app/playground/playground.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlaygroundComponent": function PlaygroundComponent() {
          return (
            /* binding */
            _PlaygroundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _example_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../example/example.component */
      6172);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      1565);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      3050);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ngneat_helipopper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngneat/helipopper */
      5445);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _projects_ngneat_helipopper_src_lib_tippy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../projects/ngneat/helipopper/src/lib/tippy.directive */
      6544);

      var _c0 = ["inputName"];
      var _c1 = ["inputNameComp"];

      function PlaygroundComponent_ng_container_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r22, " ");
        }
      }

      function PlaygroundComponent_ng_container_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r23, " ");
        }
      }

      function PlaygroundComponent_ng_container_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r24.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", option_r24.label, " ");
        }
      }

      function PlaygroundComponent_ng_container_0_ng_template_42_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r27, " ");
        }
      }

      function PlaygroundComponent_ng_container_0_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlaygroundComponent_ng_container_0_ng_template_42_div_0_Template, 2, 1, "div", 55);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.tooltipPositions);
        }
      }

      function PlaygroundComponent_ng_container_0_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Hello");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      }

      function PlaygroundComponent_ng_container_0_div_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", item_r28.label)("lazy", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r28.label);
        }
      }

      function PlaygroundComponent_ng_container_0_ng_template_130_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_ng_template_130_Template_li_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var item_r30 = restoredCtx.data;
            var hide_r29 = restoredCtx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            ctx_r31.copy(item_r30);
            return hide_r29();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "li", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_ng_template_130_Template_li_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var item_r30 = restoredCtx.data;
            var hide_r29 = restoredCtx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            ctx_r33.duplicate(item_r30);
            return hide_r29();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Duplicate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function PlaygroundComponent_ng_container_0_li_136_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](131);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r13)("data", item_r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r34.label, " ");
        }
      }

      function PlaygroundComponent_ng_container_0_ng_template_150_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](153);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r18);
        }
      }

      function PlaygroundComponent_ng_container_0_ng_template_152_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](155);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tippy", _r20);
        }
      }

      function PlaygroundComponent_ng_container_0_ng_template_154_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function PlaygroundComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visible", function PlaygroundComponent_ng_container_0_Template_button_visible_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r35.handleStatus($event);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](65);

            return _r9.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_69_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](65);

            return _r9.hide();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_84_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r39.toggle();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_95_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r40.changeContent();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_103_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r41.maxWidth = 100;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_117_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r42.visibility = !ctx_r42.visibility;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, " Toggle tooltip ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](119, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Using the Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "button", 22, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_124_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](125);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r43.useService(_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "button", 22, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlaygroundComponent_ng_container_0_Template_button_click_127_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](128);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r44.useServiceComponent(_r12);
          });

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
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](43);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](151);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

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
        }
      }

      var _PlaygroundComponent = /*#__PURE__*/function () {
        function _PlaygroundComponent(fb, service) {
          _classCallCheck(this, _PlaygroundComponent);

          this.fb = fb;
          this.service = service;
          this.tooltipPositions = ['auto', 'top', 'right', 'bottom', 'left'];
          this.tooltipAlignments = [{
            label: 'start',
            value: '-start'
          }, {
            label: 'center',
            value: ''
          }, {
            label: 'end',
            value: '-end'
          }];
          this.tooltipTypes = ['popper', 'tooltip', 'popperBorder'];
          this.tooltipSettings = this.fb.group({
            type: this.fb.control('tooltip'),
            alignment: this.fb.control(''),
            position: this.fb.control('top'),
            hideOnEsc: this.fb.control(false)
          });
          this.interval$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(function () {
            return console.log('interval completed');
          }));
          this.items = Array.from({
            length: 500
          }, function (_, i) {
            return {
              id: i,
              label: "Value ".concat(i + 1)
            };
          });
          this.list = Array.from({
            length: 5
          }, function (_, i) {
            return {
              id: i,
              label: "Value ".concat(i + 1)
            };
          });
          this.thoughts = 'We just need someone to talk to 🥺';
          this.isDisabled = false;
          this.text = "Long Long All Text";
          this.comp = _example_example_component__WEBPACK_IMPORTED_MODULE_0__.ExampleComponent;
          this.maxWidth = 300;
          this.show = true;
          this.visibility = false;
        }

        _createClass(_PlaygroundComponent, [{
          key: "tooltipPosition",
          get: function get() {
            var _this$tooltipSettings = this.tooltipSettings.value,
                position = _this$tooltipSettings.position,
                alignment = _this$tooltipSettings.alignment;
            return "".concat(position).concat(alignment);
          }
        }, {
          key: "tooltipType",
          get: function get() {
            return this.tooltipSettings.value.type;
          }
        }, {
          key: "hideOnEsc",
          get: function get() {
            return this.tooltipSettings.value.hideOnEsc;
          }
        }, {
          key: "changeContent",
          value: function changeContent() {
            this.text = this.text === "Long Long All Text" ? "Short" : "Long Long All Text";
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.isDisabled = !this.isDisabled;
          }
        }, {
          key: "handleStatus",
          value: function handleStatus($event) {
            console.log('show tooltip', $event);
          }
        }, {
          key: "useService",
          value: function useService(host) {
            if (!this.instance2) {
              this.instance2 = this.service.create(host, 'Created');
            }
          }
        }, {
          key: "useServiceComponent",
          value: function useServiceComponent(host2) {
            if (!this.instance) {
              this.instance = this.service.create(host2, _example_example_component__WEBPACK_IMPORTED_MODULE_0__.ExampleComponent, {
                variation: 'popper'
              });
            }
          }
        }, {
          key: "duplicate",
          value: function duplicate(item) {
            console.log('duplicate', item);
          }
        }, {
          key: "copy",
          value: function copy(item) {
            console.log('copy', item);
          }
        }]);

        return _PlaygroundComponent;
      }();

      _PlaygroundComponent.ɵfac = function PlaygroundComponent_Factory(t) {
        return new (t || _PlaygroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_helipopper__WEBPACK_IMPORTED_MODULE_1__.TippyService));
      };

      _PlaygroundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _PlaygroundComponent,
        selectors: [["app-is-visible"]],
        viewQuery: function PlaygroundComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputName = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputNameComp = _t.first);
          }
        },
        decls: 6,
        vars: 1,
        consts: [[4, "ngIf"], ["type", "text", "placeholder", "Sanitize", "tippy", "<img src='empty.gif' onerror='alert(1);' />", 2, "max-width", "600px"], ["id", "tippy-playground", 2, "text-transform", "capitalize", 3, "formGroup"], ["class", "flex items-center", 4, "ngFor", "ngForOf"], ["type", "checkbox", "formControlName", "hideOnEsc", "id", "hideOnEsc-toggle", 1, "mr-4"], [1, "btn-container"], ["tippy", "Helpful Message", 1, "btn", "btn-outline-primary", 3, "placement", "variation", "hideOnEscape"], ["tippy", "Default tooltip", 1, "btn", "btn-outline-secondary"], ["id", "tippy-value-non-nil", 1, "btn-container"], ["variation", "popper", 1, "btn", "btn-outline-secondary", 3, "tippy"], ["id", "tippy-value-null", 1, "btn-container"], ["id", "tippy-value-undefined", 1, "btn-container"], ["id", "custom-template", 1, "btn-container"], ["tippy2", "tippy"], ["tpl", ""], ["tpl2", ""], ["id", "custom-component"], ["variation", "popper", 1, "btn", "btn-outline-danger", 3, "tippy", "visible"], ["id", "manual-trigger", 1, "block"], [1, "btn-container", "items-center"], ["tippy", "Helpful Message", "trigger", "manual", 1, "mr-4"], ["tippy", "tippy"], [1, "btn", "btn-outline-dark", 3, "click"], ["id", "lazy"], [2, "height", "300px", "overflow-y", "auto"], [3, "tippy", "lazy", 4, "ngFor", "ngForOf"], ["id", "disabled"], ["tippy", "Tooltip", 1, "btn", "btn-outline-dark", 3, "isEnabled"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["id", "text-overflow"], [1, "overflow-hidden", "flex", 2, "max-width", "100px"], ["placement", "right", 1, "ellipsis", 3, "tippy", "onlyTextOverflow"], [1, "btn", "btn-outline-info", "btn-sm", "mt-2", 3, "click"], [1, "overflow-hidden", "flex"], ["tippy", "Shown immediately when created", 1, "btn", "btn-outline-secondary", 3, "showOnCreate"], ["tippy", "I'm a declarative tooltip", "variation", "tooltip", "trigger", "click", "className", "declarativeTooltip", "data-cy", "tippy-reference-declarative", 1, "btn", "btn-outline-secondary", 3, "isVisible"], ["data-cy", "trigger-declarative", 1, "btn", "btn-outline-info", "btn-sm", "mt-2", 3, "click"], ["id", "service"], ["host", ""], ["host2", ""], ["contextMenu", ""], ["id", "context-menu"], [1, "list-group"], ["class", "list-group-item", "variation", "contextMenu", 3, "tippy", "data", 4, "ngFor", "ngForOf"], [1, "flex"], ["type", "text", "placeholder", "host width", "tippy", "hello world", "variation", "menu", "useHostWidth", "true", 2, "flex", "1", "max-width", "600px"], [1, "dropdown"], ["type", "button", "variation", "menu", 1, "btn", "btn-secondary", "dropdown-toggle", 3, "tippy"], ["one", ""], ["two", ""], ["three", ""], [1, "flex", "items-center"], ["type", "radio", "formControlName", "type", "name", "type", 1, "mr-4", 3, "value"], ["type", "radio", "formControlName", "position", "name", "position", 1, "mr-4", 3, "value"], ["type", "radio", "formControlName", "alignment", "name", "alignment", 1, "mr-4", 3, "value"], ["class", "positions", 4, "ngFor", "ngForOf"], [1, "positions"], [3, "tippy", "lazy"], [1, "list-group", "list-group-flush"], [1, "list-group-item", 3, "click"], ["variation", "contextMenu", 1, "list-group-item", 3, "tippy", "data"], ["href", "#", 1, "dropdown-item"], ["href", "#", "placement", "right", "variation", "menu", "trigger", "mouseenter", 1, "dropdown-item", 3, "tippy"]],
        template: function PlaygroundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PlaygroundComponent_ng_container_0_Template, 156, 29, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sanitize");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _projects_ngneat_helipopper_src_lib_tippy_directive__WEBPACK_IMPORTED_MODULE_2__.TippyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map