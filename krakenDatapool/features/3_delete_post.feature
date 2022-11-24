Feature: DeletePost

@user1 @web
Scenario: Como usuario del sistema quiero borrar un post

  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 10 seconds
  And I click post section 
  And I wait for 10 seconds
  Then I click first post  
  And I wait for 10 seconds
  And I click edit post
  And I wait for 10 seconds
  And I click post settings
  And I wait for 10 seconds
  And I click delete post
  And I wait for 10 seconds
  And I click confirm delete
  And I wait for 10 seconds