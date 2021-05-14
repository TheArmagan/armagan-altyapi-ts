import { Underline } from "../Underline";
import { readdir } from "fs/promises";
import { resolve } from "path";
import { Command } from "./Command";
import { Message } from "discord.js";
import { plsParse } from "plsargs";
const chillout: any = require("chillout");

export class CommandManager {

  ul: Underline;

  commands: Map<string, Command>;

  constructor(ul: Underline) {
    this.ul = ul;
    this.commands = new Map();
  }

  async init() {
    await this.#loadCommands();
    this.#startMessageListener();
  }

  #loadCommands = async () => {
    console.log(`Starting to load commands!`);

    let commandFiles = await readdir(resolve(__dirname, "commands"));
    commandFiles = commandFiles.filter(i => i.toLowerCase().endsWith(".js"));
    await chillout.forEach(commandFiles, async (commandFile: string) => {
      let commandFilePath = resolve(__dirname, "commands", commandFile);
      let cmd: Command = require(commandFilePath);
      cmd.filePath = commandFilePath;
      if (this.commands.has(cmd.name)) {
        let ogCmd = this.commands.get(cmd.name);
        throw new Error(`An command already loaded with name "${cmd.name}". (${ogCmd.filePath}, ${commandFilePath})`);
      }
      if (typeof cmd.onCommand != "function") throw new TypeError(`Every command should have onCommand function. (${cmd.name})`);
      this.commands.set(cmd.name, cmd);
      if (typeof cmd.onLoad == "function") await cmd.onLoad(this.ul);
      console.log(`Command "${cmd.name}" is loaded!`);
    });

    console.log(`All commands(${this.commands.size}) successfully loaded!`);
  }

  #startMessageListener = () => {
    console.log("Starting to listen for the commands!");

    this.ul.client.on("message", this.handleMessage);

    if (this.ul.options.listenForEdits) {
      this.ul.client.on("messageUpdate",(oldMsg, newMsg)=>{
        this.handleMessage(newMsg as Message);
      })
    }
  }

  handleMessage(msg: Message) {
    let args = plsParse(msg.content);
    let { prefixes } = this.ul.options;
  }
}