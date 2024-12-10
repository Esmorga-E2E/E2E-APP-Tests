Feature: Test registred
	@ios @smoke @finished
    Scenario: TC - Login MVP - Login
		Given just opened app
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When write esmorga.test.04@yopmail.com on field email
		And write Password!4 on field password
		And tap on primary button
		Then events list screen is shown
	@android @smoke @finished
    Scenario: TC - Login MVP - Login
		Given just opened app
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When write esmorga.test.05@yopmail.com on field email
		And write Password!5 on field password
		And tap on primary button
		Then events list screen is shown

	@finished
	Scenario: TC - Tap Back inside Details
		Given just opened app
		And events list screen is shown
		When tap on event
		Then event details screen is shown
		When tap on back
		Then events list screen is shown

	
	Scenario: TC - Quit an Event
		Given just opened app
		And events list screen is shown
		When tap on event
		Then event details screen is shown
		And tap on primary button
		Then quit snackbar is shown

	
	Scenario: TC - Join an Event
		Given just opened app
		And events list screen is shown
		When tap on event
		Then event details screen is shown
		And tap on primary button
		Then joined snackbar is shown

	@finished
	Scenario: TC - Navigation Bar
		Given just opened app
		And events list screen is shown
		When tap on my events
		Then my events list screen is shown
		When tap on explore
		Then events list screen is shown
		When tap on profile

	Scenario: TC - Test in progress
		Given just opened app
		And events list screen is shown
		When tap on my events
		Then get page