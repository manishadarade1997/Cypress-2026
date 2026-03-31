/// <reference types = "cypress"/>
describe("Dropdown test suite", () => {
    // beforeEach(() => {
    //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // });

    // 1. Static dropdown (fixed)- 'select will be the tagname for any static dropdown that is html rule.'
    it("Statis dropdown", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('select').select('option2').should('have.value', 'option2');
    });

    // 2. Dynamic dropdown - where we type and get the suggestions
    it("Dynamic dropdown", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#autocomplete').type('in');
        cy.get('.ui-menu-item div').each(($ele, $index, $list) =>{
            if($ele.text() === 'India'){
                cy.wrap($ele).click();
            }
        });
        cy.get('#autocomplete').should('have.value', 'India');

    });

    it("My first checkbox test", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkbox-example').should('be.visible');
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3');
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked');

        // select mutiple checkbox
        cy.get('input[type="checkbox"]').check(['option1', 'option2','option3']).should('be.checked');
    });

    // Radio button
    it('Select Radio button', () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('[value="radio2"]').click();
    })

    // visible and invisible element 
    it("validation for visible and invisible elements", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
    });
});