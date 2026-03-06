/// < reference type = "Cypress">

describe("API request test suit", ()=>{
    it("GET request to fetch the list of books", ()=>{
        cy.request({
            method : "GET",
            url : "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.statusText).to.eq("OK");

            // assertion for the response body
            expect(response).to.have.property('body').that.is.not.empty;
            expect(response.body).to.be.an('array').and.to.have.length.greaterThan(0);
            expect(response.body[0]).to.have.property('book_name');
            // access the first book in the response body and assert the properties and their values
            expect(response.body[0].book_name).to.eq('RestAssured with Java');
            expect(response.body[0].book_name).to.be.a('string');
            expect(response.body[1].book_name).to.eq('RestAssured with Java');

            // assertion for the response headers
            expect(response).to.have.property('headers');
            expect(response.headers).to.have.property('content-type').that.includes('application/json');
            expect(response.headers).to.have.property('content-type').that.is.a('string');
            expect(response.headers).to.have.property('server').that.is.a('string');
            expect(response.headers).to.have.property('date').that.is.a('string');
            expect(response.headers).to.have.property('access-control-allow-methods').to.eq('POST');

            // assertion for the response time            
            expect(response).to.have.property('duration');
            expect(response.duration).to.be.lessThan(2000);

            // Assertion for response cookies
            cy.getCookies().then((cookies) => {
                expect(cookies).to.be.an('array');
                expect(cookies).to.have.length(0); // Assuming no cookies are expected
            });
        });
    });
});