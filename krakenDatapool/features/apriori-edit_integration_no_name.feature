Feature: Editar integracion sin nombre

@user1 @web
Scenario: Como usuario inicio sesion y edito una integracion existente
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
Then I click settings button
And I click integrations button
And I click on an existing integration
And I click on integration name textarea
And I enter text ""
And I click on save button
And I click settings button
And I click integrations button
And I wait for 2 seconds
