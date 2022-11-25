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
And I enter post title "Opela"
And I wait for 10 seconds
And I enter post description "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
And I wait for 10 seconds
And I click publish post
And I wait for 10 seconds
And I click right now
And I wait for 10 seconds
And I click on schedule for later
And I wait for 10 seconds
And I enter post time "0:23"
And I wait for 10 seconds
And I click final review
And I wait for 15 seconds
And I click schedule post
And I wait for 15 seconds
