import dotenv from 'dotenv';
dotenv.config();
import axis from 'axios';

export async function uploadToBrowserStack(url) {
  url=url.replace('https://otashare.mobgen.com/build/', 'https://otashare.mobgen.com/build/download/').replace('/esmorga-qa', '')
  const response = await axis.post('https://api-cloud.browserstack.com/app-automate/upload', {
    url: url
  }, {
    auth: {
      username: process.env.BROWSERSTACK_USERNAME,
      password: process.env.BROWSERSTACK_ACCESS_KEY

    }
  });
  console.log("APP:"+response.data.app_url)
  return response.data.app_url;
}