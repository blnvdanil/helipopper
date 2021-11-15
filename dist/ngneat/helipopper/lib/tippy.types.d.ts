import { Instance, Props } from 'tippy.js';
import { ElementRef, InjectionToken } from '@angular/core';
import { ViewOptions } from '@ngneat/overview';
export interface CreateOptions extends Partial<TippyProps>, ViewOptions {
    variation: string;
    className: string | string[];
}
export declare type NgChanges<Component extends object, Props = ExcludeFunctions<Component>> = {
    [Key in keyof Props]: {
        previousValue: Props[Key];
        currentValue: Props[Key];
        firstChange: boolean;
        isFirstChange(): boolean;
    };
};
declare type MarkFunctionPropertyNames<Component> = {
    [Key in keyof Component]: Component[Key] extends Function ? never : Key;
}[keyof Component];
declare type ExcludeFunctions<T extends object> = Pick<T, MarkFunctionPropertyNames<T>>;
export declare const TIPPY_CONFIG: InjectionToken<Partial<TippyConfig>>;
export declare const TIPPY_REF: InjectionToken<unknown>;
export declare type TippyInstance = Instance;
export declare type TippyProps = Props;
export interface TippyConfig extends TippyProps {
    variations: Record<string, Partial<TippyProps>>;
    defaultVariation: keyof TippyConfig['variations'];
    beforeRender?: (text: string) => string;
}
export declare function coerceElement(element: TippyElement): any;
export declare type TippyElement = ElementRef | Element;
export {};
//# sourceMappingURL=tippy.types.d.ts.map