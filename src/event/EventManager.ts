import { Underline } from "../Underline";
import * as path from "path";
import { EventBase } from "./types/EventBase";
import { Log } from "../other/Log";
const chillout: any = require("chillout");
import * as recursiveReadDir from "recursive-readdir";

export class EventManager {
  ul: Underline;
  events: Map<string, EventBase>;

  constructor(ul: Underline) {
    this.ul = ul;
    this.events = new Map();
  }

  async init() {
    await this.#loadCommands();
    this.#startEventListeners();
  }

  #loadCommands = async () => {
    Log.info(`Starting to load events!`);

    let eventFiles = await recursiveReadDir(path.resolve(__dirname, "events"));

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
      
      Log.success(`Event "${evt.id}" is loaded!`);
    });

    Log.success(`All events(${this.events.size}) successfully loaded!`);
  }

  #startEventListeners = async () => {
    Log.info("Optimizing event listeners!");
    let eventsToListen: Map<string, string[]> = new Map();
    await chillout.forEach(Array.from(this.events.entries()), ([eventId, event]: [string, EventBase]) => {
      if (!eventsToListen.has(event.name)) eventsToListen.set(event.name, []);
      eventsToListen.get(event.name).push(eventId);
    });

    Log.info("Starting to listen for the events!");

    await chillout.forEach(Array.from(eventsToListen.entries()), ([eventName, eventIds]: [string, string[]]) => {
      Log.info(`Event Name: ${eventName}, Listeners(${eventIds.length}): ${eventIds.join(", ")}`);
      this.ul.client.on(eventName, (...args) => {
        chillout.forEach(eventIds, (eventId) => {
          this.handleEvent(eventId, args);
        });
      })
    });

    Log.success("Started to listening for events!");
  }

  handleEvent(eventId: string, args: any[]) {
    let event = this.events.get(eventId);
    if (event.enabled) {
      event.handleEventByArgs(args, this.ul);
    }
  }

}