//import { reject } from "bluebird"

describe("Promises in Cypress", () => {
    it("should demonstrate the use of promises in Cypress", () => {
        // Create a promise that resolves after 2 seconds
        const myPromise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                const data = true; // true or false
                if(data){
                    resolve(data);
                } else {
                    reject(new Error("Data is not fetched"));
                }
            }, 4000)
        });

    // handle the promise and log the result
    cy.wrap(myPromise).then(
        (data) => {
            cy.log("Data is fetched successfully: ", data);
        },
        (error) => {
            cy.log("Error: ", error);
        }
    );
});
});