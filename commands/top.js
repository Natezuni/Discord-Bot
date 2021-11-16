const Discord = require("discord.js");
const fs = require('fs');


module.exports = {
    top: function (message) {
        
        var readmessagefile = fs.readFileSync('./txt-files/top.txt', 'utf-8');
        var writemessagefile = fs.writeFileSync('./txt-files/top.txt', message.author.id + '\n' + readmessagefile);

    }
}
