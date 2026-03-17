// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (username, password) => {
    // Creating a session for login to amazon account and using the session in the test case to avoid login every time in the test case
    cy.session('amazonLogin', () => {
        cy.visit("https://www.amazon.in/s?k=join+amazon+prime&adgrpid=1327112148528381&hvadid=82944775541359&hvbmt=bb&hvdev=c&hvlocphy=157689&hvnetw=o&hvqmt=b&hvtargid=kwd-82945393014646%3Aloc-90&hydadcr=5626_2377281&mcid=3861a9d242543041b997efa1f39279d3&msclkid=c099b4ff045d1c944006dd557475a908&tag=msndeskstdin-21&ref=pd_sl_9ntprzamt3_b");
        cy.get("#nav-link-accountList-nav-line-1").click();
        cy.get("#ap_email_login").should("be.visible").type(username);
        cy.get("#continue").click();
        cy.get("#ap_password").type(password);
        cy.get("#signInSubmit").click();
    });

    // After session is created/restored, ensure the browser is on a real Amazon page
    // (cy.session may restore cookies but leave the test at about:blank), so navigate explicitly
    cy.visit('https://www.amazon.in/s?k=join+amazon+prime');
});

