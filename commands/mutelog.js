
const { Message } = require("discord.js")
const fs = require('fs');

module.exports = {
    log: function (message) {
        let channel = message.channel.name;
        let muted = message.mentions.members.first().user.username;
        let messageContent = message.content;
        let reason = messageContent.slice(32, messageContent.length);
        let Action = messageContent.slice(1, 5);
        let time = messageContent.slice(29, 32);
        var readmessagefile = fs.readFileSync('./txt-files/punishment.txt', 'utf-8');
        let string = `${muted} has been ${Action}d by ${message.member.user.username} for ${time} because of ${reason}`;
        let finalString = string.replace(/\s+/g,' ').trim();
       
        fs.writeFileSync('./txt-files/punishment.txt', message.createdAt + " || "+ finalString + "\n" + readmessagefile);
       
    }
}
