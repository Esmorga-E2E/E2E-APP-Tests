const isAndroid = driver.isAndroid;
export default class Basics {
    async screen_is_shown(){
        const what_to_seek = this.get_what_to_seek()
        return await $(what_to_seek)
    }

    async tap_on(where){
        const whereTapOn = this.get_where_tap_on(where)
        let findWhereTapOn = await $(whereTapOn);
        let retry=5
        while (!(await findWhereTapOn.isDisplayed()) && retry > 0 ) {
            retry=retry-1
            await driver.performActions([{
                type: 'pointer',
                id: 'example',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 1000, x: 500, y: 500 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
            findWhereTapOn = await $(whereTapOn);
        }
        const elementLocation = await findWhereTapOn.getLocation();
        const elementSize = await findWhereTapOn.getSize();
        const screenHeight = (await driver.getWindowSize()).height;
        const elementBottom = elementLocation.y + elementSize.height;
        const isNearBottom = elementBottom > screenHeight ;

        if (isNearBottom) {
            console.log('The button is outof screen bottom');
            await driver.performActions([{
                type: 'pointer',
                id: 'example',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 500, y: 1500 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 1000, x: 500, y: 500 },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
        }            
        await browser.pause(100);       
    

        findWhereTapOn = await $(whereTapOn);
        await findWhereTapOn.click()
        await browser.pause(200);
    }
    
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
//                switch (browser.capabilities.platformName) {
                    if (isAndroid) {
                     return '//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button'
                    } else {
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
                        return '//XCUIElementTypeButton[@name="Izquierda"][1]'
//                        return '//XCUIElementTypeOther[@name="Izquierda"][1]|//XCUIElementTypeButton[@name="Izquierda"][1]'
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


    size = driver.get_window_size()
    start_x = size["width"] * 0.05  
    end_x = size["width"] * 0.5  
    y = size["height"] / 2  
    actions = TouchAction(driver)
    actions.press(x=start_x, y=y).wait(200).move_to(x=end_x, y=y).release().perform()

    
}
