Feature: Sign up

@user1 @web
Scenario: Como usuario ingreso al sistema con credentiales previamente registradas
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  Then I click sign in
  And I wait for 10 seconds
  And I click userpic
  And I wait for 10 seconds
  And I click sign out
  And I wait for 10 seconds
