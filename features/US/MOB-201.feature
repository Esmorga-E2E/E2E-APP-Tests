@MOB-201
Feature: MOB-201

    Scenario: TC - Login MVP - Register Confirmation Screen - Open mail
		Given just opened app
		And user status is unregistred
		Then wellcome screen is shown
		When tap on primary button
		Then login screen is shown
		When tap on secondary button
		Then register screen is shown
		When write Esmorga on field name
		And write Esmorga on field last name
		And write pruebamarisa@esmorga.canarte.org on field email
		And write Password!1 on field password
		And write Password!1 on field retry password

		And tap on primary button
		Then register confirmation screen is shown
		When tap on primary button
		Then get page

