Feature: Crear page

@user1 @web
Scenario: Como usuario inicio sesion y creo una página
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click sign in
  And I wait for 2 seconds
  Then I click pages button
  And I click new page
  And I click first view with selector "textarea"
  And I enter text "Kraken Page"
  And I click pages content field
  And I enter text "This is a kraken test page"
  And I click on publish button
  And I click on continue button
  And I click on publish page button
  And I wait for 2 seconds