import { Inject, Injectable, Injector } from '@angular/core';
import tippy from 'tippy.js';
import { isComponent, isTemplateRef, ViewService } from '@ngneat/overview';
import { TIPPY_CONFIG, TIPPY_REF } from './tippy.types';
import { normalizeClassName, onlyTippyProps } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "./tippy.types";
import * as i2 from "@ngneat/overview";
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
TippyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TippyService_Factory() { return new TippyService(i0.ɵɵinject(i1.TIPPY_CONFIG), i0.ɵɵinject(i2.ViewService), i0.ɵɵinject(i0.INJECTOR)); }, token: TippyService, providedIn: "root" });
TippyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
TippyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TIPPY_CONFIG,] }] },
    { type: ViewService },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nbmVhdC9oZWxpcG9wcGVyL3NyYy9saWIvdGlwcHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTNFLE9BQU8sRUFBaUIsWUFBWSxFQUFFLFNBQVMsRUFBOEIsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUc3RCxNQUFNLE9BQU8sWUFBWTtJQUN2QixZQUNnQyxZQUF5QixFQUMvQyxJQUFpQixFQUNqQixRQUFrQjtRQUZJLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQy9DLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDO0lBRUosTUFBTSxDQUFDLElBQWEsRUFBRSxPQUFnQixFQUFFLFVBQWtDLEVBQUU7UUFDMUUsTUFBTSxNQUFNLDZEQUNWLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRTs7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO29CQUMxQixRQUFRLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztvQkFFM0IsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQzFCLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxtQkFDM0IsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUNwQyxPQUFPLENBQUMsT0FBTyxDQUNuQixDQUFDO3FCQUNIO3lCQUFNLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUMvQixRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDOzRCQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDOzRCQUN2RCxNQUFNLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUTt5QkFDMUMsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2dCQUNELFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxrQ0FBTyxPQUFPLEdBQUssUUFBUSxDQUFDLFlBQVksRUFBRyxDQUFDO2dCQUN4RixRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDaEQsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSwrQ0FBZixPQUFPLEVBQVcsUUFBUSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUNELFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRTs7Z0JBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3hCLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFFBQVEsK0NBQWpCLE9BQU8sRUFBYSxRQUFRLENBQUMsQ0FBQztnQkFDOUIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDdkIsQ0FBQyxJQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUNyRixjQUFjLENBQUMsT0FBTyxDQUFDLEtBQzFCLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRTs7Z0JBQ25CLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtvQkFDckIsS0FBSyxNQUFNLEtBQUssSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ3pELFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEM7aUJBQ0Y7Z0JBQ0QsTUFBQSxNQUFBLElBQUksQ0FBQyxZQUFZLEVBQUMsUUFBUSxtREFBRyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsTUFBQSxPQUFPLENBQUMsUUFBUSwrQ0FBaEIsT0FBTyxFQUFZLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLENBQUMsR0FDRixDQUFDO1FBRUYsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7WUFsREYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzRDQUc3QixNQUFNLFNBQUMsWUFBWTtZQVJhLFdBQVc7WUFGbkIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgeyBpc0NvbXBvbmVudCwgaXNUZW1wbGF0ZVJlZiwgVmlld1NlcnZpY2UgfSBmcm9tICdAbmduZWF0L292ZXJ2aWV3JztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICdAbmduZWF0L292ZXJ2aWV3JztcbmltcG9ydCB7IENyZWF0ZU9wdGlvbnMsIFRJUFBZX0NPTkZJRywgVElQUFlfUkVGLCBUaXBweUNvbmZpZywgVGlwcHlJbnN0YW5jZSB9IGZyb20gJy4vdGlwcHkudHlwZXMnO1xuaW1wb3J0IHsgbm9ybWFsaXplQ2xhc3NOYW1lLCBvbmx5VGlwcHlQcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFRpcHB5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVElQUFlfQ09ORklHKSBwcml2YXRlIGdsb2JhbENvbmZpZzogVGlwcHlDb25maWcsXG4gICAgcHJpdmF0ZSB2aWV3OiBWaWV3U2VydmljZSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgY3JlYXRlKGhvc3Q6IEVsZW1lbnQsIGNvbnRlbnQ6IENvbnRlbnQsIG9wdGlvbnM6IFBhcnRpYWw8Q3JlYXRlT3B0aW9ucz4gPSB7fSk6IFRpcHB5SW5zdGFuY2Uge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIG9uU2hvdzogaW5zdGFuY2UgPT4ge1xuICAgICAgICBpZiAoIWluc3RhbmNlLiR2aWV3T3B0aW9ucykge1xuICAgICAgICAgIGluc3RhbmNlLiR2aWV3T3B0aW9ucyA9IHt9O1xuXG4gICAgICAgICAgaWYgKGlzVGVtcGxhdGVSZWYoY29udGVudCkpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLiR2aWV3T3B0aW9ucy5jb250ZXh0ID0ge1xuICAgICAgICAgICAgICAkaW1wbGljaXQ6IGluc3RhbmNlLmhpZGUuYmluZChpbnN0YW5jZSksXG4gICAgICAgICAgICAgIC4uLm9wdGlvbnMuY29udGV4dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQ29tcG9uZW50KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS4kdmlld09wdGlvbnMuaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFRJUFBZX1JFRiwgdXNlVmFsdWU6IGluc3RhbmNlIH1dLFxuICAgICAgICAgICAgICBwYXJlbnQ6IG9wdGlvbnMuaW5qZWN0b3IgfHwgdGhpcy5pbmplY3RvclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLnZpZXcgPSB0aGlzLnZpZXcuY3JlYXRlVmlldyhjb250ZW50LCB7IC4uLm9wdGlvbnMsIC4uLmluc3RhbmNlLiR2aWV3T3B0aW9ucyB9KTtcbiAgICAgICAgaW5zdGFuY2Uuc2V0Q29udGVudChpbnN0YW5jZS52aWV3LmdldEVsZW1lbnQoKSk7XG4gICAgICAgIG9wdGlvbnM/Lm9uU2hvdz8uKGluc3RhbmNlKTtcbiAgICAgIH0sXG4gICAgICBvbkhpZGRlbjogaW5zdGFuY2UgPT4ge1xuICAgICAgICBpbnN0YW5jZS52aWV3LmRlc3Ryb3koKTtcbiAgICAgICAgb3B0aW9ucz8ub25IaWRkZW4/LihpbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLnZpZXcgPSBudWxsO1xuICAgICAgfSxcbiAgICAgIC4uLm9ubHlUaXBweVByb3BzKHRoaXMuZ2xvYmFsQ29uZmlnKSxcbiAgICAgIC4uLnRoaXMuZ2xvYmFsQ29uZmlnLnZhcmlhdGlvbnNbb3B0aW9ucy52YXJpYXRpb24gfHwgdGhpcy5nbG9iYWxDb25maWcuZGVmYXVsdFZhcmlhdGlvbl0sXG4gICAgICAuLi5vbmx5VGlwcHlQcm9wcyhvcHRpb25zKSxcbiAgICAgIG9uQ3JlYXRlOiBpbnN0YW5jZSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgICAgIGZvciAoY29uc3Qga2xhc3Mgb2Ygbm9ybWFsaXplQ2xhc3NOYW1lKG9wdGlvbnMuY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgaW5zdGFuY2UucG9wcGVyLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbENvbmZpZy5vbkNyZWF0ZT8uKGluc3RhbmNlKTtcbiAgICAgICAgb3B0aW9ucy5vbkNyZWF0ZT8uKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRpcHB5KGhvc3QsIGNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==