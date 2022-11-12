Feature: Editar pagina

@user1 @web
Scenario: Como usuario inicio sesion y edito una pagina existente
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click sign in
  And I wait for 2 seconds
  Then I click pages button
  And I click on existing page
  And I click first view with selector "textarea"
  And I enter text " Edited"
  And I click update button
  And I wait for 2 seconds
  And I click back button
  And I wait for 2 seconds