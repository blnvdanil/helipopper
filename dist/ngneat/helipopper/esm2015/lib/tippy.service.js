import { Inject, Injectable, Injector } from '@angular/core';
import tippy from 'tippy.js';
import { isComponent, isTemplateRef } from '@ngneat/overview';
import { TIPPY_CONFIG, TIPPY_REF } from './tippy.types';
import { normalizeClassName, onlyTippyProps } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "@ngneat/overview";
export class TippyService {
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
                        instance.context = options.context;
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
TippyService.ɵfac = function TippyService_Factory(t) { return new (t || TippyService)(i0.ɵɵinject(TIPPY_CONFIG), i0.ɵɵinject(i1.ViewService), i0.ɵɵinject(i0.Injector)); };
TippyService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TippyService, factory: TippyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TippyService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [TIPPY_CONFIG]
            }] }, { type: i1.ViewService }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nbmVhdC9oZWxpcG9wcGVyL3NyYy9saWIvdGlwcHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFlLE1BQU0sa0JBQWtCLENBQUM7QUFFM0UsT0FBTyxFQUFpQixZQUFZLEVBQUUsU0FBUyxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7QUFHN0QsTUFBTSxPQUFPLFlBQVk7SUFDdkIsWUFDZ0MsWUFBeUIsRUFDL0MsSUFBaUIsRUFDakIsUUFBa0I7UUFGSSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUMvQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQztJQUVKLE1BQU0sQ0FBQyxJQUFhLEVBQUUsT0FBZ0IsRUFBRSxVQUFrQyxFQUFFO1FBQzFFLE1BQU0sTUFBTSw2REFDVixNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUU7O2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtvQkFDMUIsUUFBUSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBRTNCLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUMxQixRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sbUJBQzNCLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFDcEMsT0FBTyxDQUFDLE9BQU8sQ0FDbkIsQ0FBQztxQkFDSDt5QkFBTSxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDL0IsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO3dCQUNuQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDOzRCQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDOzRCQUN2RCxNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUTt5QkFDMUMsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2dCQUNELFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxrQ0FBTyxPQUFPLEdBQUssUUFBUSxDQUFDLFlBQVksRUFBRyxDQUFDO2dCQUN4RixRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDaEQsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSwrQ0FBZixPQUFPLEVBQVcsUUFBUSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUNELFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRTs7Z0JBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3hCLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFFBQVEsK0NBQWpCLE9BQU8sRUFBYSxRQUFRLENBQUMsQ0FBQztnQkFDOUIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDdkIsQ0FBQyxJQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUNyRixjQUFjLENBQUMsT0FBTyxDQUFDLEtBQzFCLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRTs7Z0JBQ25CLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtvQkFDckIsS0FBSyxNQUFNLEtBQUssSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ3pELFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEM7aUJBQ0Y7Z0JBQ0QsTUFBQSxNQUFBLElBQUksQ0FBQyxZQUFZLEVBQUMsUUFBUSxtREFBRyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsTUFBQSxPQUFPLENBQUMsUUFBUSwrQ0FBaEIsT0FBTyxFQUFZLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLENBQUMsR0FDRixDQUFDO1FBRUYsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O3dFQWxEVSxZQUFZLGNBRWIsWUFBWTtrRUFGWCxZQUFZLFdBQVosWUFBWSxtQkFEQyxNQUFNO3VGQUNuQixZQUFZO2NBRHhCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7O3NCQUc3QixNQUFNO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQsIGlzVGVtcGxhdGVSZWYsIFZpZXdTZXJ2aWNlIH0gZnJvbSAnQG5nbmVhdC9vdmVydmlldyc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQG5nbmVhdC9vdmVydmlldyc7XG5pbXBvcnQgeyBDcmVhdGVPcHRpb25zLCBUSVBQWV9DT05GSUcsIFRJUFBZX1JFRiwgVGlwcHlDb25maWcsIFRpcHB5SW5zdGFuY2UgfSBmcm9tICcuL3RpcHB5LnR5cGVzJztcbmltcG9ydCB7IG5vcm1hbGl6ZUNsYXNzTmFtZSwgb25seVRpcHB5UHJvcHMgfSBmcm9tICcuL3V0aWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUaXBweVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRJUFBZX0NPTkZJRykgcHJpdmF0ZSBnbG9iYWxDb25maWc6IFRpcHB5Q29uZmlnLFxuICAgIHByaXZhdGUgdmlldzogVmlld1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGNyZWF0ZShob3N0OiBFbGVtZW50LCBjb250ZW50OiBDb250ZW50LCBvcHRpb25zOiBQYXJ0aWFsPENyZWF0ZU9wdGlvbnM+ID0ge30pOiBUaXBweUluc3RhbmNlIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBvblNob3c6IGluc3RhbmNlID0+IHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZS4kdmlld09wdGlvbnMpIHtcbiAgICAgICAgICBpbnN0YW5jZS4kdmlld09wdGlvbnMgPSB7fTtcblxuICAgICAgICAgIGlmIChpc1RlbXBsYXRlUmVmKGNvbnRlbnQpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS4kdmlld09wdGlvbnMuY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgJGltcGxpY2l0OiBpbnN0YW5jZS5oaWRlLmJpbmQoaW5zdGFuY2UpLFxuICAgICAgICAgICAgICAuLi5vcHRpb25zLmNvbnRleHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0NvbXBvbmVudChjb250ZW50KSkge1xuICAgICAgICAgICAgaW5zdGFuY2UuY29udGV4dCA9IG9wdGlvbnMuY29udGV4dDtcbiAgICAgICAgICAgIGluc3RhbmNlLiR2aWV3T3B0aW9ucy5pbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogVElQUFlfUkVGLCB1c2VWYWx1ZTogaW5zdGFuY2UgfV0sXG4gICAgICAgICAgICAgIHBhcmVudDogb3B0aW9ucy5pbmplY3RvciB8fCB0aGlzLmluamVjdG9yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2UudmlldyA9IHRoaXMudmlldy5jcmVhdGVWaWV3KGNvbnRlbnQsIHsgLi4ub3B0aW9ucywgLi4uaW5zdGFuY2UuJHZpZXdPcHRpb25zIH0pO1xuICAgICAgICBpbnN0YW5jZS5zZXRDb250ZW50KGluc3RhbmNlLnZpZXcuZ2V0RWxlbWVudCgpKTtcbiAgICAgICAgb3B0aW9ucz8ub25TaG93Py4oaW5zdGFuY2UpO1xuICAgICAgfSxcbiAgICAgIG9uSGlkZGVuOiBpbnN0YW5jZSA9PiB7XG4gICAgICAgIGluc3RhbmNlLnZpZXcuZGVzdHJveSgpO1xuICAgICAgICBvcHRpb25zPy5vbkhpZGRlbj8uKGluc3RhbmNlKTtcbiAgICAgICAgaW5zdGFuY2UudmlldyA9IG51bGw7XG4gICAgICB9LFxuICAgICAgLi4ub25seVRpcHB5UHJvcHModGhpcy5nbG9iYWxDb25maWcpLFxuICAgICAgLi4udGhpcy5nbG9iYWxDb25maWcudmFyaWF0aW9uc1tvcHRpb25zLnZhcmlhdGlvbiB8fCB0aGlzLmdsb2JhbENvbmZpZy5kZWZhdWx0VmFyaWF0aW9uXSxcbiAgICAgIC4uLm9ubHlUaXBweVByb3BzKG9wdGlvbnMpLFxuICAgICAgb25DcmVhdGU6IGluc3RhbmNlID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBrbGFzcyBvZiBub3JtYWxpemVDbGFzc05hbWUob3B0aW9ucy5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5wb3BwZXIuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2xvYmFsQ29uZmlnLm9uQ3JlYXRlPy4oaW5zdGFuY2UpO1xuICAgICAgICBvcHRpb25zLm9uQ3JlYXRlPy4oaW5zdGFuY2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGlwcHkoaG9zdCwgY29uZmlnKTtcbiAgfVxufVxuIl19