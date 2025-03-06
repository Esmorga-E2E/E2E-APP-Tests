import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import percyScreenshot from '@percy/appium-app'



import Wellcome from '../screenobjects/wellcome.screen.js';
import EventsList from '../screenobjects/eventsList.screen.js';
import MyEventsList from '../screenobjects/myEventsList.screen.js';
import EventDetails from '../screenobjects/eventDetails.screen.js';
import Login from '../screenobjects/login.screen.js';
import Register from '../screenobjects/register.screen.js';
import RegisterConfirmation from '../screenobjects/registerConfirmation.screen.js';
import mailApp from '../screenobjects/mailApp.screen.js';
let screenshots=[]

const wellcome_screen = new Wellcome()
const events_list_screen = new EventsList()
const my_events_list_screen = new MyEventsList()
const event_details_screen = new EventDetails()
const login_screen = new Login()
const register_screen = new Register()
const register_confirmation_screen = new RegisterConfirmation()
const mail_app_screen = new mailApp()

const screens = {
    wellcome: wellcome_screen,
    'events list': events_list_screen,
    'my events list': my_events_list_screen,
    'event details':event_details_screen,
    login:login_screen,
    register:register_screen,
    "register confirmation": register_confirmation_screen,
    "mail app": mail_app_screen

}
const status={}
status.screen='wellcome'
status.registred=false

Given('just opened app', async () => {
    console.log("Open APP ")
    await driver.pause(1000);
    
});

When(/^tap on (.*)$/, async (where) => {
    const whereTapOn = screens[status.screen].get_where_tap_on(where)
    await browser.pause(1000); 
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
    }
    try{
        expect(await $(whereTapOn)).toBeDisplayed
        findWhereTapOn = await $(whereTapOn);
        expect(await findWhereTapOn.click())
        console.log("✅ Tap on "+where)
    }catch(err){
        console.log("❌ Tap on "+where)
        throw err
    }
    await browser.pause(500);
});

When(/^write (.*) on field (.*)$/, async (text,where) => {
    
    const whereWriteOn = screens[status.screen].get_where_to_write(where)
    const msg="❌ Field "+where
    try{
        await expect(await $(whereWriteOn)).toBeDisplayed();
        const findWriteOn = await $(whereWriteOn);
        await expect(await findWriteOn.addValue(text))
        console.log(msg.replace("❌","✅"));
    }catch(err){
        console.log(msg);
        throw err
    }
    if (browser.isAlertOpen && await driver.isKeyboardShown()) { 
        await driver.hideKeyboard();     
    }
});

Then(/^(.*) screen is shown$/, async (screen) => {
    await browser.pause(2000);
    status.screen=screen
    const what_to_seek = screens[status.screen].get_what_to_seek(status.registred)
    const msg=("❌ "+screen+" screen is shown")         
    try{
        await expect(await $(what_to_seek)).toBeDisplayed();
        console.log(msg.replace("❌","✅"));
    }catch(err){
        console.log(msg);
        throw err
    }
    


    const testIdentifier = `${status.screen} ${status.user_status}`
    if (!screenshots.includes(testIdentifier)) {
        console.log("\tChecking if capture is required" )
        await percyScreenshot(testIdentifier);
        screenshots.push(testIdentifier)
    }


});

Then(/^(.*) snackbar is shown$/, async (snackbar) => {
    console.log(snackbar+" snackbar is show")
    const what_to_seek = screens[status.screen].get_what_snackbar_seek(snackbar)
    expect(await $(what_to_seek)).toBeDisplayed();
});


Then ('get page', async () => {
console.log('\n\n\
    Page source: \n\n\
    ' + await driver.getPageSource() + '\n\n\
    ')
});
Given(/^user status is (.*)$/, async (user_status) => {
    if (user_status=='logged in'){
        status.registred=true
    }else{  
        status.registred=false
    }
});


Then (/^(.*) content is shown$/, async (what) => {
    await browser.pause(3000);
    const What = screens[status.screen].get_where_tap_on(what)
    const msg=("❌ "+what+" content is shown")         
    try{
        await expect(await $(What)).toBeDisplayed();
        console.log(msg.replace("❌","✅"));
    }catch(err){
        console.log(msg);
        throw err
    }
});


