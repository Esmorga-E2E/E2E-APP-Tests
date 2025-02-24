@MOB-66
Feature: MOB-66
	Scenario: TC - Unregistred Details screen
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on event
		Then event details screen is shown
		Then Identificate para apuntarte button content is shown
		
	@ios 
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

	@android 
    Scenario: TC - Login MVP - Login
		Given just opened app
		And user status is unregistred
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When write esmorga.test.05@yopmail.com on field email
		And write Password!5 on field password
		And tap on primary button
		Then user status is logged in
		And events list screen is shown


	Scenario: TC - Join an Event
		Given just opened app
		And user status is logged in
		And events list screen is shown
		When tap on event
		Then event details screen is shown
		When tap on primary button
		Then rajarse button content is shown
		When tap on primary button
		Then apuntarse button content is shown