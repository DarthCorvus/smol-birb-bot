const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  });
  
client.on('message', message => {
  if (message.content === 'Cheep!') {
    message.reply('Chirp! ^~^');
    }
  });
  
client.login("NDE5OTY0NDkxNTI3MDk0Mjc0.DX5rlQ.PY8GusOFMf7t_oGPPkCdywf38fk");
