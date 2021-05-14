import {Client, ClientOptions} from "discord.js"
import { CommandManager } from "./command/CommandManager";
import { EventManager } from "./event/EventManager";

export interface IUnderlineOptions {
  token: string;
  prefixes: string[];
  owners?: string[];
  listenForEdits?: boolean;
}

export class Underline {

  client: Client;
  options: IUnderlineOptions = {
    token: "",
    prefixes: [],
    owners: [],
    listenForEdits: false
  };
  cm: CommandManager;
  em: EventManager;

  constructor(underlineOptions: IUnderlineOptions, clientOptions: ClientOptions) {
    if (typeof underlineOptions.token != "string") throw new TypeError("Token must be a string");
    if (!(Array.isArray(underlineOptions.prefixes) && underlineOptions.prefixes.length != 0)) throw new TypeError("Prefixes must be a array and prefixes array should be a minimum length of 1");
    this.options = {
      token: underlineOptions.token,
      prefixes: underlineOptions.prefixes,
      owners: underlineOptions.owners ?? [],
      listenForEdits: underlineOptions.listenForEdits ?? false
    };
    this.client = new Client(clientOptions);
    this.cm = new CommandManager(this);
    this.em = new EventManager(this);
  }

  async init() {
    await this.cm.init();
    await this.em.init();
  }
}
