/// <reference types="cypress">
describe("API Automation test suit", ()=>{
    it("Unauthorized access to the API", ()=>{
        cy.request({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=manisha1234',
            failOnStatusCode : false
        }).then((res) => {
            expect(res.status).to.eq(404);
            expect(res.statusText).to.eq("Not Found");

            // assertion for the response body
            //expect(res.body).to.have.property('msg', 'The book by requested bookid / author name does not exists!');

            // assertion for the response body above and below both are same 
            expect(res.body.msg).to.eq("The book by requested bookid / author name does not exists!");
        });
    });
});