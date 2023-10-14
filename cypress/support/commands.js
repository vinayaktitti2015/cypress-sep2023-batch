// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// these are the cypress custom commands - u can use it for this project only

import { randomNumber } from "../util/helper";

// reusable commands
// can apply or reuse in the other cypress projects
Cypress.Commands.add("openBrowser", () => {
  cy.visit(Cypress.env("prod") + "/");
});

Cypress.Commands.add("switchToIframe", (iframe) => {
  return (
    cy
      .get(iframe, { log: false })
      .its("0.contentDocument.body", { log: false })
      .should("not.be.empty")
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then((body) => cy.wrap(body, { log: false }))
  );
});

Cypress.Commands.add("parseXlsx", (url) => {
  return cy.task("parseXlsx", { url: url });
});

Cypress.Commands.add("verifyMessage", (args) => {
  cy.contains(args).should("be.visible");
});

Cypress.Commands.add("selectRandomDropdownValue", (ddElement, ddOptions) => {
  cy.get(ddOptions)
    .its("length")
    .then(($len) => {
      const lenValue = $len;
      const list = randomNumber(lenValue);

      cy.get(ddOptions) // parent element
        .eq(list)
        .then((ele) => {
          cy.get(ddElement).select(ele.val()).should("have.value", ele.val());
        });
    });
});

Cypress.Commands.add("selectRandomCheckbox", (element) => {
  cy.get(element)
    .its("length")
    .then(($len) => {
      const lenValue = $len;
      const list = randomNumber(lenValue);

      cy.get(element).eq(list).should("not.be.checked").check();
    });
});
