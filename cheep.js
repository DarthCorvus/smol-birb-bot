const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = "Hey Birb ";

client.on('ready', () => {
  console.log('I am ready!');
  });
  
client.on('message', message => {
  
  if (message.author.equals(bot.user)) return;
  
  if (!message.content.startsWith(Prefix)) return;
  
  var (args) = message.content.substring(Prefix.length).split(" ");  
  switch (args[0].toLowerCase()) {
    case "cheep!":
        message.channel.sendMessage("Chirp! ^~^");
        break;
    case "info":
        message.channel.sendMessage("Oh haiiiii!!! I'm Smol Birb, your local chirper and cheeper! I can't do much right now, but Corvus and I are hard at work trying to fix that! If you have any suggestions, please keep them to yourself! xD Lol jk we would love to hear your input. Feel free to DM @DarthCorvus#7351 with any suggestions for making me better. Thanks! ^~^");
        break;
  }
  
});
  
client.login(process.env.BOT_TOKEN);
