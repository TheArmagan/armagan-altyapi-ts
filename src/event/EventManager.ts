import { Underline } from "../Underline";
import { readdir } from "fs/promises";
import * as path from "path";
import { EventBase } from "./types/EventBase";
const chillout: any = require("chillout");

export class EventManager {
  ul: Underline;
  events: Map<string, EventBase>;

  constructor(ul: Underline) {
    this.ul = ul;
  }

  async init() {
    await this.#loadCommands();
    this.#startEventListeners();
  }

  #loadCommands = async () => {
    console.log(`Starting to load events!`);

    let eventFiles = await readdir(path.resolve(__dirname, "events"));
    eventFiles = eventFiles.filter(i => i.toLowerCase().endsWith(".js"));
    await chillout.forEach(eventFiles, async (eventFile: string) => {

      let eventFilePath = path.resolve(__dirname, "events", eventFile);

      let evt: EventBase = require(eventFilePath);
      evt.filePath = eventFilePath;

      if (this.events.has(evt.id)) {
        let ogEvt = this.events.get(evt.id);
        throw new Error(`A event already loaded with id "${evt.id}". (${path.parse(ogEvt.filePath).base}, ${path.parse(eventFilePath).base})`);
      }

      if (typeof evt.onEvent != "function") throw new TypeError(`Every event should have onEvent function. (ID: ${evt.id})`);
      
      this.events.set(evt.id, evt);

      if (typeof evt.onLoad == "function") await evt.onLoad(this.ul);
      
      console.log(`Event "${evt.id}" is loaded!`);
    });

    console.log(`All events(${this.events.size}) successfully loaded!`);
  }

  #startEventListeners = () => {
    console.log("Starting to listen for the events!");

    this.events.forEach((event, eventId) => {
      this.ul.client.on(event.name, (...args) => {
        this.handleEvent(eventId, args);
      });
    });
    
  }

  handleEvent(eventId: string, args: any[]) {
    this.events.get(eventId).onEvent(args);
  }

}