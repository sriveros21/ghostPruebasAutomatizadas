Feature: Configurar pagina

@user1 @web
Scenario: Como usuario inicio sesion y configuro una pagina existente
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
And I wait for 2 seconds
Then I click pages button
And I click on existing page
And I click on page setting button
And I click on excerpt textarea
And I enter text "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices."
And I click back button
And I wait for 2 seconds 
And I click on existing page
And I click on page setting button
And I wait for 2 seconds
