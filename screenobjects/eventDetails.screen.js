import Basics from './basic.screen'
export default class EventDetails extends Basics {

    get_what_to_seek(reg) {
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
            case 'primary button':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//android.widget.ScrollView/android.view.View[2]/android.widget.Button'
                                
                    case "iOS":
                    case "ios":
                        return '//XCUIElementTypeButton[2]'
                }    
                case 'secondary button':
                    switch (browser.capabilities.platformName) {
                        case "Android":
                        case "android":
                            return '//android.widget.ScrollView/android.view.View[1]/android.widget.Button'
                        case "iOS":
                        case "ios":
                            return super.get_where_tap_on(where)
                    }
                case 'rajarse button':
                    switch (browser.capabilities.platformName) {
                        case "Android":
                        case "android":
                            return '//android.widget.TextView[@text="Leave Event"]'
                                    
                        case "iOS":
                        case "ios":
                            return 'accessibility id:Rajarse'
                    }
                    case 'apuntarse button':
                        switch (browser.capabilities.platformName) {
                            case "Android":
                            case "android":
                                return '//android.widget.TextView[@text="Join Event"]'
                                        
                            case "iOS":
                            case "ios":
                                return 'accessibility id:Apuntarse'
                        }  	
                    case 'Identificate para apuntarte button':
                        switch (browser.capabilities.platformName) {
                            case "Android":
                            case "android":
                                return '//android.widget.ScrollView/android.view.View[2]/android.widget.Button'
                                        
                            case "iOS":
                            case "ios":
                                return 'accessibility id:Identifícate para apuntarte'
                        }
                    default:
                        return super.get_where_tap_on(where)

            }

    }
}
