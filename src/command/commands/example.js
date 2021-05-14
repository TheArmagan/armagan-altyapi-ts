const { Command } = require("../Command");

module.exports = new Command({
  name: "example",
  onCommand({msg}) {
    msg.reply("Hello!");
  }
});