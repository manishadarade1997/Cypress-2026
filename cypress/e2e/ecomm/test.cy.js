/// <reference types="cypress" />

describe("E-commerce test suit", () => {
    it("Search the vegiess and add to cart on E-commerce website", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.wait(2000);
        // cy.get('.products').find('.product').eq(3).contains("Cashews - 1 Kg").should("be.visible");
        // cy.get('.products').find('.product').eq(1).contains("Carrot - 1 Kg").should("be.visible");

        cy.get('.products').find('.product').each(($element, $index, $list) => {
            const veggieName = $element.find('h4.product-name').text();
            if(veggieName.includes("Cashews - 1 Kg")){
                cy.wrap($element).find('button').click();
            }
            
            // if(veggieName.includes("Carrot - 1 Kg")){
            //     carrot = $element.find('.product-name').text();
            //     cy.wrap($element).find('button').click();
            // }
        });

        cy.get('.cart-icon > img').click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.contains("Place Order").click();
        //cy.get('ul.cart-items').should('have.length', 1);


});
});