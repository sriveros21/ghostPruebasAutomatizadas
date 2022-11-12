Feature: EditPost

@user1 @web
Scenario: Como usuario del sistema quiero editar un post

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
  And I click first post  
  And I wait for 10 seconds
  Then I click edit post
  And I wait for 10 seconds
  And I enter post title "This is an Edited Post"
  And I wait for 10 seconds
  And I enter post description "This post has been edited. "
  And I wait for 15 seconds
  And I click update post
  And I wait for 15 seconds
  And I click back analytics
  And I wait for 10 seconds
  And I click posts link
  And I wait for 10 seconds  
