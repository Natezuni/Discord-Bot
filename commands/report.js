const { Message } = require("discord.js")
const fs = require('fs');

module.exports = {
   report: function(message) {
    var msg = message.content.substr(">report".length);
    var readmessagefile = fs.readFileSync('./txt-files/reports.txt', 'utf-8');
    var writemessagefile = fs.writeFileSync('./txt-files/reports.txt', 'Time - ' +
        message.createdAt + ' User - ' + message.member.user.username + '|| Report:' + msg + "\n" + readmessagefile);
    message.delete({ timeout: 0 })
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 0 seconds || report`))
        .catch(console.error);
    message.channel.send('Your report has been sent, we will look into it shortly.');
   }
}
