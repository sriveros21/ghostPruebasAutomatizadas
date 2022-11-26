Feature: Crear integracion

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
And I enter text "$name_1"
And I wait for 2 seconds
And I click on create button
And I wait for 2 seconds
And I click on integration description
And I wait for 2 seconds
And I enter text "$string_1"
And I wait for 2 seconds
And I click on save button
And I wait for 2 seconds
And I click settings button
And I wait for 2 seconds
And I click integrations button
And I wait for 2 seconds
