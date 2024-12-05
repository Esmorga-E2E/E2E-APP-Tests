const appPackage = 'cmm.apps.esmorga';
import { basic_config } from "./basic.conf.js";
export const config = { ...basic_config, 
    runner: 'local',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    maxInstances: 1,
    capabilities: [{
        "platformName": "Android",
        "appium:deviceName": "emulator-5554",
        "appium:automationName": "UiAutomator2",
        "appium:appActivity": ".view.MainActivity",
        "appium:appPackage" : "cmm.apps.esmorga",
        "appium:app":process.env.build_url.replace("https://otashare.mobgen.com/build/", "https://otashare.mobgen.com/build/download/").replace("/esmorga-qa",""),
        "appium:fullReset": "true",
        "appium:noReset":"false",
    }],

beforeScenario: async function (world, context) {
  const appState = await driver.queryAppState(appPackage);
  if (appState !== 4) {
    await driver.startActivity(
      appPackage,
      "cmm.apps.esmorga.view.MainActivity"
    );
    await driver.pause(500);
  }
},
afterScenario: async function (world, context) {
    await driver.pause(500);
    await driver.terminateApp(appPackage);
    await driver.pause(500);
  }

}


