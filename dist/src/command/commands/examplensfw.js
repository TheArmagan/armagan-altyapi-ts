const { Command } = require("../Command");
module.exports = new Command({
    name: "examplensfw",
    nsfw: true,
    onCommand(ctx) {
        console.log(ctx);
        ctx.msg.reply(`Example! NSFW`);
    }
});
