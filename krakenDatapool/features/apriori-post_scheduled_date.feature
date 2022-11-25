Feature: PostsCreate past date

@user1 @web
Scenario: Como usuario del sistema quiero crear un post
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I wait for 2 seconds
And I click sign in
And I wait for 3 seconds
Then I click posts link
And I click new post
And I enter post title "Bytecard"
And I enter post description "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat."
And I wait for 10 seconds
And I click publish post
And I click right now
And I wait for 1 seconds
And I click on schedule for later
And I enter post date "2022-02-14"
And I enter post time "15:50"
And I wait for 10 seconds
And I click final review
And I wait for 1 seconds
And I click schedule post
And I wait for 15 seconds
