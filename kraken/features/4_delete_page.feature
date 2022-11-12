Feature: Eliminar pagina

@user1 @web
Scenario: Como usuario inicio sesion y elimino una pagina existente
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click sign in
  And I wait for 2 seconds
  Then I click pages button
  And I click on existing page
  And I click on page setting button
  And I click on delete page button
  And I click on delete confirm button
  And I wait for 2 seconds