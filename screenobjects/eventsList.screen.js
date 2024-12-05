import Basics from './basic.screen'
export default class EventsList extends Basics {
    get_what_to_seek () {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.TextView[@text="Event list"]'      
            case "iOS":
            case "ios":
                return '//XCUIElementTypeStaticText[@name="Listado de eventos"]'
        }
    }
    get_where_tap_on(where){
        switch(where){
            case 'event':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]'
                    case "iOS":
                    case "ios":
                        return '//XCUIElementTypeButton[1]'
                }
            default:
                return super.get_where_tap_on(where)
            
        }
    }
}