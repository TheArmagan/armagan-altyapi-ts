"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const chalk = require("chalk");
class Log {
    static log(...args) {
        console.log(chalk.blackBright(`[${(new Date()).toLocaleTimeString()}]`), ...args);
    }
    static info(...args) {
        Log.log(`${chalk.cyan("[")}${chalk.cyanBright("INFO")}${chalk.cyan("]")}`, ...args);
    }
    static warn(...args) {
        Log.log(`${chalk.yellow("[")}${chalk.yellowBright("WARN")}${chalk.yellow("]")}`, ...args);
    }
    static error(...args) {
        Log.log(`${chalk.red("[")}${chalk.redBright("ERROR")}${chalk.red("]")}`, ...args);
    }
    static success(...args) {
        Log.log(`${chalk.green("[")}${chalk.greenBright("SUCCESS")}${chalk.green("]")}`, ...args);
    }
}
exports.Log = Log;
