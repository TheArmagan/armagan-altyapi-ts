import { Message, PermissionString } from "discord.js";
import { Underline } from "../../Underline";

interface ICommandClassArguments {
  onCommand(ctx: IOnCommandArgument): any;
  onLoad?(ul: Underline): any;
  nsfw?: boolean;
  name: string;
  aliases?: string[];
  enabled?: boolean;
  botOwnerOnly?: boolean;
  guildOwnerOnly?: boolean;
  requiredBotPermissions?: PermissionString[];
  requiredUserPermissions?: PermissionString[];
  other?: {[key: string]: any};
}

interface IOnCommandArgument {
  msg: Message;
  args: string[];
  ul: Underline;
  prefix: string;
  setCoolDown(durationMs: number): any;
  isBotOwner: boolean;
  cooldown: number;
}

export class Command {

  onCommand: (arg0: IOnCommandArgument) => any;
  onLoad?: (arg0: Underline) => any;
  nsfw?: boolean;
  name: string;
  aliases?: string[];
  enabled?: boolean;
  botOwnerOnly?: boolean;
  guildOwnerOnly?: boolean;
  requiredBotPermissions?: PermissionString[];
  requiredUserPermissions?: PermissionString[];
  filePath: string;
  other: {[key: string]: any} = {};
  constructor(args: ICommandClassArguments) {
    this.onCommand = args.onCommand;
    this.onLoad = args.onLoad;
    this.nsfw = args.nsfw ?? false;
    this.name = args.name;
    this.aliases = args.aliases ?? [];
    this.enabled = args.enabled ?? true;
    this.botOwnerOnly = args.botOwnerOnly ?? false;
    this.guildOwnerOnly = args.guildOwnerOnly ?? false;
    this.requiredBotPermissions = args.requiredBotPermissions ?? [];
    this.requiredUserPermissions = args.requiredUserPermissions ?? [];
    this.other = args.other ?? {};
  }
}