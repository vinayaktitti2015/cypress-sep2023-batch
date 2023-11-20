describe("tabs handling", () => {
  it("remove the target attr", () => {
    cy.visit("https://phptravels.com/demo");
    //cy.viewport("macbook-16");
    cy.contains("Login")
      .first()
      .invoke("removeAttr", "target")
      .click()
      .then(() => {
        cy.contains("Sign in to your account to continue.").should(
          "be.visible"
        );

        cy.get("#inputEmail").type("admin@yahoo.com");
        cy.get("#inputPassword").type("password");
        cy.get("#login").click();
      });
  });

  it("test tabs using href attr", () => {
    //cy.get("#ACCOUNT").trigger("mouseover").trigger("click").wait(2000);
    cy.visit("https://phptravels.com/demo");
    //cy.viewport("macbook-16");
    cy.contains("Login")
      .first()
      .then(($el) => {
        const url = $el.prop("href");
        cy.visit(url);
        cy.contains("Sign in to your account to continue.").should(
          "be.visible"
        );

        cy.get("#inputEmail").type("admin@yahoo.com");
        cy.get("#inputPassword").type("password");
        cy.get("#login").click();
      });
  });
});
