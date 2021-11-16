const Discord = require("discord.js");
const fs = require('fs');


module.exports = {
    top: function (message) {
        data = "";
        var readmessagefile = fs.readFileSync('./txt-files/top.txt', 'utf-8');
        var writemessagefile = fs.writeFileSync('./txt-files/top.txt', data);
        message.channel.send('Executed X-1');
    }
}
