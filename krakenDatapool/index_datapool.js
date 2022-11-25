const fs = require("fs");

let data = fs.readFileSync("MOCK_DATA_MEMBER.json");
let datapool = JSON.parse(data);
let datanaughtymemebers = fs.readFileSync("Members_Naughty_DATA.json");
let datapoolnaughtymembers = JSON.parse(datanaughtymemebers);
let datamemebersfrontnote = fs.readFileSync("Members_FronteraSup_Nota_DATA.json");
let datapoolfrontnotemembers = JSON.parse(datamemebersfrontnote);
let datausersfront = fs.readFileSync("User_FronteraSup.json");
let datapoolfrontsupusers = JSON.parse(datausersfront);


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
datapoolfrontsupusers = `Feature: EditUser

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
fs.writeFileSync("features/apriori-edit_user_frontname.feature", datapoolfrontsupusers);





}

start();