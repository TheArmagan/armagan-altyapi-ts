import { Underline } from "../Underline";
import { readdir } from "fs/promises";
import * as path from "path";
import { Command } from "./types/Command";
import { Message, TextChannel } from "discord.js";
const chillout: any = require("chillout");
import { plsParseArgs } from "plsargs";


export class CommandManager {

  ul: Underline;

  commands: Map<string, Command>;
  timeoutCache: Map<string, number>;

  constructor(ul: Underline) {
    this.ul = ul;
    this.commands = new Map();
    this.timeoutCache = new Map();
  }

  async init() {
    await this.#loadCommands();
    this.#startMessageListener();
  }

  #loadCommands = async () => {
    console.log(`Starting to load commands!`);

    let commandFiles = await readdir(path.resolve(__dirname, "commands"));
    commandFiles = commandFiles.filter(i => i.toLowerCase().endsWith(".js"));
    await chillout.forEach(commandFiles, async (commandFile: string) => {
      let commandFilePath = path.resolve(__dirname, "commands", commandFile);
      let cmd: Command = require(commandFilePath);
      cmd.filePath = commandFilePath;
      if (this.commands.has(cmd.name)) {
        let ogCmd = this.commands.get(cmd.name);
        throw new Error(`A command already loaded with name "${cmd.name}". (${path.parse(ogCmd.filePath).base}, ${path.parse(commandFilePath).base})`);
      }
      if (typeof cmd.onCommand != "function") throw new TypeError(`Every command should have onCommand function. (NAME: ${cmd.name})`);

      cmd.aliases.unshift(cmd.name);

      this.commands.set(cmd.name, cmd);

      if (typeof cmd.onLoad == "function") await cmd.onLoad(this.ul);
      console.log(`Command "${cmd.name}" is loaded!`);
    });

    console.log(`All commands(${this.commands.size}) successfully loaded!`);
  }

  #startMessageListener = () => {
    console.log("Starting to listen for the commands!");

    this.ul.client.on("message", (msg) => {
      this.handleMessage(msg);
    });

    if (this.ul.options.listenForEdits) {
      this.ul.client.on("messageUpdate", (_, newMsg) => {
        this.handleMessage(newMsg as Message);
      })
    }
  }

  handleMessage(msg: Message) {
    let self = this;
    let { prefixes } = this.ul.options;
    let isBotOwner = this.ul.options.owners.some(i => i == msg.author.id);

    let isCommandFound = false;
    this.commands.forEach(async (cmd: Command) => {
      if (isCommandFound) return;
      let args = plsParseArgs(msg.content);

      if (!cmd.enabled) return;

      let usedPrefix = "";
      await chillout.forEach(prefixes, i => {
        let prefix = args._[0].slice(0, i.length);
        if (prefix == i) usedPrefix = i;
        return prefix == i;
      });

      if (usedPrefix.length == 0) return;
      args._[0] = args._[0].slice(usedPrefix.length);
      if (args._[0].length == 0) args._.shift();

      if (!cmd.aliases.some(i => args._[0].toLowerCase() == i.toLowerCase())) return;

      isCommandFound = true;

      if (cmd.botOwnerOnly && !isBotOwner) {
        return this.ul.options.messages.botOwnerOnlyMessage(msg);
      }

      if (cmd.guildOwnerOnly && (msg.member.id == msg.guild.ownerID)) {
        return this.ul.options.messages.botOwnerOnlyMessage(msg);
      }

      if (cmd.nsfw && !(msg.channel as TextChannel)?.nsfw) {
        return this.ul.options.messages.nsfwRequiredMessage(msg);
      }

      if (cmd.requiredBotPermissions.length != 0 && cmd.requiredBotPermissions.some(i=>!msg.guild.me.hasPermission(i, {checkAdmin: true, checkOwner: true}))) {
        return this.ul.options.messages.botPermissionsRequiredMessage(msg, cmd.requiredBotPermissions);
      }

      if (cmd.requiredUserPermissions.length != 0 && cmd.requiredUserPermissions.some(i=>!msg.member.hasPermission(i, {checkAdmin: true, checkOwner: true}))) {
        return this.ul.options.messages.userPermissionsRequiredMessage(msg, cmd.requiredUserPermissions);
      }

      let coolDownAt = (self.timeoutCache.get(`${msg.author.id}:${cmd.name}`) || 0);
      let coolDownDuration = coolDownAt - Date.now();
      if (!(Date.now() > coolDownAt)) {
        return this.ul.options.messages.cooldownMessage(msg, coolDownDuration);
      }

      cmd.onCommand({ args, msg, ul: this.ul, prefix: usedPrefix, isBotOwner, cooldown: coolDownDuration, setCoolDown(durationMs=0) {
        self.timeoutCache.set(`${msg.author.id}:${cmd.name}`, Date.now() + durationMs);
        return true;
      } });

    })
  }
}