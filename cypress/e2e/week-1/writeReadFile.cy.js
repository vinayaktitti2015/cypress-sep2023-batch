describe("write and read file", () => {
  it("test input contents to txt file", () => {
    cy.writeFile("cypress/fixtures/test.txt", "hello cypress");

    cy.readFile("cypress/fixtures/test.txt").then((actual) => {
      expect(actual).to.eq("hello cypress");
    });
  });

  it("test input contents to json file", () => {
    cy.writeFile("cypress/fixtures/test.json", {
      name: "james",
      email: "james@example.com",
      phone: 912323232,
    });

    cy.readFile("cypress/fixtures/test.json").then((actual) => {
      const actualoutput = JSON.stringify(actual);
      const expectedoutput = JSON.stringify({
        name: "james",
        email: "james@example.com",
        phone: 912323232,
      });
      expect(actualoutput).to.equal(expectedoutput);
    });
  });

  it.only("fetch password from website and store in a json file", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.get("em:nth-child(2)").then(($el) => {
      const password = $el.text();

      cy.writeFile("cypress/fixtures/password.json", { password: password });
      cy.readFile("cypress/fixtures/password.json").then((data) => {
        expect(data.password).to.eq(Cypress.env("password"));
      });
    });
  });
});
