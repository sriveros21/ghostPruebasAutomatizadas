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
      And I enter member name "http://moonfruit.com/nisi/at/nibh.jpg?maecenas=turpis&leo=enim&odio=blandit&condimentum=mi&id=in&luctus=porttitor&nec=pede&molestie=justo&sed=eu&justo=massa&pellentesque=donec&viverra=dapibus&pede=duis&ac=at&diam=velit&cras=eu&pellentesque=est&volutpat=congue&dui=elementum&maecenas=in&tristique=hac&est=habitasse&et=platea&tempus=dictumst&semper=morbi&est=vestibulum&quam=velit&pharetra=id&magna=pretium&ac=iaculis&consequat=diam&metus=erat&sapien=fermentum&ut=justo&nunc=nec&vestibulum=condimentum&ante=neque&ipsum=sapien&primis=placerat&in=ante&faucibus=nulla&orci=justo&luctus=aliquam&et=quis&ultrices=turpis&posuere=eget&cubilia=elit&curae=sodales&mauris=scelerisque&viverra=mauris&diam=sit&vitae=amet&quam=eros&suspendisse=suspendisse&potenti=accumsan&nullam=tortor&porttitor=quis&lacus=turpis&at=sed&turpis=ante&donec=vivamus&posuere=tortor&metus=duis&vitae=mattis&ipsum=egestas&aliquam=metus&non=aenean&mauris=fermentum&morbi=donec&non=ut&lectus=mauris&aliquam=eget&sit=massa&amet=tempor&diam=convallis&in=nulla&magna=neque&bibendum=libero"
      And I wait for 10 seconds
      And I enter member email "dgentzsch1g@paginegialle.it"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    