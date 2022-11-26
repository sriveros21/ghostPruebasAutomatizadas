Feature: PostsCreate

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
Then I click posts link
And I wait for 15 seconds
And I click new post
And I wait for 15 seconds
And I enter post title "Otcom"
And I wait for 10 seconds
And I enter post description "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
And I wait for 10 seconds
And I click publish post
And I wait for 10 seconds
And I click right now
And I wait for 10 seconds
And I click on schedule for later
And I wait for 10 seconds
And I enter post time "8:12"
And I wait for 10 seconds
And I click final review
And I wait for 15 seconds
And I click schedule post
And I wait for 15 seconds
