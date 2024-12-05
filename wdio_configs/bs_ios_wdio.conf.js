const appPackage = 'com.mobilestudio.esmorga';
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
          projectName: "Esmorga iOS",
          buildName: '1',
          sessionName: 'Pipe Test',
        },
        app: process.env.BROWSERSTACK_APP_ID,
      }
    ]
  ],


capabilities: [{
  'bstack:options': {
    deviceName: 'iPhone 1[3456]',
    platformVersion: '1[678]',
    platformName: 'ios',
  },
}],
commonCapabilities: {
  'bstack:options': {
    debug: true,
    networkLogs: true,

    appiumVersion: '2.0',
  }
},

maxInstances: 5,

beforeScenario: async function (world, context) {
  const appState = await driver.queryAppState(appPackage);
  if (appState !== 4) {
    await driver.activateApp(
      appPackage,
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
