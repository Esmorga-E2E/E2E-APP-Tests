@MOB-64
Feature: MOB-64

	Scenario: TC - Unregistred My Events List
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on my events
		Then my events list screen is shown

	@ios @finished
    Scenario: TC - Login
		Given just opened app
		And user status is unregistred
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When write esmorga.test.04@yopmail.com on field email
		And write Password!4 on field password
		And mock get my events to response 404
		And tap on primary button
		Then user status is logged in
		And events list screen is shown
		And mock get my events to response 404

	@android @finished
    Scenario: TC - Login
		Given just opened app
		And user status is unregistred
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When write esmorga.test.05@yopmail.com on field email
		And write Password!5 on field password
		And mock get my events to response 404
		And tap on primary button
		Then user status is logged in
		And events list screen is shown
		And mock get my events to response 404

	@finished
    Scenario: MOB-TC-153: TC - My Events Screen - Handle loading screen when retrieving events
		Given just opened app
		And user status is registred
		And events list screen is shown
		And delay 10 seconds to get my events
		When tap on my events
		Then my events list screen is shown
		And loading events content is shown


