import CommonPage from "../../pages/commonpage.po";
import RegisterPage from "../../pages/registerpage.po";
import LoginPage from "../../pages/loginpage.po";
const data = require("../../fixtures/registerdata.json");
import { faker } from "@faker-js/faker";

let email; // global variable for email
describe("register modules/feature", () => {
  beforeEach(() => {
    cy.openBrowser();
  });

  it("user should register successfully and login", () => {
    const commonPage = new CommonPage();
    const registerPage = new RegisterPage();
    const loginPage = new LoginPage();

    // common page events
    commonPage.clickRegisterLink();

    email = faker.internet.email();
    // user signup
    registerPage.userSignup(
      data.user[0].firstName,
      data.user[0].lastName,
      email,
      data.user[0].company,
      data.user[0].password
    );
    cy.verifyMessage(data.user[0].confirmMessage);

    // user login
    commonPage.clickLoginLink();
    loginPage.userLogin(email, data.user[0].password);
  });

  it.skip("user should register successfully", () => {
    const commonPage = new CommonPage();
    const registerPage = new RegisterPage();
    commonPage.clickRegisterLink();

    for (let i = 0; i < data.user.length; i++) {
      registerPage.userSignup(
        data.user[i].firstName,
        data.user[i].lastName,
        data.user[i].email,
        data.user[i].company,
        data.user[i].password
      );
      try {
        cy.verifyMessage(data.user[i].confirmMessage);
      } catch (error) {
        console.warn(error);
      } finally {
        commonPage.clickRegisterLink();
      }
    }
  });
});
