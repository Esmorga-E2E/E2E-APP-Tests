export default class Login {
    get_what_to_seek () {
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
            case 'back':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":     
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button'
                    case "iOS":
                        case "ios":
                        return '//XCUIElementTypeOther[@name="Izquierda"]'
                }
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
