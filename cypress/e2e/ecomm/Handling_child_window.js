/// < reference types = "Cypress"/>

describe("open link in same window", () =>{
    it.skip("remove attribute", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.title('Foundations of Modern Higher Education');
    });

    it("another way to open the link on same page", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').then((text) => {
           const txt = text.prop('href');
            cy.visit(txt);
        });
        cy.title('Foundations of Modern Higher Education');
    });

    it("switching from one domain to another domain", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').then((link) => {
           const link1 = link.prop('href');
            cy.visit(link1);
            cy.origin(URL, () => {
                cy.get('#click on about').click();
            })
        });
        cy.title('Foundations of Modern Higher Education');
    });
});