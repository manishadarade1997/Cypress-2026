describe("Table suite", () => {
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
    it("find the Python course price", () =>{
        //nth-child is used to get the nth child element of the parent element
        cy.get('[name="courses"] tbody tr td:nth-child(2)').each(($ele, $index, $list) => {
            const course =$ele.text();
            if(course.includes('Python')){
                // .next() is used to get the next sibling element of the current element
                cy.get('[name="courses"] tbody tr td:nth-child(2)').eq($index).next().then((price) => {
                    const price1 = price.text();
                    expect(price1).to.equal('25');
                })
            }
        })

    });
});