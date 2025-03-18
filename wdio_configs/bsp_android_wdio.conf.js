const appPackage = 'cmm.apps.esmorga';

import { config as basic_config }  from "./bs_android_wdio.conf.js"
export const config = { ...basic_config,

  BeforeAll: async function (world, context) {
    driver.execute_script("mobile: shell", {
      "command": "settings",
      "args": ["put", "global", "window_animation_scale", "0"]
  })
  driver.execute_script("mobile: shell", {
      "command": "settings",
      "args": ["put", "global", "transition_animation_scale", "0"]
  })
  driver.execute_script("mobile: shell", {
      "command": "settings",
      "args": ["put", "global", "animator_duration_scale", "0"]
  })
  }
};
