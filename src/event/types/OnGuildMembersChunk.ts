import { Collection, Guild, GuildMember, Snowflake } from "discord.js";
import { EventBase, IEventArgumentBase, IOnEventArgumentsBase } from "./EventBase";


interface IClassArguments extends IEventArgumentBase {
  onEvent(ctx: IOnEventArguments): any;
}

interface IOnEventArguments extends IOnEventArgumentsBase {
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

    this.handleEventByArgs = (args, ul)=>{
      return this.onEvent({ guild: args[0], members: args[1], chunk: args[2], ul });
    }
  }
};