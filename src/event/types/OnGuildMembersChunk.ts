import { Collection, Guild, GuildMember, Snowflake } from "discord.js";
import { EventBase, IEventArgumentBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments {
  members: Collection<Snowflake, GuildMember>;
  guild: Guild;
  chunk: {index: number, count: number, nonce?: string}
}

export class OnGuildMembersChunk extends EventBase {
  
  onEvent: (ctx: IOnEventArguments) => any;
  
  constructor(args: IClassArguments) {
    super("guildMembersChunk", args.id);

    this.onEvent = args.onEvent;
    this.onLoad = args.onLoad;
    this.enabled = args.enabled ?? true;
  }
};