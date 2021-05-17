import { User } from "discord.js";
import { EventBase, IEventArgumentBase } from "./EventBase";
interface IClassArguments extends IEventArgumentBase {
    onEvent(ctx: IOnEventArguments): any;
}
interface IOnEventArguments {
    newUser: User;
    oldUser: User;
}
export declare class OnUserUpdate extends EventBase {
    onEvent: (ctx: IOnEventArguments) => any;
    constructor(args: IClassArguments);
}
export {};
