
const { Message } = require("discord.js")
const fs = require('fs');

module.exports = {
    log: function (message) {
        let channel = message.channel.name;
        let warned = message.mentions.members.first().user.username;
        let messageContent = message.content;
        let reason = messageContent.slice(29, messageContent.length);
        console.log(messageContent, reason);
        let Action = messageContent.slice(1, 5);
        var readmessagefile = fs.readFileSync('./txt-files/punishment.txt', 'utf-8');
        let string = `${warned} has been ${Action}ed by ${message.member.user.username} for ${reason}` + "\n";
       
        fs.writeFileSync('./txt-files/punishment.txt', message.createdAt + " || " + string + readmessagefile);
    }
}
