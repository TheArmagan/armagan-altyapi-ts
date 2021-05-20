import { Message } from "discord.js";
import { EventBase, IEventArgumentBase, IOnEventArgumentsBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments extends IOnEventArgumentsBase {
    message: Message;
}

export class OnMessageReactionRemoveAll extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("messageReactionRemoveAll", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;

    this.handleEventByArgs = (args, ul)=>{
      return this.onEvent({ message: args[0], ul });
    }
  }
};