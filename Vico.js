const { WAConnection, MessageType, Mimetype, Presence,  MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
const {y2mateA, y2mateV} = require('./Media/y2mate.js');
const prefix = '.'


async function iniciar () { 
        const client = new WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./Samu330.json') && client.loadAuthInfo('./Samu330.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (sam) => {
try {	  
if (!sam.hasNewMessage) return
if (!sam.messages) return
if (sam.key && sam.key.remoteJid == 'status@broadcast') return

sam = sam.messages.all()[0]
if (!sam.message) return
global.blocked
sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
const from = sam.key.remoteJid
const type = Object.keys(sam.message)[0]        
const quoted = type == 'extendedTextMessage' && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(sam.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = sam.message.conversation || sam.message[type].caption || sam.message[type].text || ""
chats = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['########@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = sam.key.fromMe ? client.user.jid : isGroup ? sam.participant : sam.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = sam.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = sam.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

if(body.includes('bot')){
  client.sendMessage(from,  'Hola' , MessageType.text,
  {quoted: { key: { fromMe : false,
  participant: '0@s.whatsapp.net' , ...(from ? {remoteJid:"status@broadcast"}:{}) 
},
message: {
"documentMessage" : { "title":"texto" , 'jpegThumbnail': fs.readFileSync('./Media/user.jpg')}} 
 }})
}
 
if(body == ('Hola')){
client.sendMessage(from, 'https://co.pinterest.com/angela_matilde/casa-en-el-arbol/' , MessageType.text,
{quoted: sam, detectLinks: true, }) 
}
if(body.includes('whatsapp')){        
const audio = fs.readFileSync('./Media/cursos/datos.ogg')
client.sendMessage(from, audio, MessageType.audio,
{quoted: sam, Mimetype: 'audio/ogg', duration: 0003, ptt:true })
const imagen = fs.readFileSync('./Media/user.jpg')
client.sendMessage(from, imagen, MessageType.image,
{quoted: sam, caption: '🛍 Aprende la estrategia la estrategia para *VENDER* tus productos o servicios utilizando WhatsApp como herramienta de Marketing y Ventas' })  

		
  client.sendMessage ( from, vcard, MessageType . contact,
  {  displayname : "Jeff" ,  vcard : vcard  })
	// send a location!
	const id = '0@s.whatsapp.net'	
  client.sendMessage (id, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221}, MessageType.location)

// send a list message!
const rows = [
 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
]

const sections = [{title: "Section 1", rows: rows}]

const button = {
 buttonText: 'Click Me!',
 description: "Hello it's list message",
 sections: sections,
 listType: 1
}

client . sendMessage ( from, button, MessageType.listMessage)
	// send a buttons message!
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

client . sendMessage(from, buttonMessage, MessageType.buttonsMessage)
const conpa = fs.readFileSync('./Media/User.vcf')
client.sendMessage(from, conpa, Mimetype.vcf,
)
}
	
	
switch (command) {
	case 'ytmp4':
if (!isRegister) return samu330.sendMessage(from, assistant, image, { quoted: noreg, caption: `😊Hola, ${timeFt}.\n*Yo soy Sam330*, Asistente de *Samu330*!.\n\nAl parecer no estas registrado en _*NyanBot*_, Para registrarte usa el comando: *${prefix}reg*.`, thumbnail: assistant, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
if (args.length < 1) return reply('Y el link?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link de YouTube we, *De YouTube!!*')
teks = args.join(' ')
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply('_[ ! ] Error del servidor_')
})
result = `「  𝗦𝗮𝗺 𝘆 𝗣𝗲𝗿𝗿𝘆🍒  」
*°Titulo :* ${res[0].judul}
*°Tamaño :* ${res[0].size}
*°Calidad :* ${res[0].quality}p
*°Nombre :* ${res[0].output}
*°Output :* ${res[0].tipe}
_*El archivo se esta enviando.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: sam})
sendFileFromUrl(res[0].link, video, {quoted: fvid, mimetype: Mimetype.gif, duration: 9999999999})
addFilter(from)
addLevelingLevel(sender, 5)		
break
                
case 'whatsapp':
const imagen = fs.readFileSync('./Media/user.jpg')
client.sendMessage(from, imagen, MessageType.image)
		

}
switch (command) {		
case 'bot':
client.sendMessage(from, 'Hola, felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : sam})
break
                
case 'foto':
const imagen = fs.readFileSync('./Media/user.jpg')
client.sendMessage(from, imagen, MessageType.image)
break 
	
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
