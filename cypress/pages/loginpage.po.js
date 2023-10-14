// JS import
//const data = require("../fixtures/registerdata.json");

class LoginPage {
  enterEmail(args) {
    const field = cy.get("#Email");
    field.clear().type(args);
    return this;
  }

  enterPassword(args) {
    const field = cy.get("#Password");
    field.clear().type(args);
    return this;
  }

  clickLogin() {
    const field = cy.get('[type="submit"]');
    field.last().click();
    return this;
  }

  verifyMyAccountIsVisible(args) {
    const field = cy.get(".ico-account");
    field.should("have.text", args);
  }

  // fixture usage
  userLogin(username, password) {
    cy.fixture("registerdata").then((data) => {
      this.enterEmail(username);
      this.enterPassword(password);
      this.clickLogin();
      this.verifyMyAccountIsVisible(data.user[0].myaccount);
    });
  }
}

export default LoginPage;
