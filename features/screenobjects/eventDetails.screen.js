import Basics from './basic.screen'
export default class EventDetails extends Basics {

    get_what_to_seek () {
        console.log(browser.capabilities.platformName)
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.TextView[@text="Event details"]'
            case "iOS":
            case "ios":
                return '//XCUIElementTypeStaticText[@name="Detalles del evento"]'
        }

    }
    get_where_tap_on(where){
        switch(where){
            default:
                return super.get_where_tap_on(where)
            }

    }
}
