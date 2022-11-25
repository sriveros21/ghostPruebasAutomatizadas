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
      And I enter a random name as member name "http://accuweather.com/eros/viverra/eget/congue/eget/semper/rutrum.js?duis=platea&consequat=dictumst&dui=aliquam&nec=augue&nisi=quam&volutpat=sollicitudin&eleifend=vitae&donec=consectetuer&ut=eget&dolor=rutrum&morbi=at&vel=lorem&lectus=integer&in=tincidunt&quam=ante&fringilla=vel&rhoncus=ipsum&mauris=praesent&enim=blandit&leo=lacinia&rhoncus=erat"
      And I wait for 10 seconds
      And I enter a random email as member email "hbeckwith1k@spiegel.de"
      And I wait for 10 seconds
      And I click save member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    