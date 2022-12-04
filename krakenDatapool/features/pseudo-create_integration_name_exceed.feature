Feature: Crear integracion con nombre mayor a 191 caracteres

    @user1 @web
    Scenario: Como usuario inicio sesion y creo una integracion con nombre mayor a 191 caracteres
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 2 seconds
    Then I click settings button
    And I wait for 2 seconds
    And I click integrations button
    And I wait for 2 seconds
    And I click add custom integration button
    And I wait for 2 seconds
    And I click on integration name
    And I enter text "Aliquam molestiae nulla beatae veniam error natus totam. Mollitia praesentium reiciendis sunt quia at dicta nisi aliquam blanditiis. Repellendus laudantium sint quisquam molestias deleniti harum ex. Totam adipisci magnam. Excepturi facere provident facilis laudantium distinctio tempora delectus similique optio. Amet dignissimos debitis assumenda. Praesentium consequuntur sunt maxime quasi quod. Mollitia aspernatur ex corrupti corrupti provident doloribus. Atque omnis blanditiis quasi non. Pariatur iste inventore autem sequi a fugit temporibus itaque. Dolores quo explicabo expedita incidunt laborum molestiae officia laborum voluptas."
    And I click on create button
    And I wait for 5 seconds
