Feature: Test unregistred
	Scenario: TC - Event manager MVP - Check event list and event details for a certain event
		Given opened app
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on event
		Then event details screen is shown
		
	Scenario: TC - Event manager MVP - Go Back From Fatures
		Given opened app
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown
		When tap on event
		Then event details screen is shown
		When tap on back
		Then events list screen is shown

	Scenario: TC - Navigation Bar
		Given opened app
		And wellcome screen is shown
		When tap on secondary button
		And events list screen is shown
		When tap on explore
		Then events list screen is shown
		When tap on my events
		Then my events list screen is shown
