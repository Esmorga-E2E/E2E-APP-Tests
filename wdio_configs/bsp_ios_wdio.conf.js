const appPackage = 'com.mobilestudio.esmorga';
import { config as basic_config }  from "./bs_ios_wdio.conf.js"
export const config = { ...basic_config, 

capabilities: [{
  'bstack:options': {
    deviceName: 'iPhone 16',
    platformVersion: '18',
    platformName: 'ios',
  },

}],
BeforeAll: async function (world, context) {
  driver.execute_script("mobile: shell", {
    "command": "defaults",
    "args": ["write", "com.apple.Accessibility", "ReduceMotionEnabled", "-bool", "true"]
  })
}
};
