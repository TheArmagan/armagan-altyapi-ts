import { EventBase, IEventArgumentBase } from "./EventBase";
interface IClassArguments extends IEventArgumentBase {
    onEvent(ctx: IOnEventArguments): any;
}
interface IOnEventArguments {
    id: Number;
    replayedEvents: Number;
}
export declare class OnShardResume extends EventBase {
    onEvent: (ctx: IOnEventArguments) => any;
    constructor(args: IClassArguments);
}
export {};
