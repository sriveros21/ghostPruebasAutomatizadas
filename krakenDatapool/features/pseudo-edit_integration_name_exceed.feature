Feature: Editar integracion con nombre mayor a 191 caracteres

    @user1 @web
    Scenario: Como usuario inicio sesion y edito una integracion existente con nombre mayor a 191 caracteres
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click sign in
    Then I click settings button
    And I click integrations button
    And I click on an existing integration
    And I click on integration name textarea
    And I enter text "Voluptatum vel veniam architecto. Et quod id dolor odio. Natus voluptas quae placeat. Deleniti non eveniet voluptates debitis vitae dolor deleniti aut nihil. Adipisci modi vitae aliquid labore excepturi nam labore. Soluta dicta nobis id eveniet quibusdam magni modi. Enim ad facilis ea expedita similique alias commodi tenetur atque. Eum atque dolore asperiores. Corrupti blanditiis magni corrupti sint delectus quas modi nobis numquam. Placeat consequuntur unde minus voluptatum qui dolor reprehenderit eius assumenda."
    And I click on save button
    And I wait for 5 seconds
