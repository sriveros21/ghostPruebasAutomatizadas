Feature: Crear integracion con nombre mayor a 191 caracteres

    @user1 @web
    Scenario: Como usuario inicio sesion y creo una integracion con nombre mayor a 191 caracteres
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click sign in
    Then I click settings button
    And I click integrations button
    And I click add custom integration button
    And I click on integration name
    And I enter text "Doloremque adipisci placeat placeat similique repellat molestias libero. Exercitationem tempora ad. Beatae necessitatibus laudantium repellat velit quis voluptatum sequi voluptas neque. Dicta dolores iure repudiandae assumenda iusto placeat cum. Facilis quaerat soluta reiciendis culpa doloremque itaque. Nulla porro consequatur ipsum accusamus illum adipisci. Eligendi tenetur iusto iure consequuntur aperiam. Architecto vero eius dolor ea. Adipisci excepturi laudantium labore. Similique nisi libero molestiae fugit. Praesentium reiciendis soluta molestias adipisci. Vel sed blanditiis dolor laudantium blanditiis dolor. Quo eaque provident quisquam laudantium blanditiis exercitationem."
    And I click on create button
    And I wait for 5 seconds
