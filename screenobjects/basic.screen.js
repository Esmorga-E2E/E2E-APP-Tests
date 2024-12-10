export default class Basics {
    get_what_snackbar_seek(snackbar){
        switch(snackbar){
            case 'joined':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return "//android.widget.TextView[@text='Bravo! You have joined the event!']"

                    case "iOS":
                    case "ios":
                        return 'accessibility id:Bravo! Te has unido al evento!'
                }
            case 'quit':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return "//android.widget.TextView[@text='Booooo! quitter!']"

                    case "iOS":
                    case "ios":
                        return 'accessibility id:Buuuuu! Rajao!'
                }
            
            default:
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '?'

                    case "iOS":
                    case "ios":
                        return '?'
                }
            
        }
    } 

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
          
            case 'explore':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]'
                                
                        case "iOS":
                    case "ios":
                        return '//XCUIElementTypeButton[@name="DashboardView.bottomBar"][1] | //XCUIElementTypeButton[@name="SplashView.dashboard"][1]'
                }
                case 'my events':
                case 'events':
                        switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]'
                                
                    case "iOS":
                    case "ios":
                                
                        return '//XCUIElementTypeButton[@name="DashboardView.bottomBar"][2] | //XCUIElementTypeButton[@name="SplashView.dashboard"][2]'
            }
            case 'profile':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]'
                                
                        case "iOS":
                    case "ios":
                        return '//XCUIElementTypeButton[@name="DashboardView.bottomBar"][3] | //XCUIElementTypeButton[@name="SplashView.dashboard"][3]'
            }   
    
        }
    }
    
}
