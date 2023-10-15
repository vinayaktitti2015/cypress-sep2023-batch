import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPageClass from "../../pageobjects/cucumber.loginpage.po";
import { LoginPageExport } from "../../pageobjects/cucumberexport.loginpage.po";

//const page = new LoginPageClass()
Given(/^I open the url$/, () => {
  cy.visit("/web/index.php/auth/login");
});

When(/^I enter username$/, () => {
  // page.enterUsername()
  LoginPageExport.enterUsername();
});

When(/^I enter password$/, () => {
  //page.enterPassword()
  LoginPageExport.enterPassword();
});

When(/^I click login$/, () => {
  // page.clickLogin()
  LoginPageExport.clickLogin();
});

Then(/^I should see dashboard$/, () => {
  //page.verifyDashboard()
  LoginPageExport.verifyDashboard();
});

Then("I should see textlabel {string}", (string) => {
  cy.contains(string).should("be.visible");
});

When(`I type username as {string}`, (string) => {
  LoginPageExport.typeUsername(string);
});

Given(`I type password as {string}`, (string) => {
  LoginPageExport.typePassword(string);
});

Then(`I should see {string}`, (string) => {
  LoginPageExport.verifyDashboardText(string);
});

When(/^I enter username and password$/, (table) => {
  table.hashes().forEach((ele) => {
    LoginPageExport.typeUsername(ele.username);
    LoginPageExport.typePassword(ele.password);
    LoginPageExport.clickLogin();
  });
});

Then("I capture screenshot", () => {
  cy.screenshot("login");
});
