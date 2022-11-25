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
      And I enter user name "https://jiathis.com/at/velit.json?nulla=id&mollis=luctus&molestie=nec&lorem=molestie&quisque=sed&ut=justo&erat=pellentesque&curabitur=viverra&gravida=pede&nisi=ac&at=diam&nibh=cras&in=pellentesque&hac=volutpat&habitasse=dui&platea=maecenas&dictumst=tristique&aliquam=est&augue=et&quam=tempus&sollicitudin=semper&vitae=est&consectetuer=quam&eget=pharetra&rutrum=magna&at=ac&lorem=consequat&integer=metus&tincidunt=sapien&ante=ut&vel=nunc&ipsum=vestibulum&praesent=ante&blandit=ipsum&lacinia=primis&erat=in&vestibulum=faucibus&sed=orci&magna=luctus&at=et&nunc=ultrices&commodo=posuere&placerat=cubilia&praesent=curae&blandit=mauris&nam=viverra&nulla=diam"
      And I wait for 10 seconds
      And I click save user changes
      And I wait for 2 seconds
      And I click staff link
      And I wait for 2 seconds
    