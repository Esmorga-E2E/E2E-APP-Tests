import Basics from './basic.screen'
export default class PasswordRecovery extends Basics {
    get_what_to_seek(reg) {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.TextView[@text="Recover your password"]'
            case "iOS":
            case "ios":
                return '//XCUIElementTypeStaticText[@name="Recover your password"]'
        }
    }
    get_where_to_write(where){
        switch(where){
            case 'email':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//android.widget.ScrollView/android.widget.EditText[1]'
                    case "iOS":
                    case "ios":
                        return '//XCUIElementTypeTextField'
                }
            }
    }
    
}
