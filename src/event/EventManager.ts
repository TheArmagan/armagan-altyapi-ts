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
    
  }

}