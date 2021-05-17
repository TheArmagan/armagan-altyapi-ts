import { Message, PermissionString } from "discord.js";
import { Result } from "plsargs/src/Result";
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
    other?: {
        [key: string]: any;
    };
}
interface IOnCommandArgument {
    msg: Message;
    args: Result;
    ul: Underline;
    prefix: string;
    setCoolDown(durationMs: number): any;
    isBotOwner: boolean;
    cooldown: number;
}
export declare class Command {
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
    other: {
        [key: string]: any;
    };
    constructor(args: ICommandClassArguments);
}
export {};
