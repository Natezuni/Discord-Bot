const Discord = require("discord.js");
const fs = require('fs');


module.exports = {
    logs: function (message) {
        console.log(message.author.username, "||", message.channel.name, "-", message.content);
        let channel = message.channel.name;
        var readmessagefile = fs.readFileSync('./txt-files/logs.txt', 'utf-8');
        var writemessagefile = fs.writeFileSync('./txt-files/logs.txt', 'Time - ' +
        message.createdAt + ' Channel: ' + channel + " ||" + ' User - ' + message.author.username + ': ' +
        message.content + "\n" + readmessagefile);
    }
}
