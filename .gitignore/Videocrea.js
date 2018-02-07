const Discord = require("discord.js");
const bot = new Discord.Client()
const game = "/help"
mention = "<@410467451084472331>"
token = "NDEwNDY3NDUxMDg0NDcyMzMx.DVtlNg.DDM_O2mXoo1mfxBBBIyjmmKYlPQ"
var basefooter = "VidéoCrea', bot 2018"
var prefix = "/"

bot.on('ready', function () {
  console.log("Je suis connecté !")
  bot.user.setGame(game).catch(console.error)
})

bot.login(token)

 bot.on('message', message => {

  if (message.content.startsWith(prefix + "ping")) {
       message.channel.sendMessage("Pong !")
     }
  })
  bot.on('message', message => {
	if (message.content === "/avatar") {
		message.channel.send(message.author.avatarURL)
	}
})

bot.on('message', message => {
	if (message.content.startsWith("/say")) {
		let args = message.content.substr("4");
		message.delete();
		message.channel.send(args)
	}
})

bot.on('message', message => {
	if (message.content.startsWith("/annonce")) {
		      let myrole = message.guild.member(bot.user).hasPermission("ADMINISTRATOR");
		      let yourole = message.guild.member(message.author).hasPermission("ADMINISTRATOR");
      if(!myrole){
          return message.channel.send("*?Je n'ai pas la permission pour faire cela?*");
      }
      if(!yourole){
          return message.channel.send("*?Vous n'avez pas la permission pour faire cela?*");
      }
      if(yourole) {
	let annonce = message.content.substr("8")
	message.delete()
	message.channel.send("**[@everyone] " + annonce + "**")
     }
   }
})

bot.on('message', message => {
	if (message.content.startsWith("/help")) {
		var VCHELP = new Discord.RichEmbed()
			.setColor("#00FE88")
			.addField("Salut ! Je suis le bot de VidéoCrea' !", "_ _")
			.addField("Menu d'aide", "_ _")
			.addField("Administration :hammer_pick:", "_ _")
			.addField("/annonce", "envoie le message avec un everyone, ton message sera automatiquement en gras ([/ATTENTION\] Requis : la permission ADMINISTRATEUR !)")
			.addField("_ _", "_ _")
			.addField("Pratiques :mouse_three_button: <-- (sans ça, tu ne peux pas utiliser ton ordinateur.)", "_ _")
			.addField("/avatar", "Vous envoie le lien de votre avatar")
			.addField("/say", "Le bot dit le message a votre place.")
			.addField("/ping", "Pong")
			.setFooter(basefooter)
		message.author.sendEmbed(VCHELP)
	}
})

bot.on('message', message => {
	if (message.content.startsWith("/hhelp")) {
		var VCHELP = new Discord.RichEmbed()
			.setColor("#00FE88")
			.addField("Salut " + message.author.username + " ! Je suis le bot de VidéoCrea' !", "_ _")
			.addField("Menu d'aide", "_ _")
			.addField("Administration :hammer_pick:", "_ _")
			.addField("/annonce", "envoie le message avec un everyone, ton message sera automatiquement en gras ([/ATTENTION\] Requis : la permission ADMINISTRATEUR !)")
			.addField("_ _", "_ _")
			.addField("Pratiques :mouse_three_button: <-- (sans ça, tu ne peux pas utiliser ton ordinateur.)", "_ _")
			.addField("/avatar", "Vous envoie le lien de votre avatar")
			.addField("/say", "Le bot dit le message a votre place.")
			.addField("/ping", "Pong ")
			.setFooter(basefooter)
		message.channel.sendEmbed(VCHELP)
	}
})

   bot.on('message', message => {

    if (message.content.startsWith(prefix + "stats")) {
    message.channel.send("", {
                embed: {
                    color: 0xa1ceff,
                    author:  message.author.name,
    
                    title: 'Statistiques du bot \n ',
                    description: '',
                    fields: [
                        {
                            name: '**Salons au total**',
                            value: bot.channels.size,
                            inline: true
        }, {
                            name: '**Nombre d\'utilisateurs**',
                            value: bot.users.size,
                            inline: true
        }, {
                            name: '**Nombre de serveurs**',
                            value: bot.guilds.size,
                            inline: true
        }, {
                          name: '**Créateur**',
                            value: "Mister_KoRo#0912",
                            inline: true
        }, {
                            name: '**ID**',
                            value: message.guild.id   ,
                            inline: true
                    }],
                                                             thumbnail: {
          url: bot.user.avatarURL
            },
    
                                       footer: {
    
                text: '©GlacialBot',
              },
              author: {
                name: message.author.username,
                icon_url: message.author.avatarURL,
                proxy_icon_url: bot.user.avatarURL
              },
                }
            });
        };
    });

 bot.on('message', message => {

if (message.content.startsWith(prefix + "serverinfo")) {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
const data = bot.guilds.get(message.guild.id);

message.channel.send("", {
          embed: {
              color: 0xa1ceff,
              author:  message.author.name,

              title: 'Info sur le serveur \n ',
              description: '',
              fields: [
                  {
                      name: '**Nom**',
                      value: message.guild.name,
                      inline: true
  },{
                      name: '**Region**',
                      value: message.guild.region  ,
                      inline: true
  }, {
                      name: '**ID**',
                      value: message.guild.id   ,
                      inline: true
  }, {
    name: '**Owner**',
    value: message.guild.owner.user.tag ,
    inline: false
}, {
    name: '**Nombre d\'utilisateurs au total**',
    value: message.guild.memberCount,
    inline: false
},{
   name: '**Nombre de bot**',
   value: message.guild.members.filter(member => member.user.bot).size,
   inline: true
},{
                      name: '**Channels**',
                      value: message.guild.channels.filter(chan => chan.type === 'voice').size+ " voice / " +message.guild.channels.filter(chan => chan.type === 'text').size +" text", 
                      inline: false
  },{
                      name: '**Prefix**',
                      value: prefix   ,
                      inline: true
  },{
                      name: '**émoji liste**',
                      value:"Voici les "+ message.guild.emojis.size +" emojis du serveur \n" +message.guild.emojis.map(e=>e.toString()).join(" "),
                      inline: false
},{
                      name: '**Roles**',
                      value: message.guild.roles.size,
                      inline: false
}],
           

   footer: {

          proxy_icon_url: bot.user.avatarURL
        },
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL,
          proxy_icon_url: ' '
        },
          }
      });
  };
 });
