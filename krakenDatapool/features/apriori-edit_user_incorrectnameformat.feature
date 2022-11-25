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
      And I enter user name "http://yelp.com/curae/mauris/viverra/diam/vitae.json?vestibulum=cursus&ac=id&est=turpis&lacinia=integer&nisi=aliquet&venenatis=massa&tristique=id&fusce=lobortis&congue=convallis&diam=tortor&id=risus&ornare=dapibus&imperdiet=augue&sapien=vel&urna=accumsan&pretium=tellus&nisl=nisi&ut=eu&volutpat=orci&sapien=mauris&arcu=lacinia&sed=sapien&augue=quis&aliquam=libero&erat=nullam&volutpat=sit&in=amet&congue=turpis&etiam=elementum&justo=ligula&etiam=vehicula&pretium=consequat&iaculis=morbi&justo=a&in=ipsum&hac=integer&habitasse=a&platea=nibh&dictumst=in&etiam=quis&faucibus=justo&cursus=maecenas&urna=rhoncus&ut=aliquam&tellus=lacus&nulla=morbi&ut=quis&erat=tortor&id=id&mauris=nulla&vulputate=ultrices&elementum=aliquet&nullam=maecenas&varius=leo&nulla=odio&facilisi=condimentum&cras=id&non=luctus&velit=nec&nec=molestie&nisi=sed&vulputate=justo&nonummy=pellentesque&maecenas=viverra&tincidunt=pede&lacus=ac&at=diam&velit=cras&vivamus=pellentesque&vel=volutpat&nulla=dui&eget=maecenas&eros=tristique&elementum=est&pellentesque=et&quisque=tempus&porta=semper&volutpat=est&erat=quam&quisque=pharetra&erat=magna&eros=ac&viverra=consequat"
      And I wait for 10 seconds
      And I click save user changes
      And I wait for 2 seconds
      And I click staff link
      And I wait for 2 seconds
    