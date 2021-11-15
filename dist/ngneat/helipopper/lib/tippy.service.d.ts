import { Injector } from '@angular/core';
import { ViewService } from '@ngneat/overview';
import { Content } from '@ngneat/overview';
import { CreateOptions, TippyConfig, TippyInstance } from './tippy.types';
import * as i0 from "@angular/core";
export declare class TippyService {
    private globalConfig;
    private view;
    private injector;
    constructor(globalConfig: TippyConfig, view: ViewService, injector: Injector);
    create(host: Element, content: Content, options?: Partial<CreateOptions>): TippyInstance;
    static ɵfac: i0.ɵɵFactoryDeclaration<TippyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TippyService>;
}
//# sourceMappingURL=tippy.service.d.ts.map