import dotenv from 'dotenv';
dotenv.config();
import fs from "fs";

let secretValue = "";

if (process.env.OS === "ios") {
    secretValue = process.env.PERCY_TOKEN_IOS;
} else if (process.env.OS === "android") {
    secretValue = process.env.PERCY_TOKEN_ANDROID;
} else {
      process.exit(1);
}
const dotenvFile = fs.readFileSync('.env', 'utf8');
let updatedEnv = dotenvFile;


if (updatedEnv.includes('PERCY_TOKEN=')) {
    updatedEnv = updatedEnv.replace(/PERCY_TOKEN=.*/g, `PERCY_TOKEN=${secretValue}`);
  } else {
    updatedEnv += `PERCY_TOKEN=${secretValue}\n`;
  }
  
  fs.writeFileSync('.env', updatedEnv);
  
