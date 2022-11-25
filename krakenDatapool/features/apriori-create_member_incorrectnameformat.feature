Feature: CreateMember

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
      And I enter member name "http://alexa.com/sapien/quis/libero/nullam.json?donec=non&quis=velit&orci=nec&eget=nisi&orci=vulputate&vehicula=nonummy&condimentum=maecenas&curabitur=tincidunt&in=lacus&libero=at&ut=velit&massa=vivamus&volutpat=vel&convallis=nulla"
      And I wait for 10 seconds
      And I enter member email "gsolly29@dell.com"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    