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
    get_where_tap_on(where){
        switch (where) {
            case 'unique device identifier':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return 'accessibility id:id_device'
                    case "iOS":
                    case "ios":
                        return '???'
                }   
        
            default:
                return super.get_where_tap_on(where)
        }
    }
}
