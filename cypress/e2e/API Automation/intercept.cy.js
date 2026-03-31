/// < reference type = "Cypress">

describe("Mock API Automation test suit", ()=>{
    it("Stub - Mock the API response - replacing the real API response with a custom response", ()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.debug();
        
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, 
        {
            statusCode : 200,
            body : [
                {
                "book_name": "RestAssured with Java",
                "isbn": "Manisha",
                "aisle": "2026"
            }
        ]
        }).as('getSingleBook');
        cy.get("button[class='btn btn-primary']").click();
        
        // wait until the reference is solved
        cy.wait('@getSingleBook').then((res) => {
            // assertion for the response status code
            expect(res.response.statusCode).to.eq(200);

            // Integration - assertion for the response body and the UI 
            // length +1 because of the header row in the table
            cy.get('tr').should('have.length', res.response.body.length+1);
        });
        cy.get('p').should('have.text', "Oops only 1 Book available");
    });

    it("spy the API response - only watching the API call", ()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        }).as('getalltheBooks');

        cy.get("button[class='btn btn-primary']").click();

        cy.wait('@getalltheBooks').then((res) => {
            expect(res.response.statusCode).to.eq(200);
            expect(res.response).to.have.property('body').that.is.not.empty;
            expect(res.response).to.have.property('body').that.is.an('array').and.has.length.greaterThan(0);
            expect(res.response.body).to.be.an('array').and.have.length.greaterThan(0);
            expect(res.response.body[0]).to.have.property('book_name').that.is.a('string');
        });
    });
});