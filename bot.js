const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDI3ODkyMzIxOTUxMTU0MTk2.DZ9brA.Jy3GZpbCZsQZgzeVo5teWqMf-cM');

bot.on('message', message => {
    if (message.content.startsWith('/comandos')){
        message.channel.send('Ditando comandos...');
    }
    if (message.content.startsWith('/novidades')){
        message.channel.send('Revendo informações...');
    }
    if (message.content.startsWith('/equipe')){
        message.channel.send('Contando o gado...');
    }
    if (message.content.startsWith('/creditos')){
        message.channel.send('Saudando ao Deus...');
    }
    if (message.content.startsWith('/whatsapp')){
        message.channel.send('Entre no grupo de membros do WhatsApp: https://chat.whatsapp.com/LEMNI7JpOd783rcIpyZeAm');
    }
    if (message.content.startsWith('Saudando ao Deus...')){
        message.channel.send('', {files: ["./imagens/credits.jpg"]});
    }
    if (message.content.startsWith('Contando o gado...')){
        message.channel.send('', {files: ["./imagens/equipe.jpg"]});
    }
    if (message.content.startsWith('Revendo informações...')){
        message.channel.send('', {files: ["./imagens/nov.jpg"]});
    }
    if (message.content.startsWith('Ditando comandos...')){
        message.channel.send('', {files: ["./imagens/comandos.jpg"]});
    }
    if (message.content.startsWith('/easter')){
        message.channel.send('Dizem por ai que o Sindor não é desse planeta! :thinking:');
    }
})

bot.on('ready', () => {
    bot.user.setGame('/comandos')
  })
