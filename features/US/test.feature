Feature: Test

	Scenario: TC - Firs open unregistred
		Given mock server is cleared
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown

	Scenario: TC - ReOpen
		Given just opened app
		And user status is unregistred
		And wellcome screen is shown
		When tap on secondary button
		Then events list screen is shown


 #		Given mock server is cleared
#		When get requests