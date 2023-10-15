const data = require("../../fixtures/token.json");
describe("DELETE product", () => {
  it("DELETE  products", () => {
    cy.request({
      method: "DELETE",
      url: Cypress.env("apihost") + "/products/1",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.isDeleted).to.eq(true);

      console.log(response);

      cy.writeFile("cypress/fixtures/delete.json", response);
    });
  });
});
