Feature: Crear integracion

@user1 @web
Scenario: Como usuario inicio sesion y creo una integracion
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
Then I click settings button
And I click integrations button
And I click add custom integration button
And I click on integration name
And I enter text "Hatity"
And I click on create button
And I click on integration description
And I enter text "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus."
And I click on save button
And I click settings button
And I click integrations button
And I wait for 2 seconds
