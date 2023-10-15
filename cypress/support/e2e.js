// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "./e2eflow";

import "cypress-iframe";
require("cypress-downloadfile/lib/downloadFileCommand");
require("cy-verify-downloads").addCustomCommand();
// Alternatively you can use CommonJS syntax:
// require('./commands')

/**
 * import packages
 * global hooks or annotations
 */

export const setupHooks = () => {
  before(() => {
    cy.log("global pre-hooks");
  });

  beforeEach(() => {
    cy.log("global beforeEach hooks");
  });

  afterEach(() => {
    cy.log("global afterEach hooks");
  });

  after(() => {
    cy.log("global post-hooks");
  });
};

Cypress.on("uncaught:exception", (err) => {
  return false;
});
