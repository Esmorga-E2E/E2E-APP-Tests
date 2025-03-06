import axios from "axios";

import dotenv from 'dotenv';
dotenv.config();

const HOST=process.env.MOCK_SERVER_HOST
const USERNAME=process.env.MOCK_SERVER_USERNAME
const PASSWORD=process.env.MOCK_SERVER_PASSWORD

const PORT = 443; // Ajusta el puerto si es diferente
const BASE_URL = `https://${HOST}:${PORT}`;
let req = {}
let res = {}

const encodedCredentials = Buffer.from(`${USERNAME}:${PASSWORD}`).toString("base64");
const headers = {
    "Authorization": `Basic ${encodedCredentials}`,
    "Content-Type": "application/json"
};

async function addMock(httpRequest,httpResponse) {

    try {
        await axios.put(`${BASE_URL}/mockserver/expectation`, {
	"httpRequest": httpRequest,
	
	 "httpResponse": httpResponse,
	"priority": 10,
	"times": { "remainingTimes": 1 } 
        }, { headers });

        console.log("✅ Add Mock "+httpRequest.method+" "+httpRequest.path+" with response "+httpResponse.statusCode);   
    } catch (err) {
        console.error("❌ Error adding mock:", err.response ? err.response.data : err);
    }
}

async function addForwardDelay(httpRequest,time) {
    try {
        await axios.put(`${BASE_URL}/mockserver/expectation`, {
	"httpRequest": httpRequest,
	
    "httpForward": {
        "host": "127.0.0.1",
        "port": 3000,
        "scheme": "HTTP",
        "delay": {
          "timeUnit": "SECONDS",
          "value": time
        }
      },
	"priority": 10,
	"times": { "remainingTimes": 1 } 
        }, { headers });

        console.log("✅ Add Froward +"+time+" secs Delay "+httpRequest.method+" "+httpRequest.path);   
    } catch (err) {
        console.error("❌ Error adding mock:", err.response ? err.response.data : err);
    }
}


async function getRequests() {
    try {
        const response = await axios.put(`${BASE_URL}/mockserver/retrieve?type=LOGS`, {
            "path": "/v1/events"
        },  { headers });

        return response.data
    } catch (error) {
        console.error('Error retrieving requests:', error);
    }
}
async function clearAllLogs() {
    try {
        await axios.put(`${BASE_URL}/mockserver/clear?type=log`, {}, { headers });
        console.log("All logs cleared");
    } catch (error) {
        console.error('Error clearing logs:', error);
    }
}

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
            case 'back button':
                    switch (browser.capabilities.platformName) {
                        case "Android":
                        case "android":     
                            console.log("try to push back")
                            return '//android.view.View[@clickable="true" and .//android.widget.Button and .//android.view.View[@content-desc="Back icon"]]'

                        case "iOS":
                        case "ios":
                            return '//XCUIElementTypeButton[@name="Izquierda"]'
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

    async get_logs(){
        return await getRequests()
    }
    async clear_logs(){
        await clearAllLogs()
    }
    async mock(what,response){
        switch(what){
            case 'get events':
                switch (response) {
                    case "200 with events":
                        req = {
                                        "method": "GET",
                                        "path":'/v1/events',
                                        }
                        res = {
                                        "body":{"totalEvents":1,"events":[{"eventId":"66ffd9624bd73c0dbe7e2d6d","eventName":"lololo","eventDate":"2025-03-08T10:05:30.915Z","description":"Join us for an unforgettable celebration as we dance into the apocalypse.","eventType":"Party","imageUrl":"image.url","location":{"lat":43.35525182148881,"long":-8.41937931298951,"name":"A Coruña"},"tags":["DANCE","MUSIC"]}]},
                                        "statusCode": 200
                                    }
                        await addMock(req,res)
                        break
                    case "404":
                        req = {
                                        "method": "GET",
                                        "path":"/v1/events",
                                        }
                        res = {
                                        "body":{},
                                        "statusCode": 404
                                    }
                        await addMock(req,res)
                        break
                    }
                    break
            case 'get my events':
                switch (response) {
        
                    case "404":
                        
                        req = {
                                "method": "GET",
                                "path":"/v1/account/events",
                            }
                        res = {
                                "body":{},
                                "statusCode": 404
                            }
                        await addMock(req,res)
                        break
                }
                break
            case 'post register':
                req = {
                    "method": "POST",
                    "path":"/v1/account/register",
                }

                switch (response) {
                    case "201":
                        res = {
                            "body":{
                                "accessToken": "ACCESS_TOKEN",
                                "refreshToken": "REFRESH_TOKEN",
                                "ttl": 600,
                                "profile": {
                                    "name": "John",
                                    "lastName": "O'Donnel-Vic",
                                    "email": "eventslogin01@yopmail.com"
                                }},
                            "statusCode": 201
                        }
                        await addMock(req,res)
                        break

                    case "409":
                        res = {
                            "body":{},
                            "statusCode": 409
                        }
                        await addMock(req,res)
                        break
        
                }
                break
            }
    }
    async delay(what,time){
        switch(what){
            case 'get my events':
                req = {
                    "method": "GET",
                    "path":"/v1/account/events",
                    }
                addForwardDelay(req,time)
                break 

        }
    }       
    
}
