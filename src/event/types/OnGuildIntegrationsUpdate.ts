import { Guild } from "discord.js";
import { EventBase, IEventArgumentBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments {
  guild: Guild;
}


export class OnGuildIntegrationsUpdate extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("guildIntegrationsUpdate", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;

    this.handleEventByArgs = (args)=>{
      return this.onEvent({ guild: args[0] });
    }
  }
};