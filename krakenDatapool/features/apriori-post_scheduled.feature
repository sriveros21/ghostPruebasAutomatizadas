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
And I enter post title "Solarbreeze"
And I wait for 10 seconds
And I enter post description "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh."
And I wait for 10 seconds
And I click publish post
And I wait for 10 seconds
And I click right now
And I wait for 10 seconds
And I click on schedule for later
And I wait for 10 seconds
And I enter post time "11:39"
And I wait for 10 seconds
And I click final review
And I wait for 15 seconds
And I click schedule post
And I wait for 15 seconds
