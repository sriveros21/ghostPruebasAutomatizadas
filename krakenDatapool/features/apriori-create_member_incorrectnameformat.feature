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
      And I enter member name "http://ask.com/ut/erat/id/mauris/vulputate/elementum/nullam.html?accumsan=at&tellus=nibh&nisi=in&eu=hac&orci=habitasse&mauris=platea&lacinia=dictumst&sapien=aliquam&quis=augue&libero=quam&nullam=sollicitudin&sit=vitae&amet=consectetuer&turpis=eget&elementum=rutrum&ligula=at&vehicula=lorem&consequat=integer&morbi=tincidunt&a=ante&ipsum=vel&integer=ipsum&a=praesent&nibh=blandit&in=lacinia&quis=erat&justo=vestibulum&maecenas=sed&rhoncus=magna&aliquam=at&lacus=nunc&morbi=commodo&quis=placerat&tortor=praesent&id=blandit&nulla=nam&ultrices=nulla&aliquet=integer&maecenas=pede&leo=justo&odio=lacinia&condimentum=eget&id=tincidunt&luctus=eget&nec=tempus&molestie=vel&sed=pede&justo=morbi&pellentesque=porttitor&viverra=lorem&pede=id&ac=ligula&diam=suspendisse&cras=ornare&pellentesque=consequat&volutpat=lectus"
      And I wait for 10 seconds
      And I enter member email "gsawney2@imageshack.us"
      And I wait for 10 seconds
      And I click save new member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    