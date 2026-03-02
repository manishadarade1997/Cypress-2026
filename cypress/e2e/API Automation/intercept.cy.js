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
        cy.wait('@getSingleBook');
        cy.get('p').should('have.text', "Oops only 1 Book available");
    });

    it.only("spy the API response", ()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        }).as('getalltheBooks');

        cy.get("button[class='btn btn-primary']").click();

        cy.wait(500000);

        cy.wait('@getalltheBooks', {timeout: 100000}).should(({request, response}) => {
            expect(request.method).to.eq('GET');
            expect(response.statusCode).to.eq(200);
        });

        cy.wait('@getalltheBooks').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
        });
    });
});