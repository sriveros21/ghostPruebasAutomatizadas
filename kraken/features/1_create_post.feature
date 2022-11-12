Feature: CreatePost

@user1 @web
Scenario: Como usuario del sistema quiero crear un post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 15 seconds
  Then I click new post
  And I wait for 15 seconds
  And I enter post title "My First Post"
  And I wait for 10 seconds
  And I enter post description "This is the description of this test post"
  And I wait for 15 seconds
  And I click publish post
  And I wait for 15 seconds
  And I click final review
  And I wait for 15 seconds
  And I click post now
  And I wait for 15 seconds




