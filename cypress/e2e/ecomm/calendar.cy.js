/// <reference types="cypress" />
describe("Web tables", () => {
    it("Change the date from calendar", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        const targetDate = "15";
        const targetMonth = "July";
        const targetYear = "2027";
        let monthNumber;
        const expectedList = [targetMonth, targetDate, targetYear];
        cy.get('.react-date-picker__inputGroup').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.get('button.react-calendar__navigation__label').click();
        cy.get('.react-calendar__tile.react-calendar__decade-view__years__year').each(($ele) => {
          const yearText = $ele.text();
          if(yearText.includes(targetYear)){
            cy.wrap($ele).click();
          }
        });
        cy.get('.react-calendar__tile.react-calendar__year-view__months__month').each(($ele) => {
           const monthText = $ele.text();
           if(monthText.includes(targetMonth)){
            cy.wrap($ele).click().then(() => {
                monthNumber = (new Date(`${monthText} 1, 2026`).getMonth() + 1).toString(); // Convert month name to month number
                expectedList[0] = monthNumber; // Update the expectedList with the month number
                cy.log(`Selected month number: ${monthNumber}`);
            });
           }
        });
        cy.get('.react-calendar__month-view__days').each(($ele) => {
            const dateText = $ele.text();
            if(dateText.includes(targetDate)){
                cy.wrap($ele).click();
            }
        });

        //Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        });
    });
});

// describe('Calendar test',()=>
// {
 
//     it('Verify date selection',()=>{
 
//         const monthNumber = "6";
//         const date = "15";
//         const year = "2027";
//         const expectedList = [monthNumber,date,year];
 
//         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//         cy.wait(5000)
//         cy.get(".react-date-picker__inputGroup").click();
 
//         cy.get(".react-calendar__navigation__label").click();
//         cy.get(".react-calendar__navigation__label").click();
//         cy.contains("button",year).click();
//         cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
//         cy.contains("abbr",date).click();
 
//         //Assertion
//         cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
//         {
//             cy.wrap($el).invoke('val').should('eq',expectedList[index]);
//         }
//         )     
//     })

// })