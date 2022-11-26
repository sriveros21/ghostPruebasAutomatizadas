Feature: PostsCreate

@user1 @web
Scenario: Como usuario del sistema quiero crear un post
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I wait for 2 seconds
And I click sign in
And I wait for 2 seconds
Then I click posts link
And I wait for 2 seconds
And I click new post
And I wait for 2 seconds
And I enter post title "Opela"
And I wait for 2 seconds
And I enter post description "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros."
And I wait for 2 seconds
And I click publish post
And I wait for 2 seconds
And I click right now
And I wait for 2 seconds
And I click on schedule for later
And I wait for 2 seconds
And I enter post time "5:02"
And I wait for 2 seconds
And I click final review
And I wait for 2 seconds
And I click schedule post
And I wait for 2 seconds
