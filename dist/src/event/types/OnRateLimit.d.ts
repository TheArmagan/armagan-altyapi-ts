import { EventBase, IEventArgumentBase } from "./EventBase";
interface IClassArguments extends IEventArgumentBase {
    onEvent(ctx: IOnEventArguments): any;
}
interface IOnEventArguments {
    rateLimitInfo: {
        timeout: number;
        limit: number;
        method: string;
        path: string;
        route: string;
    };
}
export declare class OnRateLimit extends EventBase {
    onEvent: (ctx: IOnEventArguments) => any;
    constructor(args: IClassArguments);
}
export {};
