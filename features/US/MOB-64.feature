@MOB-64
Feature: MOB-64
	Scenario: TC - Unregistred Details screen
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on my events
		Then my events list screen is shown

	@ios	
    Scenario: TC - Login
		Given just opened app
		And user status is unregistred
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When write esmorga.test.04@yopmail.com on field email
		And write Password!4 on field password
		And tap on primary button
		Then user status is logged in
		And events list screen is shown


	@android
    Scenario: TC - Login
		Given just opened app
		And user status is unregistred
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When write esmorga.test.05@yopmail.com on field email
		And write Password!5 on field password
		And tap on primary button
		Then user status is logged in


    Scenario: MOB-TC-153: TC - My Events Screen - Handle loading screen when retrieving events
		Given just opened app
		And user status is registred
		And events list screen is shown
		When tap on my events
		Then my events list screen is shown


