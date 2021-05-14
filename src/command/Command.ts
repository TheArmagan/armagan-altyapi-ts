import { Message, PermissionString } from "discord.js";
import { Result } from "plsargs/src/Result";
import { Underline } from "../Underline";

interface ICommandClassArguments {
  onCommand(ctx: IOnCommandArgument): any;
  onLoad?(ul: Underline): any;
  nsfw?: boolean;
  name: string;
  aliases?: string[];
  usages?: string[];
  enabled?: boolean;
  botOwnerOnly?: boolean;
  guildOwnerOnly?: boolean;
  requiredBotPermissions?: PermissionString[];
  requiredUserPermissions?: PermissionString[];
}

interface IOnCommandArgument {
  msg: Message;
  args: Result;
  ul: Underline;
  prefix: string;
  setCoolDown(durationMs: number): any;
  isBotOwner: boolean;
}

export class Command {

  onCommand: (arg0: IOnCommandArgument) => any;
  onLoad?: (arg0: Underline) => any;
  nsfw?: boolean;
  name: string;
  aliases?: string[];
  usages?: string[];
  enabled?: boolean;
  botOwnerOnly?: boolean;
  guildOwnerOnly?: boolean;
  requiredBotPermissions?: PermissionString[];
  requiredUserPermissions?: PermissionString[];
  filePath: string;
  constructor(args: ICommandClassArguments) {
    this.onCommand = args.onCommand;
    this.onLoad = args.onLoad;
    this.nsfw = args.nsfw ?? false;
    this.name = args.name;
    this.aliases = args.aliases ?? [];
    this.usages = args.usages ?? [];
    this.enabled = args.enabled ?? true;
    this.botOwnerOnly = args.botOwnerOnly ?? false;
    this.guildOwnerOnly = args.guildOwnerOnly ?? false;
    this.requiredBotPermissions = args.requiredBotPermissions ?? [];
    this.requiredUserPermissions = args.requiredUserPermissions ?? [];
  }
}