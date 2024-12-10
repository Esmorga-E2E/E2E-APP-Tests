import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import Wellcome from '../screenobjects/wellcome.screen.js';
import EventsList from '../screenobjects/eventsList.screen.js';
import MyEventsList from '../screenobjects/myEventsList.screen.js';
import EventDetails from '../screenobjects/eventDetails.screen.js';
import Login from '../screenobjects/login.screen.js';


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
    const whereTapOn = screens[status.screen].get_where_tap_on(where)
    await browser.pause(500); 
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
        await browser.pause(100);       
        findWhereTapOn = await $(whereTapOn);
    }
    await findWhereTapOn.click();
    await browser.pause(500);
});

When(/^write (.*) on field (.*)$/, async (text,where) => {
    console.log("field "+where)
    const whereWriteOn = screens[status.screen].get_where_to_write(where)
    const findWriteOn = await $(whereWriteOn);
    await findWriteOn.addValue(text);
});

Then(/^(.*) screen is shown$/, async (screen) => {
    console.log(screen+" screen is show")
    await browser.pause(500);
    status.screen=screen
    const what_to_seek = screens[status.screen].get_what_to_seek()
    const find_what_to_seek = await $(what_to_seek)
    await expect(find_what_to_seek).toBeDisplayed();

});
Then(/^(.*) snackbar is shown$/, async (snackbar) => {
    console.log(snackbar+" snackbar is show")
    const what_to_seek = screens[status.screen].get_what_snackbar_seek(snackbar)
    const find_what_to_seek = await $(what_to_seek)
    await expect(find_what_to_seek).toBeDisplayed();

});
Then ('get page', async () => {
//    const page= await     driver.getPageSource()
//    console.log(page)
/*
const elementos = await $$('//*');

// Filtrar los que tienen accessibilityId
const elementosConAccessibilityId = [];
for (const elemento of elementos) {
    const accessibilityId = await elemento.getAttribute('content-desc');
    if (accessibilityId) {
        elementosConAccessibilityId.push({ elemento, accessibilityId });
    }
}

// Mostrar los Accessibility IDs encontrados
elementosConAccessibilityId.forEach((item) => {
    console.log(`Elemento: ${item.elemento}, AccessibilityId: ${item.accessibilityId}`);
});
*/
console.log("To do")
});
