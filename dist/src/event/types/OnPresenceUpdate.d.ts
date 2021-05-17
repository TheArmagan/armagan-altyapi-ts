import { Presence } from "discord.js";
import { EventBase, IEventArgumentBase } from "./EventBase";
interface IClassArguments extends IEventArgumentBase {
    onEvent(ctx: IOnEventArguments): any;
}
interface IOnEventArguments {
    newPresence: Presence;
    oldPresence?: Presence;
}
export declare class OnPresenceUpdate extends EventBase {
    onEvent: (ctx: IOnEventArguments) => any;
    constructor(args: IClassArguments);
}
export {};
