Cypress.Commands.add("Loginto_VimanSafar", (email, password)=>{
// creating a session for the login
cy.session("Login", () =>{
	cy.visit(cy.env('base_url'));
	cy.get('#multiuse_form_style').within(() =>{
		cy.get('#email').clear().type(cy.env(email));
		cy.get('#password').clear().type(cy.env(password), {log : false});
		cy.get('.py-2 d-flex justify-content-between').find('input[type="checkbox"]').check().should('be.checked').and('have.value', 'Remember me');
		cy.contains('Login').click();
});
});
});