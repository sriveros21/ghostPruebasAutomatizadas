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
      And I enter member name "https://wikispaces.com/donec/ut.json?fusce=cubilia&posuere=curae&felis=mauris&sed=viverra&lacus=diam&morbi=vitae&sem=quam&mauris=suspendisse&laoreet=potenti&ut=nullam&rhoncus=porttitor&aliquet=lacus&pulvinar=at&sed=turpis&nisl=donec&nunc=posuere&rhoncus=metus&dui=vitae&vel=ipsum&sem=aliquam&sed=non&sagittis=mauris&nam=morbi&congue=non&risus=lectus&semper=aliquam&porta=sit&volutpat=amet&quam=diam&pede=in&lobortis=magna&ligula=bibendum&sit=imperdiet&amet=nullam&eleifend=orci&pede=pede&libero=venenatis&quis=non&orci=sodales&nullam=sed&molestie=tincidunt&nibh=eu&in=felis&lectus=fusce&pellentesque=posuere&at=felis&nulla=sed&suspendisse=lacus&potenti=morbi&cras=sem&in=mauris&purus=laoreet&eu=ut&magna=rhoncus&vulputate=aliquet&luctus=pulvinar&cum=sed&sociis=nisl&natoque=nunc&penatibus=rhoncus&et=dui&magnis=vel&dis=sem&parturient=sed&montes=sagittis&nascetur=nam&ridiculus=congue&mus=risus&vivamus=semper&vestibulum=porta&sagittis=volutpat&sapien=quam&cum=pede&sociis=lobortis&natoque=ligula&penatibus=sit&et=amet&magnis=eleifend&dis=pede&parturient=libero&montes=quis&nascetur=orci&ridiculus=nullam&mus=molestie&etiam=nibh&vel=in&augue=lectus&vestibulum=pellentesque&rutrum=at&rutrum=nulla&neque=suspendisse&aenean=potenti&auctor=cras&gravida=in"
      And I wait for 10 seconds
      And I enter member email "mchapmanm@intel.com"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    