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
And I enter text "Otcom"
And I click on create button
And I click on integration description
And I enter text "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
And I click on save button
And I click settings button
And I click integrations button
And I wait for 2 seconds
