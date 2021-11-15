import { NgModule } from '@angular/core';
import { TippyDirective } from './tippy.directive';
import { TIPPY_CONFIG } from './tippy.types';
import * as i0 from "@angular/core";
export class TippyModule {
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
TippyModule.ɵfac = function TippyModule_Factory(t) { return new (t || TippyModule)(); };
TippyModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TippyModule });
TippyModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TippyModule, [{
        type: NgModule,
        args: [{
                declarations: [TippyDirective],
                exports: [TippyDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TippyModule, { declarations: [TippyDirective], exports: [TippyDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmduZWF0L2hlbGlwb3BwZXIvc3JjL2xpYi90aXBweS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxlQUFlLENBQUM7O0FBTTFELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBK0IsRUFBRTtRQUM5QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztzRUFYVSxXQUFXOzZEQUFYLFdBQVc7O3VGQUFYLFdBQVc7Y0FKdkIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzFCOzt3RkFDWSxXQUFXLG1CQUhQLGNBQWMsYUFDbkIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXBweURpcmVjdGl2ZSB9IGZyb20gJy4vdGlwcHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRJUFBZX0NPTkZJRywgVGlwcHlDb25maWcgfSBmcm9tICcuL3RpcHB5LnR5cGVzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGlwcHlEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbVGlwcHlEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFRpcHB5TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBQYXJ0aWFsPFRpcHB5Q29uZmlnPiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxUaXBweU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGlwcHlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFRJUFBZX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=