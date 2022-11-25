const { faker } = require('@faker-js/faker');
const fs = require("fs");
let datapool = [];

function generateDataPool() {
    for (let i = 0; i < 99; i++) {
        let obj = {
            name: faker.internet.domainWord(),
            description: faker.lorem.sentence()
        };
        datapool.push(obj);
    }
}
generateDataPool();

function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}  


function start() {
    //crear Miembro
    let value = getRandomIntInclusive();
    let integration = datapool[value];
    let datapoolIntegration = `Feature: Crear integracion

    @user1 @web
    Scenario: Como usuario inicio sesion y creo una integracion
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click sign in
    Then I click settings button
    And I click integrations button
    And I click add custom integration button
    And I click on integration name
    And I enter text "${integration.name}"
    And I click on create button
    And I click on integration description
    And I enter text "${integration.description}"
    And I click on save button
    And I click settings button
    And I click integrations button
    And I wait for 2 seconds
`;
    fs.writeFileSync("features/pseudo-create_integration.feature", datapoolIntegration);
}

start();