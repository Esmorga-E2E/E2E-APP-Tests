
import dotenv from 'dotenv';
dotenv.config();

import axis from 'axios';
let url =  process.env.APK_URL || 'https://otashare.mobgen.com/build/w5bflwghkjo1/esmorga-qa'
url=url.replace('https://otashare.mobgen.com/build/', 'https://otashare.mobgen.com/build/download/').replace('/esmorga-qa', '')

export async function uploadToBrowserStack(url) {
  const response = await axis.post('https://api-cloud.browserstack.com/app-automate/upload', {
    url: url
  }, {
    auth: {
      username: process.env.BROWSERSTACK_USERNAME,
      password: process.env.BROWSERSTACK_ACCESS_KEY

    }
  });
  return response.data;
}

if (!process.env.BROWSERSTACK_APK_ID && !process.env.BROWSERSTACK_APP_ID){
    uploadToBrowserStack(url).then((data) => {
    console.log(data.app_url);
    ;
    }).catch((error) => {
        console.log(error);
    });
}else{
  console.log(process.env.BROWSERSTACK_APK_ID || process.env.BROWSERSTACK_APP_ID)
}
