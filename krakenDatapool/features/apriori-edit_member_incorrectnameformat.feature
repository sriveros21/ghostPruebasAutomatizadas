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
      And I enter a random name as member name "https://wsj.com/sit.json?nulla=in&nunc=hac&purus=habitasse&phasellus=platea&in=dictumst&felis=maecenas&donec=ut&semper=massa&sapien=quis&a=augue&libero=luctus&nam=tincidunt&dui=nulla&proin=mollis&leo=molestie&odio=lorem&porttitor=quisque&id=ut&consequat=erat&in=curabitur&consequat=gravida&ut=nisi&nulla=at&sed=nibh&accumsan=in&felis=hac&ut=habitasse&at=platea&dolor=dictumst&quis=aliquam&odio=augue&consequat=quam&varius=sollicitudin&integer=vitae&ac=consectetuer&leo=eget&pellentesque=rutrum&ultrices=at&mattis=lorem&odio=integer&donec=tincidunt&vitae=ante&nisi=vel&nam=ipsum&ultrices=praesent&libero=blandit&non=lacinia&mattis=erat&pulvinar=vestibulum&nulla=sed&pede=magna&ullamcorper=at&augue=nunc&a=commodo"
      And I wait for 10 seconds
      And I enter a random email as member email "cgreenhalgh1b@washington.edu"
      And I wait for 10 seconds
      And I click save member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    