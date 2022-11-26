Feature: EditMember

@user1 @web
Scenario: Como usuario del sistema quiero editar un miembro

Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
When I enter email "<USERNAME>"
And I wait for 2 seconds
And I enter password "<PASSWORD>"
And I wait for 2 seconds
And I click sign in
And I wait for 10 seconds
And I click members link
And I wait for 10 seconds
Then I click first member
And I wait for 10 seconds
And I enter member name "œ∑´®†¥¨ˆøπ“‘"
And I wait for 10 seconds
And I enter member email "␢"
And I wait for 10 seconds
And I click save member
And I wait for 10 seconds
And I click members link
And I wait for 10 seconds
