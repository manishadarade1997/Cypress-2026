
describe("File Operations - Read and Write", () => {
    it("write to a file", () => {
        cy.writeFile('cypress/fixtures/user.json',{
            name : "Manisha",
            email : "manisha@example.com",
            phoneno : "980796854",
            age: 30
        })
    });

    it("read from a file", () => {
        cy.readFile('cypress/fixture/user.json').then((user)=>{
            expect(user).to.have.property('name', 'Manisha');
            expect(user.email).to.equal('manisha@example.com');
            expect(user.phoneno).to.match(/^\d{9}$/);
            expect(user.age).to.be.within(18, 65);
        })
    });
});