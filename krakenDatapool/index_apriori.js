const fs = require("fs");

let datanaughtymemebers = fs.readFileSync("Members_Naughty_DATA.json");
let datapoolnaughtymembers = JSON.parse(datanaughtymemebers);
let datamemebersfrontnote = fs.readFileSync("Members_FronteraSup_Nota_DATA.json");
let datapoolfrontnotemembers = JSON.parse(datamemebersfrontnote);
let datausersfront = fs.readFileSync("User_FronteraSup.json");
let datapoolfrontsupusers = JSON.parse(datausersfront);
let dataIntegration = fs.readFileSync("INTEGRATION_MOCK_DATA.json");
let datapoolIntegration = JSON.parse(dataIntegration);
let dataConfigPage =  fs.readFileSync("CONFIG_PAGE_MOCK_DATA.json");
let datapoolConfigPage = JSON.parse(dataConfigPage);
let dataPostScheduled = fs.readFileSync("POST_SCHEDULED_MOCK_DATA.json");
let datapoolpostScheduled = JSON.parse(dataPostScheduled);
let dataMembersCorrectForm = fs.readFileSync("Members_CorrectFormat_DATA.json");
let datapoolMembersCorrectForm = JSON.parse(dataMembersCorrectForm);
let dataMembersIncorrectNameForm = fs.readFileSync("Members_IncorrectNameFormat_DATA.json");
let datapoolMembersIncorrectNameForm = JSON.parse(dataMembersIncorrectNameForm);
let dataMembersIncorrectEmailForm = fs.readFileSync("Members_IncorrectEmailFormat_DATA.json");
let datapoolMembersIncorrectEmailForm = JSON.parse(dataMembersIncorrectEmailForm);

function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}  

