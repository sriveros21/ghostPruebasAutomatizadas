Feature: PostsCreate name too long

    @user1 @web
    Scenario: Como usuario del sistema quiero crear un post con un nombre muy largo
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
    And I enter post description "Voluptatibus laudantium ipsa neque labore aperiam at."
    And I enter post title "Reiciendis error sed praesentium voluptatibus voluptatibus voluptatum suscipit. Amet voluptate atque similique atque aliquid at in ullam quia. Porro dicta distinctio ea voluptatum nisi aliquam tempora. Ipsam rem excepturi animi officia vel cupiditate beatae dolorem quidem. Voluptatem laboriosam velit quas accusamus vitae voluptates deleniti expedita. Facilis similique eius consequuntur beatae nisi mollitia atque ad sed. In minus nam illo veniam repudiandae possimus. Dignissimos eaque repellat ab. Ipsum accusamus cum. Fugiat maxime unde aspernatur impedit dignissimos consectetur placeat ad. Illum odit placeat qui molestias tenetur. Omnis nisi impedit illo."
    And I wait for 5 seconds
    And I click publish post
    And I wait for 5 seconds
