const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  });
  
client.on('message', message => {
  if (message.content === 'Cheep!' || 'cheep!' || 'cheep' || 'Cheep') {
    message.reply('Chirp! ^~^');
    }
  });
  
client.login(process.env.BOT_TOKEN);
