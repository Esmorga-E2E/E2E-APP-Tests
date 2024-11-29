export default class EventDetails {
    get_what_to_seek () {
        switch (browser.capabilities.platformName) {
            case "android":
                return '//android.widget.TextView[@text="Event details"]'
            case "iOS":
                return '//XCUIElementTypeStaticText[@name="Detalles del evento"]'
        }

    }
    get_where_tap_on(where){
        switch(where){
            case 'back':
                    switch (browser.capabilities.platformName) {
                        case "android":
                            return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button'
                        case "iOS":
                            return '//XCUIElementTypeOther[@name="Izquierda"]'
                    }
            }

    }
}
