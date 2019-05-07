const Discord = require('discord.js')
const client = new Discord.Client()
var request = require('request');

client.on('ready', () => {
  console.log(`Logged in as: ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'Mugsy Brew!') {
    //todo# get key from cloud control! 
    request('https://cloud.heymugsy.com/sys/userInt/listener.php?key=MUSGY_KEY_HERE', function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      //msg.reply is sent to discord channel by the bot!
      msg.reply(body);
    });

  }
})
client.login('DISCORD_KEY_HERE')
