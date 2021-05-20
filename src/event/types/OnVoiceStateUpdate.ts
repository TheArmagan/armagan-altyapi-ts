import { VoiceState } from "discord.js";
import { EventBase, IEventArgumentBase, IOnEventArgumentsBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments extends IOnEventArgumentsBase {
  newState: VoiceState;
  oldState: VoiceState;
}


export class OnVoiceStateUpdate extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("voiceStateUpdate", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;

    this.handleEventByArgs = (args, ul)=>{
      return this.onEvent({ oldState: args[0], newState: args[1], ul });
    }
  }
};