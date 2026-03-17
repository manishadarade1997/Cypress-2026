/// < type references = "cypress">

describe("Flight booking", () => {
    beforeEach("Login to vimaansafar", ()=>{
        cy.Loginto_VimanSafar();
        cy.visit(cy.env('base_url'));
    });
    it.skip("Click on the flight option", ()=>{
        cy.contains('flight').click();

    });

})