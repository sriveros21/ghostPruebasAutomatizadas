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
      And I enter user name "http://github.com/quam/suspendisse/potenti.xml?curae=nullam&duis=molestie&faucibus=nibh&accumsan=in&odio=lectus&curabitur=pellentesque&convallis=at&duis=nulla&consequat=suspendisse&dui=potenti&nec=cras&nisi=in&volutpat=purus&eleifend=eu&donec=magna&ut=vulputate&dolor=luctus&morbi=cum&vel=sociis&lectus=natoque&in=penatibus&quam=et&fringilla=magnis&rhoncus=dis&mauris=parturient&enim=montes&leo=nascetur&rhoncus=ridiculus&sed=mus&vestibulum=vivamus&sit=vestibulum&amet=sagittis&cursus=sapien&id=cum&turpis=sociis"
      And I wait for 10 seconds
      And I click save user changes
      And I wait for 2 seconds
      And I click staff link
      And I wait for 2 seconds
    