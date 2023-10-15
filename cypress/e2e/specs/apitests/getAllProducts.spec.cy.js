const data = require("../../fixtures/token.json");
describe("get method", () => {
  it("get all products", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("apihost") + "/products",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.products[0].title).to.eq("iPhone 9");

      console.log(response)

      cy.writeFile('cypress/fixtures/response.json', response)
    });
  });
});
