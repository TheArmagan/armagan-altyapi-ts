import { DMChannel, GuildChannel } from "discord.js";
import { EventBase, IEventArgumentBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments {
  channel: DMChannel | GuildChannel;
}


export class OnChannelCreate extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("channelCreate", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;
  }
};