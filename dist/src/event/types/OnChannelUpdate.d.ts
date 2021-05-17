import { DMChannel, GuildChannel } from "discord.js";
import { EventBase, IEventArgumentBase } from "./EventBase";
interface IClassArguments extends IEventArgumentBase {
    onEvent(ctx: IOnEventArguments): any;
}
interface IOnEventArguments {
    newChannel: DMChannel | GuildChannel;
    oldChannel: DMChannel | GuildChannel;
}
export declare class OnChannelUpdate extends EventBase {
    onEvent: (ctx: IOnEventArguments) => any;
    constructor(args: IClassArguments);
}
export {};
