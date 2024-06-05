const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "18763351213";
global.owner = process.env.OWNER_NUMBER || "18763351213";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18763351214";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BSTENhUUl6NCs4cjc0YjZBK1krUWpMb0FQcXRGUTFhVGhramVabngwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzYwV3VKY0djUTRrckZ4Z0trMjBUNm9PdjA0Y1hoSks4K0JKQ2NTMUZYdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0S3JDaXZSK1NFMksrV0V3T09GS3hmZFBUOXFoQjVpVzBOcGY4SXA4alhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxTS9sSDlya3IyS3h0cWhtMUJMdEZydzZhM2MycHhRcjBXYkk3L21WUlhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJT2ZocUtLcFRQdjI5MDlJT3BJall4ZWdKZmZ5dy9JSUs5cWJBRSsvM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF1aFNNWFFZUk9jSU1ZUUpLci94cTVHSXovVTF5WVo2U1R4S2I5VzNobU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktVbkhxTDR2YmN2R2FvNm9DdnBWVm9lSWlIcTY0THBMVjdFSXBDZnZXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWRHQmszMGxQbkpvTFIvUm9FcklmTnNNaktYUEFvdFhneldEMzl2OUtRTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpMcE15VVFMVmV2c1RzQThzbURzQlI0cXF6NmdsTHhGQTF3c2hSd2xsMmVSZlhWUVhJWWJSeVdPUysvOVFvTVJWbnBQOGpRSVNubDlrZlAzd3hqK0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6Illsa2VzMnBZYnhPM2lVbkEyL0l5ck1DaTd6MjZYR0dxc2IxQmdPYlFYcEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkN3U2xGWDRjVHdxdXBjRjczU1V2Q1EiLCJwaG9uZUlkIjoiMDc4M2EzZTktZjgyNC00NGVjLWI3ZmQtMmVhYzRmMTQ0ZTEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU2eENabTZoSC9DVDR6UzkydURwL2VzUTNadz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIU0VwVlFLMEU3OWp1d0VwL2NQdHhMNStZOFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzFXWDlQUE0iLCJtZSI6eyJpZCI6Ijk0NzEzMzAzMTk3OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuODgyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjJpdnNNRUVMU0Fnck1HR0JvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid2RZdHRDQ0QwLzdGU21OMTVUdGpnUzFWQnNmV2V0OTNWSC9Lc2pzVHpXVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiejlhbE96bWZ6YXJ6eko2UVNnc29ISXptRm1BQ29pUVNkc3paOWVzcUR6eUNEdFg4MXVRYnNtU1pIS3BqK2pkV0pRQjJySEt2bUlTYmd6SjR2N3BGREE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJDMWVCMlp5YVhteUozS2hlUFF4eWdCbU9IdldiTVBlV3FiSXV6bUs5S1NrY3R0eUNmY21NdC9mRjI4ODdZa2tFTFE5cWlmcUNYTnVRbzcvQkIrekNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTMzMDMxOTc6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0hXTGJRZ2c5UCt4VXBqZGVVN1k0RXRWUWJIMW5yZmQxUi95ckk3RTgxbCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzYwMDMyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFINk8ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝑊𝛨𝛪𝛧𝐵𝛩𝑇-𝛭𝐷",
  author: process.env.PACK_AUTHER || "WHIZBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WHIZBOT-MD",
  ownername: process.env.OWNER_NAME || "JAY BOTS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
