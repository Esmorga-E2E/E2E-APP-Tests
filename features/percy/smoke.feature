@visual
Feature: Test Visual Changes
	Scenario: TC - Visual
		Given just opened app
		Then wellcome screen is shown
		And compare screen
		When tap on secondary button
		Then events list screen is shown
		And compare screen
		When tap on event
		Then event details screen is shown
		And compare screen
		When tap on primary button
		Then login screen is shown
		When write esmorga.test.04@yopmail.com on field email
		And compare screen
