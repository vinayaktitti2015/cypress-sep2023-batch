/// <reference types="cypress" />
describe("web ui controls", () => {
  beforeEach(function() {
    cy.visit("/samplepagetest/");

    cy.fixture("userdata").then((testData) => {
      this.testData = testData;
    });
  });

  it("test form submission", function () {
    cy.get("input[name='file-553']").selectFile("cypress/testdata/image1.jpg");

    // input data
    cy.get("#g2599-name")
      .clear()
      .type(this.testData.name)
      .should("have.value", this.testData.name);
    cy.get("#g2599-email").clear().type(this.testData.email);
    cy.get("#g2599-website").clear().type(this.testData.website);

    // dropdown
    cy.get("#g2599-experienceinyears")
      .select(this.testData.exp)
      .should("have.value", this.testData.exp);

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
    cy.get("#contact-form-comment-g2599-comment")
      .clear()
      .type(this.testData.comments);
    cy.get("button[type='submit']")
      .click()
      .then(() => {
        cy.contains(this.testData.message).should("be.visible");

        // 2nd assertion
        cy.get("div[class='content_bgr'] h3:nth-child(1)").then(($el) => {
          const actualMessage = $el.text().trim();
          expect(actualMessage).to.equal(this.testData.message);
        });
      });
  });
});
