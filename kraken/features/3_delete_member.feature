Feature: DeleteMember

@user1 @web
Scenario: Como usuario del sistema quiero borrar un miembro

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I click members link
  And I wait for 10 seconds
  And I click first member
  And I wait for 10 seconds
  And I click member settings
  And I wait for 10 seconds
  Then I click delete member
  And I wait for 10 seconds
  And I click confirm delete member
  And I wait for 10 seconds
  And I click leave
  And I wait for 10 seconds
