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
      And I enter a random name as member name "https://feedburner.com/amet/justo/morbi/ut/odio/cras.aspx?nunc=lorem&proin=id&at=ligula&turpis=suspendisse&a=ornare&pede=consequat&posuere=lectus&nonummy=in&integer=est&non=risus&velit=auctor&donec=sed&diam=tristique&neque=in&vestibulum=tempus&eget=sit&vulputate=amet&ut=sem&ultrices=fusce&vel=consequat&augue=nulla&vestibulum=nisl&ante=nunc&ipsum=nisl&primis=duis&in=bibendum&faucibus=felis&orci=sed&luctus=interdum&et=venenatis&ultrices=turpis&posuere=enim&cubilia=blandit&curae=mi&donec=in&pharetra=porttitor&magna=pede&vestibulum=justo&aliquet=eu&ultrices=massa&erat=donec&tortor=dapibus&sollicitudin=duis&mi=at&sit=velit&amet=eu&lobortis=est&sapien=congue&sapien=elementum&non=in&mi=hac&integer=habitasse&ac=platea&neque=dictumst&duis=morbi&bibendum=vestibulum&morbi=velit&non=id&quam=pretium&nec=iaculis&dui=diam&luctus=erat&rutrum=fermentum&nulla=justo&tellus=nec&in=condimentum&sagittis=neque&dui=sapien&vel=placerat&nisl=ante&duis=nulla&ac=justo&nibh=aliquam&fusce=quis&lacus=turpis&purus=eget&aliquet=elit"
      And I wait for 10 seconds
      And I enter a random email as member email "fdewbury1a@patch.com"
      And I wait for 10 seconds
      And I click save member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    