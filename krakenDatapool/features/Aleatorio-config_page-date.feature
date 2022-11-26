Feature: Configurar pagina fecha erronea

@user1 @web
Scenario: Como usuario inicio sesion y configuro una pagina existente
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
And I wait for 2 seconds
Then I click pages button
And I wait for 2 seconds
And I click on existing page
And I wait for 2 seconds
And I click on page setting button
And I wait for 2 seconds
And I enter a random page date "$email_1"
And I wait for 2 seconds
And I click on excerpt textarea
And I wait for 10 seconds
