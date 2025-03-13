@MOB-133
Feature: MOB-133

    Scenario: TC - Login MVP - Login
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


	Scenario: TC - Join an Event
		Given just opened app
		And user status is logged in
		And events list screen is shown
		When tap on event
		Then event details screen is shown
		And help
		And enable airplane mode
		When tap on primary button
		Then help
		And disable airplane mode
