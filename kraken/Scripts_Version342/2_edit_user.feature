Feature: EditUser

@user1 @web
Scenario: Como usuario quiero editar la informacion de mi perfil
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 2 seconds
  And I click userpic
  And I wait for 2 seconds
  And I click your profile
  And I wait for 2 seconds
  And I enter location "Bogota"
  And I wait for 2 seconds
  And I click save user changes
  And I wait for 2 seconds
  And I click staff link
  And I wait for 2 seconds

