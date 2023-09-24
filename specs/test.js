import { getCompany } from "../modules/company";

console.log(getCompany);

/**
 * install cypress package
 * by default, it will run all tests in
 * mocha framework
 */

describe("Company", () => {
  it.only("should get company", () => {
    cy.visit("/");
    cy.contains("Get Company").click();
    cy.wait(1000);
    cy.get(".company-name").should("exist");
  });
});

/**
 * cypress-cucumber-preprocessor package
 * install cypress-cucumber-preprocessor
 * import package
 * then use it in the project
 */

// Given I open {string} page
// When I fill the FormData
// And I click the submit button
// Then I should see the {string} message

/**
 *
 * Agile Methology - scrum team involve in automation
 * 3 amigos
 * Product owner
 * developer
 * qa team
 */

// locator startegy
// nth-child(odd number)
// nth-child(even number)


