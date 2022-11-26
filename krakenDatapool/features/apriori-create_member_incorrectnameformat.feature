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
      And I enter member name "https://msn.com/lorem/vitae.html?mauris=sapien&lacinia=varius&sapien=ut&quis=blandit&libero=non&nullam=interdum&sit=in&amet=ante&turpis=vestibulum&elementum=ante&ligula=ipsum&vehicula=primis&consequat=in&morbi=faucibus&a=orci&ipsum=luctus&integer=et&a=ultrices&nibh=posuere&in=cubilia&quis=curae&justo=duis&maecenas=faucibus&rhoncus=accumsan&aliquam=odio&lacus=curabitur&morbi=convallis&quis=duis&tortor=consequat&id=dui&nulla=nec&ultrices=nisi&aliquet=volutpat&maecenas=eleifend&leo=donec&odio=ut&condimentum=dolor&id=morbi&luctus=vel&nec=lectus&molestie=in&sed=quam&justo=fringilla&pellentesque=rhoncus&viverra=mauris&pede=enim&ac=leo&diam=rhoncus&cras=sed&pellentesque=vestibulum&volutpat=sit&dui=amet&maecenas=cursus&tristique=id&est=turpis&et=integer&tempus=aliquet&semper=massa&est=id&quam=lobortis&pharetra=convallis&magna=tortor&ac=risus&consequat=dapibus&metus=augue&sapien=vel&ut=accumsan&nunc=tellus&vestibulum=nisi&ante=eu&ipsum=orci&primis=mauris&in=lacinia&faucibus=sapien&orci=quis&luctus=libero&et=nullam&ultrices=sit&posuere=amet&cubilia=turpis&curae=elementum&mauris=ligula&viverra=vehicula"
      And I wait for 10 seconds
      And I enter member email "aluther16@scribd.com"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    