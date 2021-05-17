import { GuildEmoji } from "discord.js";
import { EventBase, IEventArgumentBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments {
  emoji: GuildEmoji;
}


export class OnEmojiDelete extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("emojiDelete", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;
  }
};