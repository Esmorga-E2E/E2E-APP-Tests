export default class Basics {
    get_where_tap_on(where){
        switch(where){
            case 'primary button':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button'
                    case "iOS":
                    case "ios":
                        return '//XCUIElementTypeButton[1]'
                }    
            case 'secondary button':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button'
                    case "iOS":
                    case "ios":
                        return '//XCUIElementTypeButton[2]'
                }
            
            case 'back':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":     
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button'
                    case "iOS":
                        case "ios":
                        return '//XCUIElementTypeOther[@name="Izquierda"][1]'
                }
            }
    }
}
