Feature: ConfSettingsPost

@user1 @web
Scenario: Como usuario del sistema quiero poder configurar los settings de un post

  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  Then I click posts link
  And I wait for 10 seconds
  And I click first post  
  And I wait for 10 seconds
  And I click post settings
  And I wait for 10 seconds
  And I enter excerpt "This is a test about the post settings"
  And I wait for 10 seconds 
  And I click posts link
  And I wait for 10 seconds  