Then (/^mock (.*) to response (.*)$/, async (what,response) => {
        await browser.pause(1000);
        await screens[status.screen].mock(what,response)
        await browser.pause(1000);
});

Given (/^mock server is cleared$/, async () => {
    await screens[status.screen].clear_logs()
});
When (/^get requests$/, async () => {        
        console.log(await screens[status.screen].get_logs())
});

When (/^delay (.*) seconds to (.*)$/, async (time,what) => {
    await browser.pause(1000);
    await screens[status.screen].delay(what,parseInt(time, 10))
    await browser.pause(1000);
});
When (/^wait (.*) seconds for (.*)$/, async (time,use_less) => {
    await browser.pause(parseInt(time, 10)*1000);
})
Then ('help', async () => {
    console.log('\n\n\
    Help: \n\n\
    ')
    await browser.pause(2000);
//    const pageSource = await driver.getPageSource();
//    console.log(pageSource);

    const elements = await $$('//android.widget.TextView | //XCUIElementTypeStaticText')
    let reconstructedXpath=''
    if ( elements.length > 0 ) { 
        console.log('\n\tPosible title element:');
        const name =await elements[0].getAttribute('name').catch(() => null);
        if (driver.isAndroid) {
            const classname = await elements[0].getAttribute('class').catch(() => null);
            reconstructedXpath=`//${classname}[@name="${name}"]`
            console.log(`\t\t ${name} reconstructed Xpath: ${reconstructedXpath}`)


        }else{
            const type =await elements[0].getAttribute('type').catch(() => null);
            reconstructedXpath=`//${type}[@name="${name}"]`
            console.log(`\t\t ${name} Reconstructed Xpath: ${reconstructedXpath}`)


        }    
    }
    //[@clickable="true"]
    //[@clickable="true"]
    //[@clickable="true"]
    const clickableElements = await $$('//android.widget.Button | //android.widget.TextView | //android.widget.ImageView | //android.view.View | //XCUIElementTypeButton | //XCUIElementTypeLink');
    if ( clickableElements.length > 0 ) {
        console.log('\n\tPosible clickable elements:');
        if (driver.isAndroid) {

            const buttons_with_text = await $$('//android.view.View[@clickable="true" and .//android.widget.Button and .//android.widget.TextView]');
            for (const button of buttons_with_text) {  
                const textView = await button.$('.//android.widget.TextView');
    
                if (await textView.isExisting()) {
                    const textContent = await textView.getText(); 
            
                    console.log(`\t\t ${textContent} Reconstructed Xpath: //android.view.View[@clickable="true" and .//android.widget.Button and .//android.widget.TextView[@text="${textContent}"]]`);
                }           
            }

            const buttons_with_icon = await $$('//android.view.View[@clickable="true" and .//android.widget.Button and .//android.view.View]');
            for (const button of buttons_with_icon) {
                const View = await button.$('.//android.view.View[@content-desc and not(@content-desc="null")]');
    
                if (await View.isExisting()) {
                    const viewContent = await View.getAttribute('content-desc')
                    console.log(`\t\t ${viewContent} Reconstructed Xpath: //android.view.View[@clickable="true" and .//android.widget.Button and .//android.view.View[@content-desc="${viewContent}"]]`);
                }           
            }

        }
        for (const element of clickableElements) {
            const name = await element.getAttribute('name').catch(() => null);
            if (driver.isAndroid) {
                const classname = await element.getAttribute('class').catch(() => null);
                const text = await element.getAttribute('text').catch(() => null);

                
                
/*                
                if (text != null ){
                    reconstructedXpath=`//${classname}[@text="${text}"]`
                    console.log(`\t\t ${name} Reconstructed Xpath: ${reconstructedXpath}`)
                }else{
                    reconstructedXpath=`//${classname}[@name="${name}"]`
                    console.log(`\t\t ${name} Reconstructed Xpath: ${reconstructedXpath}`)
                }
*/
            }else{
                const type =await element.getAttribute('type').catch(() => null);
                reconstructedXpath=`//${type}[@name="${name}"]`
                console.log(`\t\t ${name} Reconstructed Xpath: ${reconstructedXpath}`)

            }
        } 
    }
    console.log('\n\n\n\n')

});