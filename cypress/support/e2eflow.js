const data = require("../fixtures/token.json");

Cypress.Commands.add("getToken", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("apihost") + "/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      // expiresInMins: 60, // optional
    }),
  })
    .then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.email).to.equal("kminchelle@qq.com");

      console.log(response);
      const token = response.body.token;
      console.log("token >> " + token);

      const name = "APITest";
      console.log("name >> " + name);

      return token;
    })
    .then((token) => {
      console.log("token >> " + token);

      cy.writeFile("cypress/fixtures/token.json", { token: token });
    });
});

Cypress.Commands.add("createProduct", (req, res) => {
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

Cypress.Commands.add("getProduct", (req, res) => {
  cy.request({
    method: "GET",
    url: Cypress.env("apihost") + "/products/1",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.title).to.eq("iPhone 9");

    console.log(response);

    cy.writeFile("cypress/fixtures/response.json", response);
  });
});

Cypress.Commands.add("updateProduct", (req, res) => {
  cy.request({
    method: "PUT",
    url: Cypress.env("apihost") + "/products/1",
    body: JSON.stringify({
      title: "iPhone Galaxy +1",
      /* other product data */
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.title).to.eq("iPhone Galaxy +1");

    console.log(response);

    cy.writeFile("cypress/fixtures/update.json", response);
  });
});

Cypress.Commands.add("deleteProduct", (req, res) => {
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
