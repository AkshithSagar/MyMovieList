import { Observable } from 'rxjs';
import { CypressBuilderOptions } from './cypressBuilderOptions';
export declare function startDevServer(devServerTarget: string, watch: boolean, context: any): Observable<string>;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<CypressBuilderOptions & import("@angular-devkit/core").JsonObject>;
export default _default;
