const fs = require('fs')
const chalk = require('chalk')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================( YOU CAN EDIT )====================================================================//


global.openaikey = process.env.OPEN_AI_KEY || "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", //Put Open AI Api key
global.owner = process.env.OWNER || "923402725227", //Bot Owner Number
global.ownername = process.env.OWNER_NAME || "DarkWinzo", //Bot Owner Name
global.open_ai = process.env.OPEN_AI || "false", //Open AI Bot : "true" = on/"false" = off
global.chatbot_pm = process.env.CHATBOT_PM || "true", //Inbox Msg Chat Bot : "true" = on/"false" = off
global.chatbot_group = process.env.OWNER || "true", //Group Msg Chat Bot : "true" = on/"false" = off
global.language = process.env.LANGUAGE || "EN", //EN < = English , SI < = Sinhala
global.bot_present = process.env.PRESENT || "false" //false is recommand..because it make crash
global.prefix = "." // Not need to change







//============================================================( AUTO UPDATE FUNTION )====================================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
