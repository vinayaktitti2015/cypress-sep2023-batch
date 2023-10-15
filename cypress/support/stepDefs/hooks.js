const { Before, After } = require("cypress-cucumber-preprocessor/steps");

Before(() => {
  cy.log("before hooks called");
});

After(() => {
  cy.log("after hooks called");
});
