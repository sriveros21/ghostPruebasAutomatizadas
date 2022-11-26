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
And I wait for 2 seconds
And I click new post
And I wait for 2 seconds
And I enter post title "Bytecard"
And I enter post description "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
And I wait for 2 seconds
And I click publish post
And I wait for 2 seconds
And I click right now
And I wait for 1 seconds
And I click on schedule for later
And I wait for 2 seconds
And I enter post date "2022-05-05"
And I enter post time "11:32"
And I wait for 2 seconds
And I click final review
And I wait for 1 seconds
And I click schedule post
And I wait for 15 seconds
