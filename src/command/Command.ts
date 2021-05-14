import { Message } from "discord.js";
import { Result } from "plsargs/src/Result";
import { Underline } from "../Underline";

interface ICommandClassArguments {
  onCommand(ctx: IOnCommandArgument): any;
  onLoad?(ul: Underline): any;
  nsfw?: boolean;
  cooldown?: number;
  name: string;
  aliases?: string[];
  usages?: string[];
  enabled?: boolean;
  ownerOnly?: boolean;
  botPermissions?: string[];
  userPermissions?: string[];
}

interface IOnCommandArgument {
  msg: Message;
  args: Result;
  ul: Underline;
}

export class Command {

  onCommand: (arg0: IOnCommandArgument) => any;
  onLoad?: (arg0: Underline) => any;
  nsfw?: boolean;
  cooldown?: number;
  name: string;
  aliases?: string[];
  usages?: string[];
  enabled?: boolean;
  ownerOnly?: boolean;
  botPermissions?: string[];
  userPermissions?: string[];
  filePath: string;
  constructor(args: ICommandClassArguments) {
    this.onCommand = args.onCommand;
    this.onLoad = args.onLoad;
    this.nsfw = args.nsfw ?? false;
    this.cooldown = args.cooldown ?? 10;
    this.name = args.name;
    this.aliases = args.aliases ?? [];
    this.usages = args.usages ?? [];
    this.enabled = args.enabled ?? false;
    this.ownerOnly = args.ownerOnly ?? false;
    this.botPermissions = args.botPermissions ?? [];
    this.userPermissions = args.userPermissions ?? [];
  }
}