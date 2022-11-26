const { faker } = require('@faker-js/faker');
const fs = require("fs");
let datapoolIntegration = [];
let datapoolIntegrationFront = [];
let datapoolPost = [];
let datapoolWrongPost = [];
let datapoolPage = [];

function generateIntegrationDataPool() {
    for (let i = 0; i < 99; i++) {
        let obj = {
            name: faker.internet.domainWord(),
            description: faker.lorem.sentence()
        };
        datapoolIntegration.push(obj);
    }
}

function generateIntegrationFrontDataPool() {
    for (let i = 0; i < 99; i++) {
        let obj = {
            name: '',
            description: faker.lorem.paragraph(10)
        };
        datapoolIntegrationFront.push(obj);
    }
}

function generatePostDataPool() {
    for (let i = 0; i < 99; i++) {
        let obj = {
            name: faker.internet.domainWord(),
            description: faker.lorem.sentence(),
            date: faker.date.soon().toISOString().split('T')[0],
            time: faker.date.soon().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        datapoolPost.push(obj);
    }
}

function generatePostWrongDataPool() {
    for (let i = 0; i < 99; i++) {
        let obj = {
            name: faker.lorem.paragraph(10),
            description: faker.lorem.sentence(),
            date: faker.date.past().toISOString().split('T')[0],
            time: faker.date.past().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        datapoolWrongPost.push(obj);
    }
}

function generatePageDataPool() {
    for (let i = 0; i < 99; i++) {
        let obj = {
            page_url: faker.internet.domainWord(),
            date: faker.date.past().toISOString().split('T')[0],
            time: faker.date.soon().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            excerpt: faker.lorem.sentence()
        };
        datapoolPage.push(obj);
    }
}

generateIntegrationDataPool();
generatePostDataPool();
generatePageDataPool();
generateIntegrationFrontDataPool();
generatePostWrongDataPool();

function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}  


function start() {
    //crear Miembro
    let value = getRandomIntInclusive();
    let integration = datapoolIntegration[value];
    let datapoolCreateIntegration = `Feature: Crear integracion

    @user1 @web
    Scenario: Como usuario inicio sesion y creo una integracion
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
    And I enter text "${integration.name}"
    And I wait for 2 seconds
    And I click on create button
    And I wait for 2 seconds
    And I click on integration description
    And I enter text "${integration.description}"
    And I wait for 2 seconds
    And I click on save button
    And I wait for 2 seconds
    And I click settings button
    And I wait for 2 seconds
    And I click integrations button
    And I wait for 2 seconds
`;
    fs.writeFileSync("features/pseudo-create_integration.feature", datapoolCreateIntegration);

    value = getRandomIntInclusive();
    integrationEdit = datapoolIntegration[value];
    datapoolEditIntegration = `Feature: Editar integracion

    @user1 @web
    Scenario: Como usuario inicio sesion y edito una integracion existente
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
    And I enter text "${integrationEdit.name}"
    And I wait for 2 seconds
    And I click on save button
    And I wait for 2 seconds
    And I click settings button
    And I wait for 2 seconds
    And I click integrations button
    And I wait for 2 seconds
`;
    fs.writeFileSync("features/pseudo-edit_integration.feature", datapoolEditIntegration);

    value = getRandomIntInclusive();
    post = datapoolPost[value];
    datapoolCreatePost = `Feature: PostsCreate

    @user1 @web
    Scenario: Como usuario del sistema quiero crear un post
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 5 seconds
    Then I click posts link
    And I wait for 2 seconds
    And I click new post
    And I wait for 2 seconds
    And I enter post title "${post.name}"
    And I enter post description "${post.description}"
    And I wait for 3 seconds
    And I click publish post
    And I wait for 6 seconds
    And I click right now
    And I click on schedule for later
    And I wait for 5 seconds
    And I enter post time "${post.time}"
    And I wait for 10 seconds
    And I click final review
    And I wait for 15 seconds
    And I click schedule post
    And I wait for 15 seconds
`;
    fs.writeFileSync("features/pseudo-create_post_scheduled.feature", datapoolCreatePost);

    value = getRandomIntInclusive();
    configPage = datapoolPage[value];
    datapoolConfigPage = `Feature: Configurar pagina

    @user1 @web
    Scenario: Como usuario inicio sesion y configuro una pagina existente
    Given I navigate to page "http://localhost:2368/ghost/"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 2 seconds
    Then I click pages button
    And I wait for 2 seconds
    And I click on existing page
    And I wait for 2 seconds
    And I click on page setting button
    And I wait for 2 seconds
    And I click on excerpt textarea
    And I enter text "${configPage.excerpt}"
    And I click back button
    And I wait for 2 seconds 
    And I click on existing page
    And I wait for 2 seconds
    And I click on page setting button
    And I wait for 2 seconds
`;
    fs.writeFileSync("features/pseudo-config_page.feature", datapoolConfigPage);

    value = getRandomIntInclusive();
    integrationFront = datapoolIntegrationFront[value];
    datapoolCreateIntegrationFront = `Feature: Editar integracion con nombre mayor a 191 caracteres

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
    And I enter text "${integrationFront.description}"
    And I click on save button
    And I wait for 5 seconds
`;
    fs.writeFileSync("features/pseudo-edit_integration_name_exceed.feature", datapoolCreateIntegrationFront);
    
    value = getRandomIntInclusive();
    integrationFrontName = datapoolIntegrationFront[value];
    datapoolCreateIntegrationFrontName = `Feature: Crear integracion con nombre mayor a 191 caracteres

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
    And I enter text "${integrationFrontName.description}"
    And I click on create button
    And I wait for 5 seconds
`;
    fs.writeFileSync("features/pseudo-create_integration_name_exceed.feature", datapoolCreateIntegrationFrontName);
    
    value = getRandomIntInclusive();
    postWrong = datapoolWrongPost[value];
    datapoolCreatePostDate = `Feature: PostsCreate past date

    @user1 @web
    Scenario: Como usuario del sistema quiero crear un post con una fecha pasada
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
    And I enter post title "Holdlamis"
    And I enter post description "${postWrong.description}"
    And I wait for 10 seconds
    And I click publish post
    And I wait for 2 seconds
    And I click right now
    And I wait for 1 seconds
    And I click on schedule for later
    And I enter post date "${postWrong.date}"
    And I wait for 5 seconds
    And I enter post time "${postWrong.time}"
    And I wait for 5 seconds
    And I click final review
    And I wait for 1 seconds
    And I click schedule post
    And I wait for 15 seconds
`;
    fs.writeFileSync("features/pseudo-create_post_scheduled_date.feature", datapoolCreatePostDate);
    
    value = getRandomIntInclusive();
    postWrongName = datapoolWrongPost[value];
    datapoolCreatePostName = `Feature: PostsCreate name too long

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
    And I enter post description "${postWrongName.description}"
    And I enter post title "${postWrongName.name}"
    And I wait for 5 seconds
    And I click publish post
    And I wait for 5 seconds
`;
    fs.writeFileSync("features/pseudo-create_post_scheduled_name_exceed.feature", datapoolCreatePostName);
}

start();