
import dotenv from 'dotenv';
dotenv.config();
import fs from "fs";


function write(updatedEnv){
  console.log("1")
  let secretValue = "";
  if (process.env.OS === "ios") {
    secretValue = process.env.PERCY_TOKEN_IOS;
  } else if (process.env.OS === "android") {
      secretValue = process.env.PERCY_TOKEN_ANDROID;
  } else {
        process.exit(1);
  }
  console.log("2")
  if (updatedEnv.includes('PERCY_TOKEN=')) {
      updatedEnv = updatedEnv.replace(/PERCY_TOKEN=.*/g, `PERCY_TOKEN=${secretValue}`);
  } else {
      updatedEnv += `PERCY_TOKEN=${secretValue}\n`;
  }
  console.log("3")
  fs.writeFileSync('.env', updatedEnv);
  console.log("4")
}  




try{
  const dotenvFile = fs.readFileSync('.env', 'utf8');
  write(dotenvFile);

} catch (error) {
  write(''); 

}
