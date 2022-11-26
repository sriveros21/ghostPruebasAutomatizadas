Feature: EditMember

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
      And I enter a random name as member name "https://psu.edu/ultrices/erat/tortor/sollicitudin/mi/sit.jpg?pretium=tincidunt&nisl=eget&ut=tempus&volutpat=vel&sapien=pede&arcu=morbi&sed=porttitor&augue=lorem&aliquam=id&erat=ligula&volutpat=suspendisse&in=ornare&congue=consequat&etiam=lectus&justo=in&etiam=est&pretium=risus&iaculis=auctor&justo=sed&in=tristique&hac=in&habitasse=tempus&platea=sit&dictumst=amet&etiam=sem&faucibus=fusce&cursus=consequat&urna=nulla&ut=nisl&tellus=nunc&nulla=nisl&ut=duis&erat=bibendum&id=felis"
      And I wait for 10 seconds
      And I enter a random email as member email "oratt2r@hhs.gov"
      And I wait for 10 seconds
      And I click save member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    