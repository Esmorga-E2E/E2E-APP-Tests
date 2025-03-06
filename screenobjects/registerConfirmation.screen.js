import Basics from './basic.screen'
export default class RegisterConfirmation extends Basics {

    get_what_to_seek(reg) {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.TextView[@text="Confirm your account"]'
            case "iOS":
            case "ios":
                return '¿¿¿???'
        }

    }
    get_where_tap_on(where){
        switch(where){
            case 'primary button':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        
                        return '//android.widget.ScrollView/android.view.View/android.widget.Button'
                                
                    case "iOS":
                    case "ios":
                        return '¿¿¿???'
                }
            

        case 'Resend mail':
            switch (browser.capabilities.platformName) {
                case "Android":
                case "android":
                    return '//android.widget.TextView[@text="Resend mail"]'
                case "iOS":
                case "ios":
                    return '¿¿¿???'
            }
    }
}


}
