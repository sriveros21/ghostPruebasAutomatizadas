Feature: Edit tag

@user1 @web
Scenario: Como usuario inicio sesion y edito un tag existente
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click sign in
  And I wait for 2 seconds
  Then I click tag button
  And I click on existing tag
  And I click tag name
  And I enter text " Edited"
  And I click save
  And I wait for 2 seconds
  And I click tag button
  And I wait for 2 seconds