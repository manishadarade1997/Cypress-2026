import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on Ecommerce Page", function () {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/");
})
When("I login to the application", function(data) {
    // this.data.productName1 = "Nokia";
    // this.data.productName2 = "Samsung";
    cy.get('#username').type(this.data.username);
    cy.get('#password').type(this.data.password);
    cy.get('#signInBtn').click();
})

When("I login to the application portal", function(tableData) {
    cy.get('#username').type(tableData.rawTable[1][0]);
    cy.get('#password').type(tableData.rawTable[1][1]);
    cy.get('#signInBtn').click();
})

When("I add items to cart and checkout", function(tableData) {
    // const productName1 = "Nokia";
    // const productName2 = "Samsung";
    cy.wait(2000);
    cy.contains("Shop Name").should('be.visible');
    cy.get('app-card').should('have.length', 4);
    // Select the product using filter command
    cy.get('app-card').filter(`:contains("${tableData.rawTable[1][0]}")`).then(($element) =>{
        cy.wrap($element).should('contain.text', tableData.rawTable[1][0]);
        cy.wrap($element).contains('button', 'Add').click();
    });
    // Select the product using filter command
    cy.get('app-card').filter(`:contains("${tableData.rawTable[1][1]}")`).then(($element) =>{
        cy.wrap($element).should('contain.text', tableData.rawTable[1][1]);
        cy.wrap($element).contains('button', 'Add').click();
    });
    cy.contains('a', 'Checkout').click();
})
When("Validate the total price limit is 200000", function() {
    let sum = 0;
    // Verify the total amount of the products in the cart and perfrom the addition of the products
    // and then check the total amount is less than 200000
    cy.get('tr td:nth-child(4) strong').each(($total) => {
        // split the text by space into array and then get second element of the array and then trim the string and then convert it to float
        const totalText = parseFloat($total.text().split(" ")[1].trim());
        cy.log(totalText);
        sum = sum + totalText;
        cy.log(sum);
    }).then(() => {
        expect(sum).to.be.lessThan(200000);
    });
})
Then("Select the country submit and verify the message", function() {
    cy.contains('button', 'Checkout').click();
    cy.get('#country').type("Ind");
    cy.wait(5000);
    // here :nth-child() is jquery selector which is used to select the nth child of the parent element
    cy.get('.suggestions > ul > li > a').each($ele => {
        if( $ele.text() === "India"){
            cy.wrap($ele).click();
        }
    });
    // check the checkbox and click on purchase button
    cy.get('#checkbox2').check({force: true}).should('be.checked');
    cy.get('input[type="submit"]').click();
    cy.get('.alert-success strong').should('contain.text', 'Success');
    cy.get('div .alert-success').contains('Success! Thank you! Your order will be delivered in next few weeks :-).').should('be.visible');
})