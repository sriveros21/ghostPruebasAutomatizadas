Feature: EditUser

    @user1 @web
    Scenario: Como usuario quiero editar la informacion de mi perfil
      Given I navigate to page "http://localhost:2368/ghost/#/signin"
      And I wait for 2 seconds
      When I enter email "<USERNAME>"
      And I enter password "<PASSWORD>"
      And I click sign in
      And I wait for 5 seconds
      And I click userpic
      And I wait for 1 seconds
      Then I click your profile
      And I wait for 1 seconds
      And I enter user name "https://goodreads.com/id.jsp?duis=ac&bibendum=consequat&felis=metus&sed=sapien&interdum=ut&venenatis=nunc&turpis=vestibulum&enim=ante&blandit=ipsum&mi=primis&in=in&porttitor=faucibus&pede=orci&justo=luctus&eu=et&massa=ultrices&donec=posuere&dapibus=cubilia&duis=curae&at=mauris&velit=viverra&eu=diam&est=vitae&congue=quam&elementum=suspendisse&in=potenti&hac=nullam&habitasse=porttitor&platea=lacus&dictumst=at&morbi=turpis&vestibulum=donec&velit=posuere&id=metus&pretium=vitae&iaculis=ipsum&diam=aliquam&erat=non&fermentum=mauris&justo=morbi&nec=non&condimentum=lectus&neque=aliquam&sapien=sit&placerat=amet&ante=diam&nulla=in&justo=magna&aliquam=bibendum&quis=imperdiet&turpis=nullam&eget=orci&elit=pede&sodales=venenatis&scelerisque=non&mauris=sodales&sit=sed&amet=tincidunt&eros=eu&suspendisse=felis&accumsan=fusce&tortor=posuere&quis=felis&turpis=sed&sed=lacus&ante=morbi&vivamus=sem&tortor=mauris&duis=laoreet&mattis=ut&egestas=rhoncus&metus=aliquet&aenean=pulvinar&fermentum=sed&donec=nisl&ut=nunc&mauris=rhoncus&eget=dui&massa=vel"
      And I wait for 10 seconds
      And I click save user changes
      And I wait for 2 seconds
      And I click staff link
      And I wait for 2 seconds
    