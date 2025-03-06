import Basics from './basic.screen'
export default class Errors extends Basics {
    get_what_to_seek(reg) {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.TextView[@displayed="true" and @text="Something failed, please try again"]'
            case "iOS":
            case "ios":
                return '//XCUIElementTypeStaticText[@name="Algo ha fallado, por favor inténtalo de nuevo más tarde"]'
        }
    }
    get_where_tap_on(where){
        switch(where){
            case 'retry button':
            switch (browser.capabilities.platformName) {
                case "Android":
                case "android":
                    return '//android.view.View[@clickable="true" and .//android.widget.Button and .//android.widget.TextView[@text="Retry"]]'
                case "iOS":
                case "ios":
                    return '//XCUIElementTypeButton[@name="Reintentar"]'
            }
            default:
                return super.get_where_tap_on(where)
                
        }
    }
}
