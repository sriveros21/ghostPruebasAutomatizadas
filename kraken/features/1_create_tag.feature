Feature: Crear Tag

@user1 @web
Scenario: Como usuario inicio sesion y creo un tag
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click sign in
  And I wait for 2 seconds
  Then I click tag button
  And I click new tag
  And I click tag name
  And I enter text "Kraken Tag"
  And I click tag description
  And I enter text "Description for new Kraken Tag"
  And I click save
  And I wait for 2 seconds
  And I click tag button
  And I wait for 2 seconds