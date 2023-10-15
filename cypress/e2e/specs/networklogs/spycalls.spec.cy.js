describe("spy the network calls", () => {
  it("test IG api calls", () => {
    // spy the network call - as a prestate
    cy.intercept(
      "POST",
      "https://www.instagram.com/api/v1/web/accounts/login/ajax/"
    ).as("res");

    // ui automation
    cy.visit("https://www.instagram.com/");
    cy.contains("Allow all cookies").click();
    cy.contains("Log In").click();
    cy.get("input[name='username']").clear().type("934434343"); // xpath
    cy.get("input[name='password']").clear().type("Test@221212");
    cy.get('[type="submit"]')
      .click()
      .then(() => {
        // open network connection and check logs
        cy.wait("@res").should(({ response }) => {
          expect(response.body).to.have.property(
            "message",
            "Sorry, your password was incorrect. Please double-check your password."
          );
          expect(response.body).to.have.property("status", "fail");
          expect(response.statusCode).to.equal(403);

          console.log("response ", response);
        });
      });
  });
});
