const { WAConnection, MessageType, Mimetype, Presence,  MessageOptions } = require('@adiwajshing/baileys');
const fs = require('fs');
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
client.on ('CB:Presence', json => console.log(json.id + " presence is " + json.type))
await client.requestPresenceUpdate ("0@s.whatsapp.net")

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
client.sendMessage(from, 'como estas' , MessageType.text, {quoted: sam}) 
}
if(body.includes('whatsapp')){        
const audio = fs.readFileSync('./Media/cursos/datos.ogg')
client.sendMessage(from, audio, MessageType.audio,
{quoted: sam, Mimetype: 'audio/ogg', duration: 0003, ptt:true })
const imagen = fs.readFileSync('./Media/user.jpg')
client.sendMessage(from, imagen, MessageType.image,
{quoted: sam, caption: 'Aprende la estrategia para VENDER tus productos o servicios utilizando WhatsApp como herramienta de Marketing y Venta' })  
const fspam = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"contactMessage": {
		"displayName": `${pushname} NO SPAM!!`,
		"vcard": 'BEGIN:VCARD\n' +
    		'Version:3.0\n' +
    		'TEL;type=CELL;type=VOICE;waid=5219984907794:+5219984907794\n' +
		'item1.X-ABLabel:Celular' +
    		'END:VCARD'
		}
		}
		}
const  sentMsg   =  await  client . sendMessage ( id ,  { displayname : "Jeff" ,  vcard :vcard } ,  MessageType . contact )
}
	
	switch (commandstik) {
	
				case "paxuDk3LoZENYGIbqq0jI7+xHaEaDfGaWGtVJt/Vyzg=":
					redes = ['*Sigeme y te sigo en instagram!* https://www.instagram.com/samu330wabot', '*😊Seamos amigos en facebook!!* https://www.facebook.com/samu330wabot']
					opcion = redes[Math.floor(Math.random() * redes.length)]
reply(`*Si no ves la lista de comandos, o no puedes hacer click en el boton, desactiva la funcion de hacer el texto seleccionable en las configuraciones de tu whatsapp Mod.*
_Si siges teniendo problemas, usa el menu antiguo, escribiendo: ${prefix}menuofc_`)
let newmenu = client.prepareMessageFromContent(from, {
"listMessage":  {
"title": "*✍🏻MENU | 🌬Vico| Juan R Fuentes🪀*",
"description": `\n➫ြ𝚜ᷤ𝚊ͣ𝚖ͫ𝚞𝉄𖾔𖾔𖽙😈.li Oℱịcιɑl.li
🔐Hola *${pushname}* ${timeFt}
_Tipo de usuario:_ ${tipoDeUsr}
┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨XP: ${getLevelingXp(sender)}
📚Nivel: ${getLevelingLevel(sender)}
┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈
							
🕐Son las *${hora}*\n\n🍃Hoy es *${week1}  ${calender1}*
							
⍣ *BOT juanraa INFO* ⍣
${samu}◦ 🌐Navegador :${samu} *${samu330.browserDescription[1]}*
${samu}◦ 📡servidor :${samu} *${samu330.browserDescription[0]}*
${samu}◦ ✅version :${samu} *${samu330.browserDescription[2]}*
${samu}◦ 🚄Velocidad :${samu} *${process.uptime()}*
${samu}◦ 📲Sistema operativo :${samu} *${samu330.user.phone.device_manufacturer}*
${samu}◦ 🪀version de${samu} *WhatsApp* : *${samu330.user.phone.wa_version}*
༶•┈┈⛧┈♛ ♛┈⛧┈┈•༶
*🪀Grupo de Soporte y ayuda:*
https://chat.whatsapp.com/BGTQNDzESmEJr2cCJlccWV
En el grupo podras aprender a:
- Crear Bots.
- Instalar Bots.
- Editar Bots.
- Y mucho mas.
🗡NO SE PERMITEN ENLACES!!
${opcion}`,
							"buttonText": "Selecciona ",
							"listType": "SINGLE_SELECT",
							"sections": [
								{
									"rows": [
										{
											"title": `Menu de Media📷`,
											"rowId": "media"
										},
										{
											"title": "Menu de Stickers🧩",
											"rowId": "sticker"
										},
										{
											"title": `Menu de Grupos👥`,
											"rowId": "grupos"
										},
										{
											"title": "Menu de Descargas📲",
											"rowId": "descargas"
										},
										{
											"title": `Comandos de Herramientas⚙`,
											"rowId": "tools"
										},
										{
											"title": "Comandos para Adultos🔞",
											"rowId": "+18"
										},
										{
											"title": `Comandos para Logos🎨`,
											"rowId": "logos"
										},
										{
											"title": "Comandos para el Owner🙂",
											"rowId": "owner"
										},
										{
											"title": `🗡Comandos para explotar Grupos!!💣`,
											"rowId": "crash"
										},
										{
											"title": `Audios🎧`,
											"rowId": "audios"
										}
									]
								}
							]
						}
					}, {})
				client.relayWAMessage(newmenu, {waitForAck: true})
				break
			}
switch (command) {
	                
case 'whatsapp':
const imagen = fs.readFileSync('./Media/user.jpg')
client.sendMessage(from, imagen, MessageType.image)
		
 const rows = [
 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
]
	client.sendMessage(from, rows, MessageType.list)
break 
}
switch (command) {		
case 'bot':
client.sendMessage(from, 'Hola, felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : sam})
break
                
case 'foto':
const imagen = fs.readFileSync('./Media/user.jpg')
client.sendMessage(from, imagen, MessageType.image)
break 
	case 'fito':
        const rows = [
 {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
 {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
]
	client.sendMessage(from, rows, MessageType.list)
break 
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
