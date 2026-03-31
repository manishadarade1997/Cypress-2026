/// <reference types="cypress" />   
describe("E-commerce test suit", () => {
    before(() =>{
        cy.fixture('example').then(function (data){
            this.data=data
        });
    });
    it("end to end test", function() {
        const productName1 = this.data.productName1
        const productName2 = this.data.productName2
        let sum = 0;
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#/");
        cy.get('#username').type(this.data.username);
        cy.get('#password').type(this.data.password);
        cy.get('#signInBtn').click();
        cy.wait(2000);
        cy.contains("Shop Name").should('be.visible');
        cy.get('app-card').should('have.length', 4);

        // Select the product using filter command
        cy.get('app-card').filter(`:contains("${productName1}")`).then(($element) =>{
            cy.wrap($element).should('contain.text', productName1);
            cy.wrap($element).contains('button', 'Add').click();
        });
    });
});