const { Command } = require("../types/Command");

module.exports = new Command({
  name: "timeouttest",
  onCommand(ctx) {
    console.log(ctx);
    ctx.msg.reply(`timeouttest!`);
    ctx.setCoolDown(5000);
  },
  other: {
    description: "This command has 5000 milliseconds of timeout!"
  }
});