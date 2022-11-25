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
      And I enter member name "https://oracle.com/eget/tempus/vel/pede/morbi.xml?pede=ridiculus&lobortis=mus&ligula=etiam&sit=vel&amet=augue&eleifend=vestibulum&pede=rutrum&libero=rutrum&quis=neque&orci=aenean&nullam=auctor&molestie=gravida&nibh=sem&in=praesent&lectus=id&pellentesque=massa&at=id&nulla=nisl&suspendisse=venenatis&potenti=lacinia&cras=aenean&in=sit&purus=amet&eu=justo&magna=morbi&vulputate=ut&luctus=odio&cum=cras&sociis=mi&natoque=pede&penatibus=malesuada&et=in&magnis=imperdiet&dis=et&parturient=commodo&montes=vulputate&nascetur=justo&ridiculus=in&mus=blandit&vivamus=ultrices&vestibulum=enim&sagittis=lorem&sapien=ipsum&cum=dolor&sociis=sit&natoque=amet&penatibus=consectetuer&et=adipiscing&magnis=elit&dis=proin&parturient=interdum&montes=mauris&nascetur=non"
      And I wait for 10 seconds
      And I enter member email "lbonar14@posterous.com"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    