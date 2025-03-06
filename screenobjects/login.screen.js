import Basics from './basic.screen'
export default class Login extends Basics {
    get_what_to_seek(reg) {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.ImageView[@content-desc="Login header"]'
            case "iOS":
                        case "ios":
                return '//XCUIElementTypeImage[@name="login-header"]'
        }
    }
    get_where_tap_on(where){
        switch(where){
            case 'primary button':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//android.widget.ScrollView/android.view.View[1]/android.widget.Button'
                    case "iOS":
                        case "ios":
                        return '//XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]//XCUIElementTypeButton[1]'

                }

            case 'secondary button':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//android.widget.ScrollView/android.view.View[2]/android.widget.Button'
                    case "iOS":
                        case "ios":
                        return '//XCUIElementTypeScrollView/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]//XCUIElementTypeButton[2]'
                }
            default:
                return super.get_where_tap_on(where)
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
            case 'password':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//android.widget.ScrollView/android.widget.EditText[2]'
                    case "iOS":
                    case "ios":
                        return '//XCUIElementTypeSecureTextField'
                }
            }
    }
    
}
