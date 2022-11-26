Feature: Editar integracion

@user1 @web
Scenario: Como usuario inicio sesion y edito una integracion existente
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
And I click on an existing integration
And I wait for 2 seconds
And I click on integration name textarea
And I wait for 2 seconds
And I enter text "$name_1"
And I wait for 2 seconds
And I click on save button
And I wait for 2 seconds
And I click settings button
And I wait for 2 seconds
And I click integrations button
And I wait for 2 seconds
