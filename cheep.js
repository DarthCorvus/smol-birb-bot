const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  });
  
client.on('message', message => {
  if (message.content === 'Cheep!') {
  message.channel.send('Chirp! ^~^');
    }
  else if (message.content === 'Smol Birb, what are you?') {
  message.reply("oh haiiiii!!! I'm just a smol birb, silly :hatching_chick: Don't mind me ^~^ Cheep!");
    }
  else if (message.content === 'Smol Birb, how flexible are you?') {
  message.reply("Well I can't touch my toes, if that's what you mean >.< Oh, and I can't respond to anything that isn't worded juuuust right, so please be specific! Sorry about that!");
    }
  });
  
client.login(process.env.BOT_TOKEN);
