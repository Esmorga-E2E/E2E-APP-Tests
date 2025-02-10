import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import percyScreenshot from '@percy/appium-app'



import Wellcome from '../screenobjects/wellcome.screen.js';
import EventsList from '../screenobjects/eventsList.screen.js';
import MyEventsList from '../screenobjects/myEventsList.screen.js';
import EventDetails from '../screenobjects/eventDetails.screen.js';
import Login from '../screenobjects/login.screen.js';
let screenshots=[]

const wellcome_screen = new Wellcome()
const events_list_screen = new EventsList()
const my_events_list_screen = new MyEventsList()
const event_details_screen = new EventDetails()
const login_screen = new Login()

const screens = {
    wellcome: wellcome_screen,
    'events list': events_list_screen,
    'my events list': my_events_list_screen,
    'event details':event_details_screen,
    login:login_screen
}
const status={}
Given('just opened app', async () => {
    console.log("Open APP")
    await driver.pause(1000);
    
});

When(/^tap on (.*)$/, async (where) => {
    console.log("Tap on "+where)
    await screens[status.screen].tap_on(where)
});

When(/^write (.*) on field (.*)$/, async (text,where) => {
    console.log("field "+where)
    const whereWriteOn = screens[status.screen].get_where_to_write(where)
    const findWriteOn = await $(whereWriteOn);
    const result=await findWriteOn.addValue(text);
    if (await driver.isKeyboardShown()) { 
        await driver.hideKeyboard();     
    }
    expect(result)
});

Then(/^(.*) screen is shown$/, async (screen) => {
    status.screen=screen
    expect(await screens[status.screen].screen_is_shown()).toBeDisplayed();

    const testIdentifier = `${status.screen} ${status.user_status}`
    await browser.pause(1000);
    if (screenshots.includes(testIdentifier)) {
        console.log(screen+" screen is show ")
    }else{
        console.log(screen+" screen is show, checking if capture is required" )
        await percyScreenshot(testIdentifier);
        screenshots.push(testIdentifier)
    }



    /*
    const what_to_seek = screens[status.screen].get_what_to_seek()
    const find_what_to_seek = await $(what_to_seek)
    await expect(find_what_to_seek).toBeDisplayed();

    const testIdentifier = `${status.screen} ${status.user_status}`
    await browser.pause(1000);
    if (screenshots.includes(testIdentifier)) {
        console.log(screen+" screen is show ")
    }else{
        console.log(screen+" screen is show, checking if capture is required" )
        await percyScreenshot(testIdentifier);
        screenshots.push(testIdentifier)
    }
*/ 

});

Then(/^(.*) snackbar is shown$/, async (snackbar) => {
    console.log(snackbar+" snackbar is show")
//    console.log(await driver.getPageSource());
    const what_to_seek = screens[status.screen].get_what_snackbar_seek(snackbar)
    const find_what_to_seek = await $(what_to_seek)
    if (await find_what_to_seek.isDisplayed()) {
        console.log('El Snackbar es visible');
    } else {
        console.log('El Snackbar NO es visible');
    }
    await expect(find_what_to_seek).toBeDisplayed();

});
Then ('get page', async () => {
console.log("To be done")
});
Given(/^user status is (.*)$/, async (user_status) => {
    status.user_status=user_status
});

