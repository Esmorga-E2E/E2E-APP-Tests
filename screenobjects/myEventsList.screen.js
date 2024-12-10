import Basics from './basic.screen'
export default class MyEventsList extends Basics {
    get_what_to_seek () {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.TextView[@text="Your events"]'
            case "iOS":
            case "ios":
                return '//XCUIElementTypeStaticText[@name="DashboardView.myEvents" and @label="Tus eventos"] | accessibility id:MyEventsView.title'
        }
    }
    get_where_tap_on(where){
        switch(where){
            
            case 'login':
            switch (browser.capabilities.platformName) {
                case "Android":
                case "android":
                    return '//android.widget.TextView[@text="Login"]'
                case "iOS":
                case "ios":
                    return '//XCUIElementTypeButton[@name="DashboardView.myEvents"]'
            }
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
