// 1

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let prefix = "."

// 2 - Token

client.login(process.env.TOKEN);

// 3 - HELPIG

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "helpig") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande")

    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ PRIMELIFE . MODÉRATION IG ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription('__*Le prefix du bot est:*__ **.**')
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.addBlankField()

	.addField("● /tp [x] + [y] + [z]" , "Cette commande sert à se TP à des coordonées")
    .addField("● /bring + [id]", "Cette commande sert à TP un joueur à sois..")
    .addField("● /car + [nom de la voiture]", "Cette commande sert à faire spawn une voiture..")
    .addField("● /dv", "Cette commande sert à supprimer un véhicule..")
    .addField("● /revive + [id]", "Cette commande sert à réanimer un joueur..")
    .addField("● /heal + [id]", "Cette commande sert à donner de la vie/nourriture à un joueur..")
    .addField("● /setjob + [id] + [job] + [1-5] ", "Cette commande sert à mettre le 1er métier d'un joueur..")
    .addField("● /setjob2 + [id] + [job] + [1-5] ", "Cette commande sert à mettre le 2ème métier d'un joueur..")
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 4 - HELP

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "help") {
      

    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ PRIMELIFE . COMMANDES ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription('__*Le prefix du bot est:*__ **.**')
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.addBlankField()

	.addField("● .help" , "Envoie le message d'aide..")
	.addField("●  .ip" , "Envoie l'ip du serveur...")
	.addField("●  .ano" , "Envoie un message anonyme..")
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 5 - HELPM

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "helpm") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande")

    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ PRIMELIFE . COMMANDES MODÉRATION ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription('__*Le prefix du bot est:*__ **.**')
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.addBlankField()

	.addField("● son" , "Cette commande envoie le message: **SERVEUR ON**..") 
    .addField("● soff" , "Cette commande envoie le message: **SERVEUR OFF**..") 
    .addField("● r" , "Cette commande envoie le message: **REBOOT EN COUR**..") 
    .addField("● m" , "Cette commande envoie le message: **MAINTENANCE EN COUR**..") 
	.addField("● rstaff" , "Cette commande envoie le message: **RÉUNION STAFF**..") 
	.addField("● rencour" , "Cette commande envoie le message: **RÉUNION EN COUR**")
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 6 - MESSAGE DE BIENVENUE

client.on('guildMemberAdd', member =>{
	let embed = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle('◐ NOUVEL ARRIVANT ◐')
		.addBlankField()

		.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
		.addBlankField()

		.setDescription(':tada: ! ' + member.user.username + ' à rejoint ! ' + member.guild.name)
		.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
		.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
		

		
        .setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');
    member.guild.channels.get('662713416326053911').sendMessage(embed)
});

// 7 - MESSAGE DE MAINTENANCE 

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "m") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande")
    message.channel.send("@everyone")
    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ MAINTENANCE ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription('Le serveur est en cour de **maintenance**')
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 8 - MESSAGE DE REBOOT

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "r") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande")
    message.channel.send("@everyone")
    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ REBOOT ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription('Le serveur est entrain de **reboot**')
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 9 - SERVEUR ON

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "son") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande")
    message.channel.send("@everyone")
    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ SERVEUR ON ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription('Le serveur est en **ON**')
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 10 - SERVEUR OFF

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "soff") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande")
    message.channel.send("@everyone")
    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ SERVEUR OFF ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription('Le serveur est **OFF**')
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 11 - RÉUNION STAFF PRÉVU

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "rstaff") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande")
    message.channel.send("@everyone")
    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ RÉUNION STAFF ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription('Une réunion STAFF sera organisée le **00/00/0000 à 00h00**')
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 12 - RÉUNION STAFF EN COUR

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "rencour") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("⚠️ Vous n'avez pas la permission d'utiliser cette commande")
    message.channel.send("@everyone")
    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ RÉUNION STAFF EN COUR ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setDescription("Tout le staff est attendu pour la **réunion staff d'aujourd'hui** ")
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 13 - IP DU SERVEUR

client.on('message',message => {
    if (!message.guild) return

    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "ip") {
        
   
    var embed = new Discord.RichEmbed()
    .setColor('#0099ff')
	.setTitle('◐ IP DU SERVEUR ◐')
	.setURL('https://discord.gg/Y8PJGNE')
	.setAuthor('PRIMELIFE by BLS', 'https://images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%3Fsize%3D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.addBlankField()

	.setDescription("Voici l'ip du serveur")
	.addField("F8 + " , " connect 54.36.124.138:33545")
	.setThumbnail('https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif')
	.setImage('https://cdn.discordapp.com/attachments/682595118724677684/682601780655161345/AAAASSS.png')
	.setTimestamp()
	.setFooter("Powered, scripted and developed By Dawgy & Minfay - Elite's STAFF", 'https://images-ext-2.discordapp.net/external/zq9muApKcrQeYD-9NSIv2zmSJrLMPLkCT8MuAYm31Po/https/images-ext-2.discordapp.net/external/bcg2DdQHylVZkZAwO6McqSp3r4NPiBnu3cC8wthojZc/%253Fsize%253D1024/https/cdn.discordapp.com/icons/602843290232029214/a_f7cba85c06a50d4c4fc8ec8a2f7d8653.gif');

message.channel.send(embed)
    }

})

// 14 - COMMANDE KICK

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
		if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(" **Vous n'avez pas la permission d'utilisé cette commande **")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(" **Veuillez mentionner l'utilisateur en question !** :x:")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.d) return message.channel.send(" **Vous ne pouvez pas kick une personne plus haut gradée que vous !** :x:")
        if (!member.kickable) return message.channel.send(" **Je ne peux pas kick cet utilisateur** :sunglasses:")
        member.kick()
        message.channel.send( member.user.name + ' **a été kick** :white_check_mark: ')
    }
});

// 15 - COMMANDE BAN

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
        if (!message.member.hasPermission('VIEW_AUDIT_LOG')) return message.channel.send(" **Vous n'avez pas la permission d'utilisé cette commande** ")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(" **Veuillez mentionner l'utilisateur en question !** :x:")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.d) return message.channel.send(" **Vous ne pouvez pas bannir une personne plus haut gradée que vous !** :x:")
        if (!member.banable) return message.channel.send(" **Je ne peux pas bannir cet utilisateur** :sunglasses:")
        member.guild.han(member, {days: 7})
        message.channel.send( member.user.username + ' **a été ban** :white_check_mark:')
    }
});

// 16 - GAME ACTIVITY

client.on("ready", () => {
    client.user.setActivity(".help / .ip / .ano", { type: "LISTENING",})
})

// 17 - COMMANDE ANO

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "ano") {

        if (args.length < 2)
            return message.reply("Nothing to say?").then(m => m.delete(1));

        const roleColor = message.guild.me.highestRole.hexColor;
        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
            .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

             message.chanel.send(embed);
        } else {
            message.channel.send(args.slice(1).join(" "));
            message.delete()
        }
    }
});







 
