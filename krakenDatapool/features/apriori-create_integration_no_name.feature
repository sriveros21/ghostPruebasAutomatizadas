Feature: Crear integracion sin nombre

@user1 @web
Scenario: Como usuario inicio sesion y creo una integracion
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
And I wait for 2 seconds
Then I click settings button
And I wait for 2 seconds
And I click integrations button
And I wait for 2 seconds
And I click add custom integration button
And I wait for 2 seconds
And I click on integration name
And I wait for 2 seconds
And I click on create button
And I wait for 5 seconds
