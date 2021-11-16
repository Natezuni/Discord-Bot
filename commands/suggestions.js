
const fs = require('fs');
const { Message } = require("discord.js")

module.exports = {
   suggestions: function(message) {
    var msg = message.content.substr(">suggestion".length);
    var readmessagefile = fs.readFileSync('./txt-files/suggestions.txt', 'utf-8');
    var writemessagefile = fs.writeFileSync('./txt-files/suggestions.txt', 'Time - ' +
        message.createdAt + ' User - ' + message.member.user.username + ' || Suggestion:' + msg + "\n" + readmessagefile)
    
    
    message.channel.send('Your suggestion has been sent, we will look into it shortly.');
       
   }
}
