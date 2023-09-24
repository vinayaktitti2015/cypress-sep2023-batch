import { setupHooks } from "../../support/e2e";
describe("All test suite ", () => {
  describe("test suite for web automation", () => {
    setupHooks();

    before(() => {
      // make a db connection
      // make a api call
      cy.log("make a db connection");
      cy.log("make a db connection");
    });

    beforeEach(() => {
      // open a website
      cy.log("open a website");
    });
    it("test case 001", () => {
      cy.log("test case 001");
    });

    it("test case 002", () => {
      cy.log("test case 002");
    });

    it("test case 003", () => {
      cy.log("test case 003");
    });

    afterEach(() => {
      cy.log("close the browser");
    });

    after(() => {
      cy.log("close the db connection");
    });
  });
  describe("test suite for API testing", () => {
    it("fetch api call", () => {
      cy.log("fetch api call");
    });
  });

  describe.skip("test suite for visual testing", () => {
    it("check layout of the app", () => {
      cy.log("check layout of the app");
    });
  });
});
