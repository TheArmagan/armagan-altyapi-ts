import { Guild } from "discord.js";
import { EventBase, IEventArgumentBase, IOnEventArgumentsBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments extends IOnEventArgumentsBase {
  guild: Guild;
}


export class OnGuildDelete extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("guildDelete", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;

    this.handleEventByArgs = (args, ul)=>{
      return this.onEvent({ guild: args[0], ul });
    }
  }
};