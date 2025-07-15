Feature: Periodic Role/Profile Sync on App Start

  @JREQ-MOB-343
  Scenario: Happy Path - Profile Sync after 30+ minutes
    Given the app is launched
    And the last successful profile fetch was more than 30 minutes ago
    And a valid accessToken is stored
    When the app restarts
    Then a GET request is sent to "/v1/account/profile"
    And the response status code is 200
    And the locally stored profile data is updated
    And the new timestamp of the fetch is stored

  @JREQ-MOB-343
  Scenario: Happy Path - Profile Sync immediately after install
    Given the app is launched for the first time
    When the app starts
    Then a GET request is sent to "/v1/account/profile"
    And the response status code is 200
    And the locally stored profile data is updated
    And the new timestamp of the fetch is stored

  @JREQ-MOB-343
  Scenario: Unhappy Path - 401 Unauthorized Response
    Given the app is launched
    And the last successful profile fetch was more than 30 minutes ago
    And a valid accessToken is stored
    When the app starts
    Then a GET request is sent to "/v1/account/profile"
    And the response status code is 401
    And the refresh token process is initiated
    Then a GET request is sent to "/v1/account/profile"
    And the response status code is 200
    And the locally stored profile data is updated
    And the timestamp is updated

  @JREQ-MOB-343
  Scenario: Unhappy Path - Other Error Response (e.g., 500)
    Given the app is launched
    And the last successful profile fetch was more than 30 minutes ago
    And a valid accessToken is stored
    When the app starts
    Then a GET request is sent to "/v1/account/profile"
    And the response status code is 500
    And the locally stored profile data is NOT updated
    And the timestamp is NOT updated

  @JREQ-MOB-343
  Scenario: Happy Path - No Sync Needed (within 30 minutes)
    Given the app is launched
    And the last successful profile fetch was less than 30 minutes ago
    When the app starts
    Then NO GET request is sent to "/v1/account/profile"
    And the locally stored profile data is NOT updated
    And the timestamp is NOT updated

  @JREQ-MOB-343
  Scenario: Unhappy Path - No Access Token
    Given the app is launched
    And no accessToken is stored
    When the app starts
    Then NO GET request is sent to "/v1/account/profile"
    And the locally stored profile data is NOT updated
    And the timestamp is NOT updated