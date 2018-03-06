const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  });
  
client.on('message', message => {
  if (message.content === 'Cheep!') {
  message.channel.send('Chirp! ^~^');
    }
  else if (message.content === 'Hey Smol Birb! Ready to show the world what you can do now?') {
    message.channel.send('Uh-huh! You betcha, Corvus!');
    }
  else if (message.content === "Great. Let's start.") {
    message.channel.send("Ohboyohboyohboy! I can't wait!");
    }
  else if (message.content === 'Smol Birb, what are you?') {
    message.channel.send('oh haiiiii ${user}!!!'),
    message.channel.send("I'm just a smol birb, silly :hatching_chick: Don't mind me ^~^ Cheep!");
    }
  else if (message.content === 'Smol Birb, how flexible are you?') {
    message.channel.send("Well I can't touch my toes, if that's what you mean  >.<  Oh, and I can't respond to anything that isn't worded juuuust right, so please be specific! Sorry about that!");
    }
  else if (message.content === 'Who am I?') {
    message.channel.send('You silly goose!'),
    message.channel.send('You forgot your own name?'),
    message.channel.send('Your name is ${member}, silly xD');
  }
  });
  
client.login(process.env.BOT_TOKEN);
