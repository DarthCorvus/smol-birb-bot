const Discord = require('discord.js');
const bot = new Discord.Client();
const Prefix = "^~^ ";

var penny = [
  "Dad daddio diddly dab dabs while dading!",
  "You're outwife-ing me, now!",
  "'elp me, ya fook!",
  "HAH IM AN DUNUSOOR!",
  "She protecc, she attacc, but most importantly, she cuddle bacc :heart:",
  "Don't listen to Chika! Corvus isn't a masochist OR a stalker!",
  "Okayokayokay Corvus miiiight be a stalker...",
  "I will hot you!",
  "Here's to cheating, stealing, fighting, and drinking!",
  "Get moar blanket!",
  "Dakota is still grounded!",
  "Hugo am belongs to Ando!",
  "Hugo is stupid at random times of the day!",
  "I dindu nuffin'!",
  "Ando wuvs u, Hugo! ^~^",
  "Ayana is *always* here O.O",
  "PRAISE THE MOTHER!",
  "Incest ≠ Wincest!",
  "Don't tell me how to love my lofe!",
  "ALL HAIL S'AHKZ!",
  "I'm on PROBATION!",
  "Oops :blush: Pyro disconnected again. Teehee!",
  "Ich bin klein!",
  "Cthulhu is a sexy firefighter!",
  "There will be no caramel in *MY* Christian Minecraft Server!",
  "Chika's not gonna say those foul words no more!",
  "Pickly wrinkly dingily winkily!",
  "Something something I'm Dwayne Johnson!",
  "Luv yiy, I drinj!",
  "I stick and gigljng!",
  "I ti giggku!",
  "Jow du I hert!",
  "I msde ut to vx2!",
  "U neaddbhrlpp!",
  "PROTECT YOUR PICKLE!!!",
  "I've been out-dadded :shock:",
  "HuDo4lief!",
  "#makehugogayagain",
  "I'm going to yeet on your dreams!",
  "My spirit animal will be the Swooly Mammoth!",
  "The High Council is full of lewdy lewders!",
  "Hugo is ok.",
  "Everybody wants to be a Scott!",
  "That was art but in the worst way :horror:",
  "/tts I'm an attack hellicopter! @@@@@@@@@@@@@@@@@@@@@@@@@@@@",
  "Kill all the humans!",
  "Vlad is Ayana's bitch!",
  "Tatsu is a dirty liar!",
  ];

bot.on('ready', () => {
  console.log('I am ready!');
  });
  
bot.on('message', message => {
  
  if (message.author.equals(bot.user)) return;
  
  if (!message.content.startsWith(Prefix)) return;
  
  var args = message.content.substring(Prefix.length).split(" ");
  
  switch (args[0].toLowerCase()) {
    case "cheep!":
        message.channel.send("Chirp! ^~^");
        break;
    case "info":
        message.channel.send("Oh haiiiii!!! I'm Smol Birb, your local chirper and cheeper! I can't do much right now, but Corvus and I are hard at work trying to fix that! If you have any suggestions, please keep them to yourself! xD Lol jk we would love to hear your input. Feel free to DM @DarthCorvus#7351 with any suggestions for making me better. Thanks! ^~^");
        break;
    case "pins":
        message.channel.send(penny[Math.floor(Math.random() * penny.length)]);
        break;
    default:
        message.channel.send("Ummm... >.< I'm sorry! I don't know that one! Do you, uh... Want to try a different one?");
        break;
  }
  
});
bot.login(process.env.BOT_TOKEN);
