@test
Feature: Test


    Scenario: TC - Mock-Server - Check
		Given mock server is cleared
		And just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		And events list screen is shown
#		When get requests