import { MessageReaction } from "discord.js";
import { EventBase, IEventArgumentBase, IOnEventArgumentsBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments extends IOnEventArgumentsBase {
    reaction: MessageReaction;
}

export class OnMessageReactionRemoveEmoji extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("messageReactionRemoveEmoji", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;

    this.handleEventByArgs = (args, ul)=>{
      return this.onEvent({ reaction: args[0], ul });
    }
  }
};