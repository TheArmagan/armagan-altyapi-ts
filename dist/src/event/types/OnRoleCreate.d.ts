import { Role } from "discord.js";
import { EventBase, IEventArgumentBase } from "./EventBase";
interface IClassArguments extends IEventArgumentBase {
    onEvent(ctx: IOnEventArguments): any;
}
interface IOnEventArguments {
    role: Role;
}
export declare class OnRoleCreate extends EventBase {
    onEvent: (ctx: IOnEventArguments) => any;
    constructor(args: IClassArguments);
}
export {};
