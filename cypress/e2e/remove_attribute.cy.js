/// <reference types="cypress" />

describe("Remove Attribute Test Suit", ()=>{
    it("Remove the attribute from the element", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get('.example > a').invoke('removeAttr', 'target').click(); 
        cy.url().should('include','herokuapp.com');
        cy.wait(5000);
        cy.go('back');
    });

    it("Another approach to click on the link without removing the attribute", ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get('.example > a').then((link) => {
            cy.log(link); // log the link element to the browser console
            let url = link.prop('href'); // prop is used to get the value of the href attribute
            cy.log(url); // log the url to the Cypress console
            cy.visit(url);
        });
    });
    });