function start() {
    //crear Miembro
    value = getRandomIntInclusive();
    member = datapoolnaughtymembers[value];
    datapoolnaughtymember =  `Feature: CreateMember

@user1 @web
Scenario: Como usuario del sistema quiero crear un miembro

Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
When I enter email "<USERNAME>"
And I wait for 2 seconds
And I enter password "<PASSWORD>"
And I wait for 2 seconds
And I click sign in
And I wait for 10 seconds
And I click members link
And I wait for 10 seconds
Then I click new member
And I wait for 10 seconds
And I enter member name "${member.name}"
And I wait for 10 seconds
And I enter member email "${member.email}"
And I wait for 10 seconds
And I click save new member
And I wait for 10 seconds
And I click members link
And I wait for 10 seconds
`;
    fs.writeFileSync("features/apriori-create_member-naughtydata.feature", datapoolnaughtymember);

value = getRandomIntInclusive();
member = datapoolnaughtymembers[value];
datapoolnaughtymember = `Feature: EditMember

@user1 @web
Scenario: Como usuario del sistema quiero editar un miembro

Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
When I enter email "<USERNAME>"
And I wait for 2 seconds
And I enter password "<PASSWORD>"
And I wait for 2 seconds
And I click sign in
And I wait for 10 seconds
And I click members link
And I wait for 10 seconds
Then I click first member
And I wait for 10 seconds
And I enter member name "${member.name}"
And I wait for 10 seconds
And I enter member email "${member.email}"
And I wait for 10 seconds
And I click save member
And I wait for 10 seconds
And I click members link
And I wait for 10 seconds
`;
fs.writeFileSync("features/apriori-edit_member_naughtydata.feature", datapoolnaughtymember);


value = getRandomIntInclusive();
member = datapoolfrontnotemembers[value];
datapoolfrontnotemembers = `Feature: EditMember

@user1 @web
Scenario: Como usuario del sistema quiero editar un miembro

Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 5 seconds
When I enter email "<USERNAME>"
And I wait for 2 seconds
And I enter password "<PASSWORD>"
And I wait for 2 seconds
And I click sign in
And I wait for 10 seconds
And I click members link
And I wait for 10 seconds
Then I click first member
And I wait for 10 seconds
And I enter member note "${member.note}"
And I wait for 10 seconds
And I click save member
And I wait for 10 seconds
And I click members link
And I wait for 10 seconds
`;
fs.writeFileSync("features/apriori-edit_member_frontnote.feature", datapoolfrontnotemembers);

value = getRandomIntInclusive();
user = datapoolfrontsupusers[value];
datapoolEditUserNameFeature = `Feature: EditUser

@user1 @web
Scenario: Como usuario quiero editar la informacion de mi perfil
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
And I wait for 5 seconds
And I click userpic
And I wait for 1 seconds
Then I click your profile
And I wait for 1 seconds
And I enter user name "${user.fullname}"
And I click save user changes
And I wait for 2 seconds
And I click staff link
And I wait for 2 seconds
`;
fs.writeFileSync("features/apriori-edit_user_frontname.feature", datapoolEditUserNameFeature);

value = getRandomIntInclusive();
integration = datapoolIntegration[value];
datapoolCreateIntegrationFeature = `Feature: Crear integracion

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
fs.writeFileSync("features/apriori-create_integration.feature", datapoolCreateIntegrationFeature);    

value = getRandomIntInclusive();
integration = datapoolIntegration[value];
datapoolCreateIntegrationNoNameFeature = `Feature: Crear integracion sin nombre

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
And I enter text ""
And I click on create button
And I wait for 5 seconds
`;
fs.writeFileSync("features/apriori-create_integration_no_name.feature", datapoolCreateIntegrationNoNameFeature);

value = getRandomIntInclusive();
integration = datapoolfrontnotemembers[value];
datapoolCreateIntegrationExceedFeature = `Feature: Crear integracion con nombre mayor a 191 caracteres

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
And I enter text "${integration.note}"
And I click on create button
And I wait for 5 seconds
`;
fs.writeFileSync("features/apriori-create_integration_exceed_name.feature", datapoolCreateIntegrationExceedFeature);


value = getRandomIntInclusive();
integration = datapoolIntegration[value];
datapoolEditIntegrationFeature = `Feature: Editar integracion

@user1 @web
Scenario: Como usuario inicio sesion y edito una integracion existente
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
Then I click settings button
And I click integrations button
And I click on an existing integration
And I click on integration name textarea
And I enter text "${integration.name}"
And I click on save button
And I click settings button
And I click integrations button
And I wait for 2 seconds
`;
fs.writeFileSync("features/apriori-edit_integration.feature", datapoolEditIntegrationFeature);

value = getRandomIntInclusive();
integration = datapoolIntegration[value];
datapoolEditIntegrationNoNameFeature = `Feature: Editar integracion sin nombre

@user1 @web
Scenario: Como usuario inicio sesion y edito una integracion existente
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
Then I click settings button
And I click integrations button
And I click on an existing integration
And I click on integration name textarea
And I enter text ""
And I click on save button
And I click settings button
And I click integrations button
And I wait for 2 seconds
`;
fs.writeFileSync("features/apriori-edit_integration_no_name.feature", datapoolEditIntegrationNoNameFeature);

value = getRandomIntInclusive();
    integration = datapoolfrontnotemembers[value];
    datapoolEditIntegrationExceedFeature = `Feature: Editar integracion con nombre mayor a 191 caracteres

@user1 @web
Scenario: Como usuario inicio sesion y edito una integracion existente
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
Then I click settings button
And I click integrations button
And I click on an existing integration
And I click on integration name textarea
And I enter text "${integration.note}"
And I click on save button
And I click settings button
And I click integrations button
And I wait for 2 seconds
`;
    fs.writeFileSync("features/apriori-edit_integration_exceed.feature", datapoolEditIntegrationExceedFeature);

    value = getRandomIntInclusive();
    configPage = datapoolConfigPage[value];
    datapoolEditConfigPageFeature = `Feature: Configurar pagina

@user1 @web
Scenario: Como usuario inicio sesion y configuro una pagina existente
Given I navigate to page "http://localhost:2368/ghost/"
And I wait for 2 seconds
When I enter email "<USERNAME>"
And I enter password "<PASSWORD>"
And I click sign in
And I wait for 2 seconds
Then I click pages button
And I click on existing page
And I click on page setting button
And I click on excerpt textarea
And I enter text "${configPage.excerpt}"
And I click back button
And I wait for 2 seconds 
And I click on existing page
And I click on page setting button
And I wait for 2 seconds
`;
    fs.writeFileSync("features/apriori-config_page.feature", datapoolEditConfigPageFeature);

    value = getRandomIntInclusive();
    postScheduled = datapoolpostScheduled[value];
    datapoolpostScheduledFeature = `Feature: PostsCreate

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
And I enter post title "${postScheduled.post_title}"
And I wait for 10 seconds
And I enter post description "${postScheduled.description}"
And I wait for 10 seconds
And I click publish post
And I wait for 10 seconds
And I click right now
And I wait for 10 seconds
And I click on schedule for later
And I wait for 10 seconds
And I enter post time "${postScheduled.time}"
And I wait for 10 seconds
And I click final review
And I wait for 15 seconds
And I click schedule post
And I wait for 15 seconds
`;
    fs.writeFileSync("features/apriori-post_scheduled.feature", datapoolpostScheduledFeature);


    value = getRandomIntInclusive();
    user = datapoolfrontsupusers[value];
    datapoolEditUserEmailFeature = `Feature: EditUser
    
    @user1 @web
    Scenario: Como usuario quiero editar la informacion de mi perfil
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 5 seconds
    And I click userpic
    And I wait for 1 seconds
    Then I click your profile
    And I wait for 1 seconds
    And I wait for 1 seconds
    And I enter user email "${user.email}"
    And I wait for 8 seconds
    And I click save user changes
    And I wait for 5 seconds
    And I click staff link
    And I wait for 2 seconds
    `;
    fs.writeFileSync("features/apriori-edit_user_frontemail.feature", datapoolEditUserEmailFeature);


    value = getRandomIntInclusive();
    user = datapoolfrontsupusers[value];
    datapoolEditUserLocationFeature = `Feature: EditUser
    
    @user1 @web
    Scenario: Como usuario quiero editar la informacion de mi perfil
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 5 seconds
    And I click userpic
    And I wait for 1 seconds
    Then I click your profile
    And I wait for 1 seconds
    And I wait for 1 seconds
    And I enter location "${user.location}"
    And I wait for 8 seconds
    And I click save user changes
    And I wait for 5 seconds
    And I click staff link
    And I wait for 2 seconds
    `;
    fs.writeFileSync("features/apriori-edit_user_frontlocation.feature", datapoolEditUserLocationFeature);


    value = getRandomIntInclusive();
    user = datapoolfrontsupusers[value];
    datapoolEditUserBioFeature = `Feature: EditUser
    
    @user1 @web
    Scenario: Como usuario quiero editar la informacion de mi perfil
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I click sign in
    And I wait for 5 seconds
    And I click userpic
    And I wait for 1 seconds
    Then I click your profile
    And I wait for 1 seconds
    And I wait for 1 seconds
    And I enter bio "${user.bio}"
    And I wait for 8 seconds
    And I click save user changes
    And I wait for 5 seconds
    And I click staff link
    And I wait for 2 seconds
    `;
    fs.writeFileSync("features/apriori-edit_user_frontbio.feature", datapoolEditUserBioFeature);

    value = getRandomIntInclusive();
    member = datapoolMembersCorrectForm[value];
    datapoolMembersCorrectFormFeature = `Feature: CreateMember

    @user1 @web
    Scenario: Como usuario del sistema quiero crear un miembro (Faker correct format)
    
      Given I navigate to page "http://localhost:2368/ghost/#/signin"
      And I wait for 5 seconds
      When I enter email "<USERNAME>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click sign in
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
      Then I click new member
      And I wait for 10 seconds
      And I enter member name "${member.name}"
      And I wait for 10 seconds
      And I enter member email "${member.email}"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    `;
    fs.writeFileSync("features/apriori-create_member_correctformat.feature", datapoolMembersCorrectFormFeature);

    value = getRandomIntInclusive();
    member = datapoolMembersIncorrectNameForm[value];
    datapoolMembersIncorrectNameFormFeature = `Feature: CreateMember

    @user1 @web
    Scenario: Como usuario del sistema quiero crear un miembro (Faker correct format)
    
      Given I navigate to page "http://localhost:2368/ghost/#/signin"
      And I wait for 5 seconds
      When I enter email "<USERNAME>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click sign in
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
      Then I click new member
      And I wait for 10 seconds
      And I enter member name "${member.name}"
      And I wait for 10 seconds
      And I enter member email "${member.email}"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    `;
    fs.writeFileSync("features/apriori-create_member_incorrectnameformat.feature", datapoolMembersIncorrectNameFormFeature);

    value = getRandomIntInclusive();
    member = datapoolMembersIncorrectEmailForm[value];
    datapoolMembersIncorrectEmailFormFeature = `Feature: CreateMember

    @user1 @web
    Scenario: Como usuario del sistema quiero crear un miembro (Faker correct format)
    
      Given I navigate to page "http://localhost:2368/ghost/#/signin"
      And I wait for 5 seconds
      When I enter email "<USERNAME>"
      And I wait for 2 seconds
      And I enter password "<PASSWORD>"
      And I wait for 2 seconds
      And I click sign in
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
      Then I click new member
      And I wait for 10 seconds
      And I enter member name "${member.name}"
      And I wait for 10 seconds
      And I enter member email "${member.email}"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    `;
    fs.writeFileSync("features/apriori-create_member_incorrectemailformat.feature", datapoolMembersIncorrectEmailFormFeature);
}

start();