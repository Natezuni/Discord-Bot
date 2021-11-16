const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');


module.exports = {
    watcher: function (message) {
        let watch = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'];
        if (message.content.includes(watch)) {
            var readmessagefile = fs.readFileSync('./txt-files/Watcher.txt', 'utf-8');
            var writemessagefile = fs.writeFileSync('./txt-files/Watcher.txt', `${message.author.id}: ${message.content}` + readmessagefile);
        } 
    }
}
