describe("Dropdown test suite", () => {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });

    it("validation for visible and invisible elements", () =>{
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
    });
});