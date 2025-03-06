@MOB-201
Feature: MOB-201

    Scenario: TC - Login MVP - Register
		Given just opened app
		And user status is unregistred
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When tap on secondary button
		Then register screen is shown
		When write Esmorga on field name
		And write Esmorga on field last name
		And write prueba@esmorga.canarte.org on field email
		And write Password!1 on field password
		And write Password!1 on field retry password
		And mock post register to response 404
		And tap on primary button
		Then help
		Then errors screen is shown
		And tap on retry button
		Then help
		Then register screen is shown
		And tap on back button
		Then help



