import Basics from './basic.screen'
export default class mailApp extends Basics {

    get_what_to_seek(reg) {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.ImageView[@resource-id="com.google.android.gm:id/gmail_logo"]'
            case "iOS":
            case "ios":
                return '¿¿¿???'
        }

    }
    
}
