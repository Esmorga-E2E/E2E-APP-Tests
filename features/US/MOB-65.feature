@MOB-65
Feature: MOB-65
    @MOB-TC-160
    Scenario: MOB-TC-160 - Unregistred My profile
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on profile
		

	@ios @finished
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

	@android @finished
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
	

	@finished
    Scenario: MOB-TC-153: TC - My Events Screen - Handle loading screen when retrieving events
		Given just opened app
		And user status is registred