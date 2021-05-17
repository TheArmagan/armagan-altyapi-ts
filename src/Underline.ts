import {Client, ClientOptions, Message, PermissionString} from "discord.js"
import { CommandManager } from "./command/CommandManager";
import { EventManager } from "./event/EventManager";
import { DefaultMessages } from "./other/DefaultMessages";

export interface IUnderlineOptions {
  token: string;
  prefixes: string[];
  owners?: string[];
  listenForEdits?: boolean;
  messages?: IUnderlineMessages;
  other?: { [key: string]: any };
}

export interface IUnderlineMessages {
  cooldownMessage?(msg: Message, cooldown: number): any;
  nsfwRequiredMessage?(msg: Message): any;
  botOwnerOnlyMessage?(msg: Message): any;
  guildOwnerOnlyMessage?(msg: Message): any;
  botPermissionsRequiredMessage?(msg: Message, perms: PermissionString[])
  userPermissionsRequiredMessage?(msg: Message, perms: PermissionString[])
}

export class Underline {

  client: Client;
  options: IUnderlineOptions;
  cm: CommandManager;
  em: EventManager;

  constructor(underlineOptions: IUnderlineOptions, clientOptions: ClientOptions = {}) {
    if (typeof underlineOptions.token != "string") throw new TypeError("Token must be a string");
    if (!(Array.isArray(underlineOptions.prefixes) && underlineOptions.prefixes.length != 0)) throw new TypeError("Prefixes must be a array and prefixes array should be a minimum length of 1");
    this.options = {
      token: underlineOptions.token,
      prefixes: underlineOptions.prefixes,
      owners: underlineOptions.owners ?? [],
      listenForEdits: underlineOptions.listenForEdits ?? false,
      messages: {
        cooldownMessage:
          underlineOptions?.messages?.cooldownMessage
          ?? DefaultMessages.cooldownMessage,
        
        nsfwRequiredMessage:
          underlineOptions?.messages?.nsfwRequiredMessage 
          ?? DefaultMessages.nsfwRequiredMessage,
        
        botOwnerOnlyMessage:
          underlineOptions?.messages?.botOwnerOnlyMessage 
          ?? DefaultMessages.botOwnerOnlyMessage,
        
        guildOwnerOnlyMessage:
          underlineOptions?.messages?.guildOwnerOnlyMessage 
          ?? DefaultMessages.guildOwnerOnlyMessage,
        
        botPermissionsRequiredMessage:
          underlineOptions?.messages?.botPermissionsRequiredMessage
          ?? DefaultMessages.botPermissionsRequiredMessage,
        
        userPermissionsRequiredMessage:
          underlineOptions?.messages?.userPermissionsRequiredMessage
          ?? DefaultMessages.userPermissionsRequiredMessage,
      },
      other: underlineOptions.other ?? {}
    };
    this.client = new Client(clientOptions);
    this.cm = new CommandManager(this);
    this.em = new EventManager(this);
  }

  async init() {
    console.log(`Initializing!`);
    await this.cm.init();
    console.log(`Command manager initialized!`);
    await this.em.init();
    console.log(`Event manager initialized!`);
    await this.client.login(this.options.token);
    console.log(`Connected to discord. (User "${this.client.user.tag}")`);
  }
}

