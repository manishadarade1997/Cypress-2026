describe("Fixture Example - Using fixture data in tests", () => {
    beforeEach("load fixture data", () => {
        cy.fixture("user.json").as('userData');
    });
    it("should use fixture data to fill the form", function() {
        cy.visit("https://practice-automation.com/modals/");
        cy.get('#formModal').click();
        cy.get('#g1051-name').type(this.userData.name); // 
        expect(this.userData.name).to.equal("Manisha");
        cy.get('#g1051-email').type(this.userData.email);
        expect(this.userData.email).to.equal("manisha@example.com");
    
    });
});