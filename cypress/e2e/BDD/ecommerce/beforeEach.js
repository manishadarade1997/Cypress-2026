import { Before } from "@badeball/cypress-cucumber-preprocessor";
Before(function(){
    cy.fixture('example.json').then(function(data){
        this.data = data;
    });
});