const { Command } = require("../Command");

module.exports = new Command({
  name: "nsfwtest",
  nsfw: true,
  onCommand(ctx) {
    console.log(ctx);
    ctx.msg.reply(`nsfwtest!`);
  },
  other: {
    description: "This command only works in NSFW channels!"
  }
});