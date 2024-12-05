const appPackage = 'com.mobilestudio.esmorga';
import { basic_config } from "./basic.conf.js";
export const config = { ...basic_config, 
    runner: 'local',//
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    maxInstances: 1,
    capabilities: [{
        "platformName": "iOS",
        "appium:platformVersion":"17.0",
        "appium:automationName": "XCUITest",
        "appium:bundleId": "com.mobilestudio.esmorga",
        "appium:udid": "C4278E69-A708-494A-8073-5A0C8B42D9C5",
        "appium:deviceName": "iPhone SE (3rd generation)",
        "appium:usePreinstalledWDA": "true",
        "appium:prebuiltWDAPath": "/Users/pablo.canarte.sol/node_modules/appium-xcuitest-driver/node_modules/Build/Products/Debug-iphonesimulator/WebDriverAgentRunner-Runner.app",

        "appium:noReset":"false"
    }],

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
}