Feature: MOB-341: Admin Role Management - Backward Compatibility

  @JREQ-MOB-341
  Scenario: Happy Path - Role missing from local storage, successful profile fetch
    Given the app is launched and the user is logged in
    And the "role" field is missing from local storage
    When the app attempts to access user data
    Then a GET request is sent to "{{appURL}}/v1/account/profile" with a valid access token
    And the request is successful (status code 200)
    And the response includes the "role" field
    And the "role" field is stored locally
    And the app continues functioning correctly

  @JREQ-MOB-341
  Scenario: Happy Path - Access token expired, refresh token used successfully
    Given the app is launched and the user is logged in
    And the "role" field is missing from local storage
    And the access token is expired
    When the app attempts to access user data
    Then a refresh token is used to obtain a new access token
    And a GET request is sent to "{{appURL}}/v1/account/profile" with the new access token
    And the request is successful (status code 200)
    And the response includes the "role" field
    And the "role" field is stored locally
    And the app continues functioning correctly

  @JREQ-MOB-341
  Scenario: Happy Path - Role already present in local storage
    Given the app is launched and the user is logged in
    And the "role" field is present in local storage
    When the app attempts to access user data
    Then no GET request is sent to "{{appURL}}/v1/account/profile"
    And the app continues functioning correctly

  @JREQ-MOB-341
  Scenario: Unhappy Path - Profile API returns 500 Internal Server Error
    Given the app is launched and the user is logged in
    And the "role" field is missing from local storage
    When the app attempts to access user data
    And the GET request to "{{appURL}}/v1/account/profile" returns a 500 status code
    Then the default role "USER" is set locally
    And the app continues functioning correctly

  @JREQ-MOB-341
  Scenario: Unhappy Path - Profile API returns 403 Forbidden
    Given the app is launched and the user is logged in
    And the "role" field is missing from local storage
    When the app attempts to access user data
    And the GET request to "{{appURL}}/v1/account/profile" returns a 403 status code
    Then the default role "USER" is set locally
    And the app continues functioning correctly

  @JREQ-MOB-341
  Scenario: Unhappy Path - Profile API returns 401 Unauthorized (no refresh token)
    Given the app is launched and the user is logged in
    And the "role" field is missing from local storage
    And the access token is invalid and no refresh token is available
    When the app attempts to access user data
    Then the default role "USER" is set locally
    And the app displays an appropriate error message to the user
    And the app continues functioning correctly (possibly in a limited mode)