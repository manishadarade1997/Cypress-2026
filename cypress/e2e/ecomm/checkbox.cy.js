/// < reference types = "Cypress" />
describe("Checkboxes on the page", () => {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
    it("My first checkbox test", () =>{
        cy.get('#checkbox-example').should('be.visible');
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3');
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked');

        // select mutiple checkbox
        cy.get('input[type="checkbox"]').check(['option1', 'option2','option3']).should('be.checked');
    });
});
