/// < reference type = "Cypress">

describe("API Automation test suit", ()=>{
    it("Mock the API response", ()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        
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

            // assertion for the response body length +1 because of the header row in the table
            cy.get('tr').should('have.length', res.response.body.length+1);
        });
        cy.get('p').should('have.text', "Oops only 1 Book available");
    });

    it("spy the API response", ()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        }).as('getalltheBooks');

        cy.get("button[class='btn btn-primary']").click();

        cy.wait('@getalltheBooks').then((res) => {
            expect(res.response.statusCode).to.eq(200);
        });
    });
});