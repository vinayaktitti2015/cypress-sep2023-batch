describe("auth method", () => {
  it("login and get token", () => {
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

        cy.writeFile("cypress/fixtures/token.json", {token: token});
      });
  });
});
