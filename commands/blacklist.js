const Discord = require('discord.js');
const client = new Discord.Client();
var forbiddenWords = ["test1", "test2", "test3"];

module.exports = {
    blacklist: function (message) {
        for (var i = 0; i < forbiddenWords.length; i++) {
            if (message.content.toLowerCase().includes(forbiddenWords[i])) {
                message.delete({ timeout: 0 })
                    .then(msg => console.log("\x1b[31m", `Deleted message from ${msg.author.username} after 0 seconds || forbbiden word \n Word: ${message.content}`))
                    .catch(console.error);
                message.channel.send(message.author.username + " Please don't say that");
                break;
            }
        }
    }
}









