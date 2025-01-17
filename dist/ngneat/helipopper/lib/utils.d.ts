import { Observable } from 'rxjs';
import { TippyElement } from './tippy.types';
export declare function inView(host: TippyElement, options?: IntersectionObserverInit): Observable<unknown>;
export declare function overflowChanges(host: TippyElement): Observable<boolean>;
export declare function dimensionsChanges(target: HTMLElement): Observable<boolean>;
export declare function onlyTippyProps(allProps: any): {};
export declare function normalizeClassName(className: string | string[]): string[];
//# sourceMappingURL=utils.d.ts.map