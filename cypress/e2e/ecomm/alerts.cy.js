/// < reference types = "Cypress"/>
describe("Browser Alerts", () => {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
    it("JS alert", () =>{
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        1. // window:alert
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        2. // window:confirm
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // close the window using window:confirm
        // cy.on('window:confirm', () => false);
    });

    // cy.window()
    // create a method cy.window() which we need to create before opening a alert window because 
    // alert window having the input box on the alert where we can pass a value
    // So we have to take a control on it before sending the alert window

    it("Enter value in alert input box", () => {
        cy.vis
        cy.window().then((win) => {
            cy.stub(win, 'promt').returns('welcome'); // it will write the text "welcome" on input box
        });
        cy.get("button[onclick='JsPromt']").click();

        // close the window alert using window:promt
        //cy.on('window:promt', () => false);
    });


});
