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
      And I enter a random name as member name "http://people.com.cn/bibendum/morbi/non.xml?pulvinar=vel&sed=accumsan&nisl=tellus&nunc=nisi&rhoncus=eu&dui=orci&vel=mauris&sem=lacinia&sed=sapien&sagittis=quis&nam=libero&congue=nullam&risus=sit&semper=amet&porta=turpis&volutpat=elementum&quam=ligula&pede=vehicula&lobortis=consequat&ligula=morbi&sit=a&amet=ipsum&eleifend=integer&pede=a&libero=nibh&quis=in&orci=quis&nullam=justo&molestie=maecenas&nibh=rhoncus&in=aliquam&lectus=lacus&pellentesque=morbi&at=quis&nulla=tortor&suspendisse=id&potenti=nulla&cras=ultrices&in=aliquet&purus=maecenas&eu=leo&magna=odio&vulputate=condimentum&luctus=id&cum=luctus&sociis=nec&natoque=molestie&penatibus=sed&et=justo&magnis=pellentesque&dis=viverra&parturient=pede&montes=ac&nascetur=diam&ridiculus=cras&mus=pellentesque&vivamus=volutpat&vestibulum=dui&sagittis=maecenas&sapien=tristique&cum=est&sociis=et&natoque=tempus&penatibus=semper&et=est&magnis=quam&dis=pharetra&parturient=magna&montes=ac&nascetur=consequat&ridiculus=metus&mus=sapien&etiam=ut&vel=nunc&augue=vestibulum&vestibulum=ante&rutrum=ipsum&rutrum=primis"
      And I wait for 10 seconds
      And I enter a random email as member email "wdyche10@dailymail.co.uk"
      And I wait for 10 seconds
      And I click save member
      And I wait for 10 seconds
      And I click members link
      And I wait for 10 seconds
    