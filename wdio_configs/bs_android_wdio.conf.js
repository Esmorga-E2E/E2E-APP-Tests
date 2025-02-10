import uploadToBrowserStack from './libs/ota_download_bs_upload.js';
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
        app: process.env.BROWSERSTACK_APK_ID,
      },
    ]
  ],


  capabilities: [{
    'bstack:options': {
      deviceName: 'Google Pixel 9',
      platformName: 'android',
    },
  
  }],
  commonCapabilities: {
    'bstack:options': {
      debug: true,
      networkLogs: true,
      appiumVersion: '2.0',
    },
    "disableWindowAnimation":true,
    "appium:disableWindowAnimation": true,
    "appium:reduceMotion": true
  },

maxInstances: 5,

beforeScenario: async function (world, context) {
  console.log('Ejecutando antes de cada escenario');

  // Aquí irían los comandos para desactivar las animaciones
  /*
  const commands = [
      {
          command: 'settings',
          args: ['put', 'global', 'window_animation_scale', '0'],
      },
      {
          command: 'settings',
          args: ['put', 'global', 'transition_animation_scale', '0'],
      },
      {
          command: 'settings',
          args: ['put', 'global', 'animator_duration_scale', '0'],
      },
  ];

  for (const cmd of commands) {
      try {
          await driver.executeScript('mobile: shell', cmd);
          console.log(`Exec: ${cmd.command} ${cmd.args.join(' ')}`);
      } catch (error) {
          console.error(`Error exec ${cmd.command}:`, error);
      }
  }

  // Confirmar que las animaciones están deshabilitadas
  console.log('Animaciones deshabilitadas.');
 */ 
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
