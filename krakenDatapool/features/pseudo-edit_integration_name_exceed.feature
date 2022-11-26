Feature: Editar integracion con nombre mayor a 191 caracteres

    @user1 @web
    Scenario: Como usuario inicio sesion y edito una integracion existente con nombre mayor a 191 caracteres
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
    And I click on an existing integration
    And I wait for 2 seconds
    And I click on integration name textarea
    And I enter text "Commodi minima voluptatibus ab hic optio alias magni. Aliquam at quas non. Quod aperiam officiis sint iste blanditiis consectetur. Recusandae modi delectus. Repudiandae dicta nulla necessitatibus distinctio officiis vero. Quo enim vel commodi repellendus sint libero at. Consequuntur explicabo non. Quisquam incidunt sint similique tempore. Aliquid nemo nemo. Autem minima repellendus consequatur esse. A rerum earum excepturi ex. Tenetur consequuntur tempora dolorum reiciendis laboriosam tempore temporibus. Laboriosam doloremque quis velit dolores incidunt."
    And I click on save button
    And I wait for 5 seconds
