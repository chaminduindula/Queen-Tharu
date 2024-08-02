//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "92742952930@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/chaminduindula/Queen-Tharu";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/WBHnp5x/3849fd0d18114e579ce8623a9596fa35.png";
global.devs = "94742952930";
global.sudo = process.env.SUDO || "94742952930";
global.owner = process.env.OWNER_NUMBER || "94742952930";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5rWDNlNEFyTW5kTTd5eXIxaVBwVDFZbEFqSEZVUmtza2xzK2ZLc01WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmxNSE1mZkpxV0pGUitJd0R2M2JKNEVZbG5hVjMwcVRNRjJUcUl4dm1ndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQlhrMGVLeUxVOGhvSWwxd3lzdG9Pb3MvZm5vZy9lRGdPQmZLcGlicTJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHN2pSeEpRVkdlZ0ZRd3dRUFJlbmZBNkVVM0NWYTZIYmpvcUtIajdxZnk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MUXRnWHk4YXNtSHdDNTROS3JaVkdKRXVpdVRBSlNySC9uekZFdE9ZbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitRVjVpUGpPdzlCRStpRkU4THJVakxBcWRJZmJOS2pwT0ljTndYOEhaMzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENQNnZ1TTJIQU81SUt5NXYyUnhkaWZIR2xIR2UyWDc0aTRYWEtjaU9rUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODNxTVBLSWo3bllUb1BGTDhLWEo2Z0U5LzNCYXRUNzc3TDNpZzZwYk1qaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIzb2lBUEdKSmZNa2JGNDFaUHRCMFF1TmtJdnJYNmV3bDdaaVhTbzdCL3d6K0ZxNHhGS1M1WFZ3SEJ0UUFFemV3RHZWN3dhVkVMOEd3aFhUUXdaMURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJxR2llZ2RsMDNaVGtsM3VtQkxMUTdmZ2pjeW5nWUxXVG5pVDJwcEUxOTlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFSXlHTHd3SFFseTFXUUFjbmZMY2tnIiwicGhvbmVJZCI6IjEwMDA5NDFlLWQ4OGQtNGNjNi1hZjgwLTkzZmJkZjlkOTljNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNWWN4M1crbEZucG0wZ3NleW44K1RMbUpCdDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzgxME5yNlVDc1lHZU5QUHBFUmNqNjBweHVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IksxRzVKRTFGIiwibWUiOnsiaWQiOiI5NDc0Mjk1MjkzMDozMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDaGFtaSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSk90OGhRUXZKYXp0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQlFvR0RmdWE4WWFuWjkxYkJkaGg2NGIzUHQxRHQxdGhLSVJmbVlDTFdIWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQnM4WGhnQVpLQ3ZubVpoUnZFQmJxRS9vbE4yeWhYcUpHa0ZoRHFoVmRUdWZWc0FlVzdvMjczTUxqOW1oZGFxcVVSRS9Fa2RudjFLSExHYXJxK0lKQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ilp1V1FMU0szRGp4SGJZeEtidkVqOTJzL0pVM09Ya3BWRDhWL3ZOeisycVBMVWRGNW9qVG5ocFUxRWpqYjZkblEvODcvM2ZESjRiZDQ1YUViby9xWkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDI5NTI5MzA6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVVLQmczN212R0dwMmZkV3dYWVlldUc5ejdkUTdkYllTaUVYNW1BaTFoMiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjYwMDI2NH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Tharu-𝐌𝐃-𝐕1😍",
  author: process.env.PACK_AUTHER || "Chami",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Tharu-𝐌𝐃-𝐕1",
  ownername: process.env.OWNER_NAME || "tharu",
  errorChat: process.env.ERROR_CHAT || "94742952930",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
