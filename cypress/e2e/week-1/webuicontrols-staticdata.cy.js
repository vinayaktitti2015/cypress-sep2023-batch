/// <reference types="cypress" />
const data = require("../../testdata/userdata.json");
describe("web ui controls", () => {
  beforeEach(() => {
    cy.visit("/samplepagetest/");
  });

  it("test form submission", () => {
    cy.get("input[name='file-553']").selectFile("cypress/testdata/image1.jpg");

    // input data
    cy.get("#g2599-name")
      .clear()
      .type(data.name)
      .should("have.value", data.name);
    cy.get("#g2599-email").clear().type(data.email);
    cy.get("#g2599-website").clear().type(data.website);

    // dropdown
    cy.get("#g2599-experienceinyears")
      .select(data.exp)
      .should("have.value", data.exp);

    // checkboxes and radio buttons
    // cy.get("input[value='Automation Testing']")
    //   .should("not.be.checked")
    //   .check();

    cy.get('[name="g2599-expertise[]"]').check({ multiple: true });

    cy.get("input[value='Post Graduate']").should("not.be.checked").check();

    // alert box
    cy.get("button[onclick='myFunction()']")
      .click()
      .then(() => {
        cy.on("window:alert", (alert) => {
          expect(alert).to.equal("Do you really fill rest of the form?");
          cy.on("window:confirm", () => true);
          cy.on("window:confirm", () => true);
        });
      });

    // input comment box
    cy.get("#contact-form-comment-g2599-comment").clear().type(data.comments);
    cy.get("button[type='submit']")
      .click()
      .then(() => {
        cy.contains(data.message).should("be.visible");

        // 2nd assertion
        cy.get("div[class='content_bgr'] h3:nth-child(1)").then(($el) => {
          const actualMessage = $el.text().trim();
          expect(actualMessage).to.equal(data.message);
        });
      });
  });
});
