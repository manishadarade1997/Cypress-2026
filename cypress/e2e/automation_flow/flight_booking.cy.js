/// < type references = "cypress">

describe("Flight booking", () => {
    beforeEach("Login to vimaansafar", ()=>{
        cy.Loginto_VimanSafar();
        cy.visit(Cypress.env('base_url'));
    });
    it("Click on the flight option", ()=>{
        cy.contains('flight').click();

    });

})