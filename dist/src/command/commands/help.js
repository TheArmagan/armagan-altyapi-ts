const { Command } = require("../types/Command");
module.exports = new Command({
    name: "help",
    aliases: [
        "h", "yardım", "yardim", "y"
    ],
    onCommand({ msg, ul, prefix }) {
        msg.channel.send(Array.from(ul.cm.commands.values()).map(cmd => {
            return `> - \`${prefix}${cmd.name}\` *- ${cmd.other.description || "There is no description defined for this command!"}*`;
        }).join("\n"));
    },
    other: {
        description: "Shows this menu!"
    }
});
