import { NgModule } from '@angular/core';
import { TippyDirective } from './tippy.directive';
import { TIPPY_CONFIG } from './tippy.types';
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
TippyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TippyDirective],
                exports: [TippyDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmduZWF0L2hlbGlwb3BwZXIvc3JjL2xpYi90aXBweS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFNMUQsTUFBTSxPQUFPLFdBQVc7SUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUErQixFQUFFO1FBQzlDLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXBweURpcmVjdGl2ZSB9IGZyb20gJy4vdGlwcHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRJUFBZX0NPTkZJRywgVGlwcHlDb25maWcgfSBmcm9tICcuL3RpcHB5LnR5cGVzJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGlwcHlEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbVGlwcHlEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFRpcHB5TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBQYXJ0aWFsPFRpcHB5Q29uZmlnPiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxUaXBweU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGlwcHlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFRJUFBZX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=