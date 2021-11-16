const Discord = require("discord.js");
const fs = require('fs');


module.exports = {
    scammer: function (message) {
        
        console.log(message.author.username, "||", message.channel.name, "-", message.content);
        var readmessagefile = fs.readFileSync('./txt-files/scammer.txt', 'utf-8');
        var writemessagefile = fs.writeFileSync('./txt-files/scammer.txt', 'Scammer: ' +
        message.content.slice(13, message.content.length) + ' - Reported By: ' + message.author.username + "\n" + readmessagefile);
        message.channel.send('Thanks You! The scammer has been added to the list!');
    }
}
