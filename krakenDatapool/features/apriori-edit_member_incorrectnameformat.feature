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
      And I enter a random name as member name "https://berkeley.edu/etiam/pretium/iaculis/justo/in.jpg?convallis=rutrum&duis=neque&consequat=aenean&dui=auctor&nec=gravida&nisi=sem&volutpat=praesent&eleifend=id&donec=massa&ut=id&dolor=nisl&morbi=venenatis&vel=lacinia&lectus=aenean&in=sit&quam=amet&fringilla=justo&rhoncus=morbi&mauris=ut&enim=odio&leo=cras&rhoncus=mi&sed=pede&vestibulum=malesuada&sit=in&amet=imperdiet&cursus=et&id=commodo&turpis=vulputate&integer=justo&aliquet=in&massa=blandit&id=ultrices&lobortis=enim&convallis=lorem&tortor=ipsum&risus=dolor&dapibus=sit&augue=amet&vel=consectetuer&accumsan=adipiscing&tellus=elit&nisi=proin&eu=interdum&orci=mauris&mauris=non&lacinia=ligula&sapien=pellentesque&quis=ultrices&libero=phasellus&nullam=id&sit=sapien&amet=in&turpis=sapien&elementum=iaculis&ligula=congue&vehicula=vivamus&consequat=metus&morbi=arcu"
      And I wait for 10 seconds
      And I enter a random email as member email "yjuster2o@salon.com"
      And I wait for 10 seconds
      And I click save member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    