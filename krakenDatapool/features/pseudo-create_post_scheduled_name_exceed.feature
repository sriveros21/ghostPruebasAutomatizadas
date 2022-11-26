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
    And I click new post
    And I enter post description "Deleniti facere placeat alias rem."
    And I enter post title "Perspiciatis inventore architecto eius doloribus voluptates. Itaque enim est explicabo libero iure quis minus. Atque veniam incidunt voluptatum odio ad atque in quo. Voluptatem molestiae voluptas accusantium magni voluptatum sunt labore. Aperiam ab alias facere suscipit praesentium cumque natus optio molestias. Itaque laborum officia occaecati accusamus. Exercitationem aperiam veritatis alias occaecati. Sapiente animi corporis dolorem voluptate. Magni illum possimus voluptas architecto aut corrupti officia nostrum dolores. Alias ipsam blanditiis nobis occaecati."
    And I wait for 5 seconds
    And I click publish post
    And I wait for 5 seconds
