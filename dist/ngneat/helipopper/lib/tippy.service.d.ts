import { Injector } from '@angular/core';
import { ViewService } from '@ngneat/overview';
import { Content } from '@ngneat/overview';
import { CreateOptions, TippyConfig, TippyInstance } from './tippy.types';
export declare class TippyService {
    private globalConfig;
    private view;
    private injector;
    constructor(globalConfig: TippyConfig, view: ViewService, injector: Injector);
    create(host: Element, content: Content, options?: Partial<CreateOptions>): TippyInstance;
}
