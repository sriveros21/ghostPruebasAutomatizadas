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
    And I wait for 1 seconds
    And I enter bio "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie"
    And I wait for 8 seconds
    And I click save user changes
    And I wait for 5 seconds
    And I click staff link
    And I wait for 2 seconds
    