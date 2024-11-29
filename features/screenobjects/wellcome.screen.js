export default class Wellcome {
    get_what_to_seek () {
        switch (browser.capabilities.platformName) {
            case "android":
                return '//android.widget.ImageView[@content-desc="App logo"]'
            case "iOS":
                return '//XCUIElementTypeImage[@name="SplashView.welcomeScreen"]'
        }
    }
    get_where_tap_on(where){
        switch(where){
            case 'primary button':
                switch (browser.capabilities.platformName) {
                    case "android":
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button'
                    case "iOS":
                        return '//XCUIElementTypeButton[@name="SplashView.welcomeScreen"][1]'
                }    
            case 'secondary button':
                switch (browser.capabilities.platformName) {
                    case "android":
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button'
                    case "iOS":
                        return '//XCUIElementTypeButton[@name="SplashView.welcomeScreen"][2]'
                }
            }
    }
}
