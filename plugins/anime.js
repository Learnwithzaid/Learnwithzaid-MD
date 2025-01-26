const {cmd , commands} = require('../command')

cmd({
    pattern: "anime",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮❮ *Learnwithzaid-MD ANIME PHOTOS* ❯❯❯`
await conn.sendMessage(from,{image:{url: `https://deposit.pictures/p/d98c6a45cb2e4af496b5f996f2e57673`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://deposit.pictures/p/d98c6a45cb2e4af496b5f996f2e57673`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://deposit.pictures/p/d98c6a45cb2e4af496b5f996f2e57673`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://deposit.pictures/p/d98c6a45cb2e4af496b5f996f2e57673`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://deposit.pictures/p/d98c6a45cb2e4af496b5f996f2e57673`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://deposit.pictures/p/d98c6a45cb2e4af496b5f996f2e57673`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://deposit.pictures/p/d98c6a45cb2e4af496b5f996f2e57673`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
