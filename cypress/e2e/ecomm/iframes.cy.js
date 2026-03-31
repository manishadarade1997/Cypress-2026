/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';

describe("iframes", () => {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
    it("iframes test", () => {
        // first we need to load the iframe using cy.frameLoaded() method and then we can use cy.iframe() method to find the element inside the iframe
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href='mentorship']").click();
        cy.iframe().find('h1[class="pricing-title"]').should('have.length', 2);
    });
});