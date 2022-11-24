const fs = require("fs");

let data = fs.readFileSync("MOCK_DATA_MEMBER.json");
let datafrontera = fs.readFileSync("MOCK_DATA_MEMBER_frontera.json");
let datapool = JSON.parse(data);
let datapoolfrontera = JSON.parse(datafrontera);


function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}  

function start() {
    //crear Miembro
    let value = getRandomIntInclusive();
    let member = datapool[value];
    let datapoolmember = `Feature: CreateMember

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
    fs.writeFileSync("features/apriori-create_member.feature", datapoolmember);

    value = getRandomIntInclusive();
    member = datapool[value];
    datapoolmember = `Feature: EditMember

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
fs.writeFileSync("features/apriori-edit_member.feature", datapoolmember);








}

start();