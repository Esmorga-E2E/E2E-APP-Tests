Feature: Test unregistred
	@finished 
	Scenario: TC - Event manager MVP - Reach login from event details
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on event
		Then event details screen is shown
		When tap on primary button
		Then login screen is shown

	@finished
	Scenario: TC - Navigation Bar
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		And events list screen is shown
		When tap on explore
		Then events list screen is shown
		When tap on my events
		Then my events list screen is shown

	@finished 
	Scenario: TC - Reach login from my events
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		When tap on my events
		Then my events list screen is shown
		When tap on login
		Then login screen is shown

	@finished
	Scenario: TC - Event manager MVP - Go Back From Details screen
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on event
		Then event details screen is shown
		When tap on back
		Then events list screen is shown

	@finished
	Scenario: TC - Event manager MVP - Tap on Navegate
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on event
		Then event details screen is shown
		When tap on secondary button
