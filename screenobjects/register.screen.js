import Basics from './basic.screen'
export default class Register extends Basics {

    get_what_to_seek(reg) {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return '//android.widget.TextView[@text="Register"]'
            case "iOS":
            case "ios":
                return '//XCUIElementTypeStaticText[@name="RegistrationView.title"]'
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
                        return '//XCUIElementTypeButton[2]'
                }
            }
    }  
    get_where_to_write(where){
        switch(where){
            case 'name':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//android.widget.ScrollView/android.widget.EditText[1]'
                    case "iOS":
                    case "ios":
                        return '//XCUIElementTypeStaticText[@name="RegistrationView.textfield0"]'
                }

                case 'last name':
                    switch (browser.capabilities.platformName) {
                        case "Android":
                        case "android":
                            return '//android.widget.ScrollView/android.widget.EditText[2]'
                        case "iOS":
                        case "ios":
                            return '//XCUIElementTypeStaticText[@name="RegistrationView.textfield1"]'
                    }

            case 'email':
                switch (browser.capabilities.platformName) {
                    case "Android":
                    case "android":
                        return '//android.widget.ScrollView/android.widget.EditText[3]'
                    case "iOS":
                    case "ios":
                        return '//XCUIElementTypeStaticText[@name="RegistrationView.textfield2"]'
                }
                case 'password':
                    switch (browser.capabilities.platformName) {
                        case "Android":
                        case "android":
                            return '//android.widget.ScrollView/android.widget.EditText[4]'
                        case "iOS":
                        case "ios":
                            return '//XCUIElementTypeStaticText[@name="RegistrationView.textfield3"]'
                        }
                
                case 'retry password':
                    switch (browser.capabilities.platformName) {
                        case "Android":
                        case "android":
                            return '//android.widget.ScrollView/android.widget.EditText[5]'
                        case "iOS":
                        case "ios":
                            return '//XCUIElementTypeStaticText[@name="RegistrationView.textfield4"]'
                        }
                }
    
            }

}
