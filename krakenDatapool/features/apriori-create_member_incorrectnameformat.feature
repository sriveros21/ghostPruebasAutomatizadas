Feature: CreateMember

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
      And I enter member name "https://de.vu/ut/rhoncus/aliquet/pulvinar/sed/nisl/nunc.xml?odio=nulla&porttitor=dapibus&id=dolor&consequat=vel&in=est&consequat=donec&ut=odio&nulla=justo"
      And I wait for 10 seconds
      And I enter member email "lhanning19@eventbrite.com"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    