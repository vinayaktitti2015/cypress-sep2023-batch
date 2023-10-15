const data = require("../../fixtures/token.json");
describe("create product", () => {
  it("create  products", () => {
    cy.request({
      method: "PUT",
      url: Cypress.env("apihost") + "/products/1",
      body: JSON.stringify({
        title: 'iPhone Galaxy +1'
        /* other product data */
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('iPhone Galaxy +1');

      console.log(response);

      cy.writeFile("cypress/fixtures/update.json", response);
    });
  });
});
