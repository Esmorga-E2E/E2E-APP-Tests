const appPackage = 'cmm.apps.esmorga';

import { config as basic_config }  from "./bs_android_wdio.conf.js"
export const config = { ...basic_config,
  capabilities: [{
    'bstack:options': {
      deviceName: 'Google Pixel 9',
      platformName: 'android',
    },
  
  }],
  BeforeAll: async function (world, context) {
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
  }
};
