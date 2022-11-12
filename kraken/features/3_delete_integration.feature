Feature: Eliminar integracion

@user1 @web
Scenario: Como usuario inicio sesion y elimino una integracion existente
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click sign in
  Then I click settings button
  And I click integrations button
  And I click on an existing integration
  And I click on delete integration button
  And I click on delete confirm integration button
  And I wait for 2 seconds