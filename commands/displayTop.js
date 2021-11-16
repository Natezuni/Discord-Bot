const Discord = require("discord.js")
const client = new Discord.Client();
var guild = client.guilds.cache.get('xxx');
const fs = require('fs');

module.exports = {
    top: function (message) {
        var readmessagefile = fs.readFileSync('./txt-files/top.txt', 'utf-8');
        let words = readmessagefile.match(/\w+/g)
        let occurances = {};
        for (let word of words) {
            if (occurances[word]) {
                occurances[word]++;
            } else {
                occurances[word] = 1;
            }
        }
        let max = 0;
        let mostRepeatedWord = '';

        for (let word of words) {
            if (occurances[word] > max) {
                max = occurances[word];
                mostRepeatedWord = word;
            }
        };
        let topID = mostRepeatedWord;
        
        console.log(occurances);
        message.channel.send('So far, the most active user is: <@!' + topID + '>');
        
       
    }
}
