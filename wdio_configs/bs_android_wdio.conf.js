import dotenv from 'dotenv';
dotenv.config();
import {uploadToBrowserStack} from './lib/ota_download_bs_upload.js';
const appPackage = 'cmm.apps.esmorga';

import { basic_config } from "./basic.conf.js";
export const config = { ...basic_config, 
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        browserstackLocal: true,
        testObservabilityOptions: {
          projectName: "Esmorga Android",
          buildName: '1',
          sessionName: 'Pipe Test',
        },
        app: await uploadToBrowserStack(process.env.APK_URL)

      },
    ]
  ],

//      deviceName: 'Google Pixel 9',
  capabilities: [{
    'bstack:options': {

      deviceName: 'Samsung Galaxy S10',
      platformName: 'android',
      networkLogs : true,
      video: true,
      interactiveDebugging : true,
    },
  
  }],
  commonCapabilities: {
    'bstack:options': {
      debug: true,
      networkLogs: true,
      appiumVersion: '2.0',
      "networkLogs" : true,
    },
    "appium:disableWindowAnimation": true,
    "appium:reduceMotion": true
  },

maxInstances: 1,

beforeScenario: async function (world, context) {
  console.log(`Starting Scenario: ${world.pickle.name}`);
  const appState = await driver.queryAppState(appPackage);
  if (appState !== 4) {
    await driver.startActivity(
      appPackage,
      ".view.MainActivity"
    );
    await driver.pause(500);
  }



},

afterScenario: async function (world, context) {
  await driver.pause(500);
  await driver.terminateApp(appPackage);
  await driver.pause(500);
}


};
