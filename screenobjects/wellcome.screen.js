import Basics from './basic.screen'
export default class Wellcome extends Basics {
    get_what_to_seek(reg) {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.ImageView[@content-desc="App logo"]'
            case "iOS":
            case "ios":
                return '//XCUIElementTypeImage[@name="SplashView.welcomeScreen"]'
        }
    }

}
