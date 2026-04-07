Feature: End to end Ecommerce validation

@Smoke
Scenario: : Ecommerce products deliver
Given I am on Ecommerce Page
When I login to the application
And I add items to cart and checkout
| productName1 | productName2 |
| Nokia Edge   | Samsung      |
And Validate the total price limit is 200000
Then Select the country submit and verify the message

@Regression
Scenario Outline: : Ecommerce products deliver
Given I am on Ecommerce Page
When I login to the application portal
| username           | password          |
| rahulshettyacademy | Learning@830$3mK2 |
And I add items to cart and checkout
| productName1 | productName2 |
| Nokia Edge   | Samsung      |
And Validate the total price limit is 200000
Then Select the country submit and verify the message