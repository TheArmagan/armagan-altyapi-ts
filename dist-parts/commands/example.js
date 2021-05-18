
const { Command } = require("../../src/command/types/Command");

module.exports = new Command({
  name: "example",
  onCommand(ctx) {
    ctx.msg.reply(`Example!`);
  }
});