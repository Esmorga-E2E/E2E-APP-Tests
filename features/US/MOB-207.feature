@MOB-207
Feature: MOB-207

    Scenario: TC - Wellcome Screen -  End-to-End - Verification of Unique Device ID Display
		Given just opened app
    And user status is unregistred
    And wellcome screen is shown
    And help
    Then unique device identifier content is shown
    And store unique device identifier as variable id_device