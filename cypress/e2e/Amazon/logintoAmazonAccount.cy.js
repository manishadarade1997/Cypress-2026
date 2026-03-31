/// < reference type = "Cypress" />
import LoginPage from "../../Pages/AmazonLogin.js";

describe("Login to Amazon Account", () => {

    // Clear cookies before each test to ensure a clean state
    // Login to amazon account
    beforeEach(() =>{
        cy.clearCookies();
        LoginPage.visit();
        LoginPage.username("8482964245");
        LoginPage.password("Mnud@1010");
        LoginPage.submit();

    }) 

    it("Search the laptops on Amazon account", () => {
        cy.url().should('include', 'join+amazon+prime');
        cy.contains(".in").should("be.visible");
        cy.get("#twotabsearchtextbox").click();
        cy.get("#twotabsearchtextbox").clear();
        cy.get("#twotabsearchtextbox").type("laptops");
        cy.get("#nav-search-submit-button").click();
        // Verify that the search results page is displayed
        cy.url().should('include', 'laptops');

        // after searching for laptops, verify that the laptops category is visible on the search results page
        cy.get('h2').find('.a-color-state.a-text-bold').should('contain', 'laptops');
        //cy.contains("laptops").should("be.visible");
        // Verify that the search results contain laptops
        //cy.get(".s-main-slot").should("contain", "laptop");

        // every time search result will change so we can not verify the search result but we can verify the search result page is displayed and laptops category is visible on the search results page
       

        // // mock the search results by intercepting the network request and providing a fixture file with laptop search results
        // cy.intercept("GET", "**/s?k=laptops**", { fixture: "laptopSearchResults.json" }).as("getLaptopSearchResults");
        // cy.get("#twotabsearchtextbox").type("laptops");
        // cy.get("#nav-search-submit-button").click();
        // cy.wait("@getLaptopSearchResults");
    });
    it("Search the mobile phones on Amazon account", () => {
        LoginPage.visit();
        cy.url({setTimeout: 10000}).should('include', 'join+amazon+prime');
        cy.contains(".in").should("be.visible");
        cy.get("#twotabsearchtextbox").click();
        cy.get("#twotabsearchtextbox").clear();
        cy.get("#twotabsearchtextbox").type("mobile phones");
        cy.get("#nav-search-submit-button").click();

    });
});