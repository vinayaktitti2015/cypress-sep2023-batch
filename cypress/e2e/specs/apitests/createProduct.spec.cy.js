const data = require("../../fixtures/token.json");
describe("create product", () => {
  it("create  products", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("apihost") + "/products/add",
      body: JSON.stringify({
        title: "BMW Pencil",
        /* other product data */
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.token,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq("BMW Pencil");

      console.log(response);

      cy.writeFile("cypress/fixtures/product.json", response);
    });
  });
});
