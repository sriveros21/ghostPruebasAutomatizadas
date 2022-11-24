Feature: CreateMember

@user1 @web
Scenario: Como usuario del sistema quiero crear un miembro (Faker incorrect format)

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
  Then I click new member
  And I wait for 10 seconds
  And I enter a random name as member name "$name_3"
  And I wait for 10 seconds
  And I enter a number as member email "$number_2"
  And I wait for 10 seconds
  And I click save new member
  And I wait for 10 seconds
  And I click members link
  And I wait for 10 seconds