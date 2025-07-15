@MOB-49
Feature: MOB-49

    Scenario: TC - Forgot Password Redirects to Reset Screen
		Given just opened app
		And user status is unregistred
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When tap on primary button
		Then login screen is shown
		When tap on Forgot your password text
		Then help
		Then recover your password screen is shown
