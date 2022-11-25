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
      And I enter member name "https://freewebs.com/libero/quis.aspx?iaculis=in&congue=sapien&vivamus=iaculis&metus=congue&arcu=vivamus&adipiscing=metus&molestie=arcu&hendrerit=adipiscing&at=molestie&vulputate=hendrerit&vitae=at&nisl=vulputate&aenean=vitae&lectus=nisl&pellentesque=aenean&eget=lectus&nunc=pellentesque&donec=eget&quis=nunc&orci=donec&eget=quis&orci=orci&vehicula=eget&condimentum=orci&curabitur=vehicula&in=condimentum&libero=curabitur&ut=in&massa=libero&volutpat=ut&convallis=massa&morbi=volutpat&odio=convallis&odio=morbi&elementum=odio&eu=odio&interdum=elementum&eu=eu&tincidunt=interdum&in=eu&leo=tincidunt&maecenas=in&pulvinar=leo&lobortis=maecenas&est=pulvinar&phasellus=lobortis&sit=est&amet=phasellus&erat=sit&nulla=amet&tempus=erat&vivamus=nulla&in=tempus&felis=vivamus&eu=in&sapien=felis&cursus=eu&vestibulum=sapien&proin=cursus&eu=vestibulum&mi=proin&nulla=eu&ac=mi&enim=nulla&in=ac&tempor=enim"
      And I wait for 10 seconds
      And I enter member email "lclemendet2q@taobao.com"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    