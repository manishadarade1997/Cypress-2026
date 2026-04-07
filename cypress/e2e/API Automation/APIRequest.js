/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;
let apiUrl;

Given("I have the books API endpoint", () => {
  apiUrl = "https://rahulshettyacademy.com/Library/GetBook.php";
});

When("I send a GET request with author name {string}", (authorName) => {
  cy.request({
    method: "GET",
    url: `${apiUrl}?AuthorName=${authorName}`,
  }).then((res) => {
    response = res;
  });
});

Then("the response status code should be {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode);
  expect(response.statusText).to.eq("OK");
});

Then("the response body should contain book details", () => {
  expect(response).to.have.property("body").that.is.not.empty;
  expect(response.body).to.be.an("array").and.to.have.length.greaterThan(0);
  expect(response.body[0]).to.have.property("book_name");
  expect(response.body[0].book_name).to.be.a("string");
});

Then("the response time should be less than {int} milliseconds", (duration) => {
  expect(response).to.have.property("duration");
  expect(response.duration).to.be.lessThan(duration);
});

Then("the response should have {string} header with {string}", (headerName, headerValue) => {
  expect(response).to.have.property("headers");
  expect(response.headers)
    .to.have.property(headerName)
    .that.includes(headerValue);
});

Then("the response should have {string} header", (headerName) => {
  expect(response.headers).to.have.property(headerName).that.is.a("string");
});
