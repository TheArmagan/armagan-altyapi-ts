import { EventBase, IEventArgumentBase } from "./EventBase";
interface IClassArguments extends IEventArgumentBase {
    onEvent(ctx: IOnEventArguments): any;
}
interface IOnEventArguments {
}
export declare class OnReady extends EventBase {
    onEvent: (ctx: IOnEventArguments) => any;
    constructor(args: IClassArguments);
}
export {};
