const appPackage = 'cmm.apps.esmorga';

import { config as basic_config }  from "./bs_android_wdio.conf.js"
export const config = { ...basic_config,
  capabilities: [{
    'bstack:options': {
      deviceName: 'Google Pixel 9',
      platformName: 'android',
    },
  
  }]

};
