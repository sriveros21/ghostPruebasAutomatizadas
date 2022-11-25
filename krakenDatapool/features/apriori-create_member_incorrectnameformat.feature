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
      And I enter member name "http://abc.net.au/faucibus/orci.js?elementum=in&ligula=purus&vehicula=eu&consequat=magna&morbi=vulputate&a=luctus&ipsum=cum&integer=sociis&a=natoque&nibh=penatibus&in=et&quis=magnis&justo=dis&maecenas=parturient&rhoncus=montes&aliquam=nascetur&lacus=ridiculus&morbi=mus&quis=vivamus&tortor=vestibulum&id=sagittis&nulla=sapien&ultrices=cum&aliquet=sociis&maecenas=natoque&leo=penatibus&odio=et&condimentum=magnis&id=dis&luctus=parturient&nec=montes&molestie=nascetur&sed=ridiculus&justo=mus&pellentesque=etiam&viverra=vel&pede=augue&ac=vestibulum&diam=rutrum&cras=rutrum&pellentesque=neque&volutpat=aenean&dui=auctor&maecenas=gravida&tristique=sem&est=praesent&et=id&tempus=massa&semper=id&est=nisl&quam=venenatis&pharetra=lacinia&magna=aenean&ac=sit&consequat=amet&metus=justo&sapien=morbi&ut=ut&nunc=odio&vestibulum=cras&ante=mi&ipsum=pede&primis=malesuada&in=in&faucibus=imperdiet&orci=et&luctus=commodo&et=vulputate&ultrices=justo&posuere=in&cubilia=blandit&curae=ultrices&mauris=enim&viverra=lorem&diam=ipsum&vitae=dolor&quam=sit&suspendisse=amet&potenti=consectetuer&nullam=adipiscing&porttitor=elit&lacus=proin&at=interdum&turpis=mauris&donec=non&posuere=ligula&metus=pellentesque&vitae=ultrices&ipsum=phasellus&aliquam=id&non=sapien&mauris=in&morbi=sapien&non=iaculis&lectus=congue&aliquam=vivamus&sit=metus"
      And I wait for 10 seconds
      And I enter member email "gswanbourne1n@wordpress.com"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    