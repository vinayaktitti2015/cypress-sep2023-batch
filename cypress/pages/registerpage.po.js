import { getMonth, getTodayDate, getThisYear } from "../util/helper";

class RegisterPage {
  selectGender() {
    const field = cy.get("#gender-male");
    field.check();
    return this;
  }

  enterFirstname(args) {
    const field = cy.get("#FirstName");
    field.clear().type(args);
    return this;
  }

  enterLastName(args) {
    const field = cy.get("#LastName");
    field.type(args);
    return this;
  }

  selectDay() {
    const field = cy.get('[name="DateOfBirthDay"]');
    field.select(getTodayDate());
  }

  // getter function
  getDaySelector() {
    return '[name="DateOfBirthDay"]';
  }

  getDaySelectorOptions() {
    return '[name="DateOfBirthDay"] option';
  }

  getMonthSelector() {
    return '[name="DateOfBirthMonth"]';
  }

  getMonthSelectorOptions() {
    return '[name="DateOfBirthMonth"] option';
  }

  getYearSelector() {
    return '[name="DateOfBirthYear"]';
  }

  getYearSelectorOptions() {
    return '[name="DateOfBirthYear"] option';
  }

  selectMonth() {
    const field = cy.get('[name="DateOfBirthMonth"]');
    field.select("October");
  }

  selectYear() {
    const field = cy.get('[name="DateOfBirthYear"]');
    field.select(getThisYear());
  }

  enterEmail(args) {
    const field = cy.get("#Email");
    field.type(args);
    return this;
  }

  enterCompany(args) {
    const field = cy.get("#Company");
    field.type(args);
    return this;
  }

  enterPassword(args) {
    const field = cy.get("#Password");
    field.type(args);
    return this;
  }
  reEnterPassword(args) {
    const field = cy.get("#ConfirmPassword");
    field.type(args);
    return this;
  }

  clickRegisterButton() {
    const field = cy.get("#register-button");
    field.click({ force: true });
    return this;
  }

  clickClose() {
    const field = cy.get("#closeLargeModal");
    field.click();
    return this;
  }

  userSignup(firstname, lastname, email, company, password) {
    this.selectGender();
    this.enterFirstname(firstname);
    this.enterLastName(lastname);
    cy.selectRandomDropdownValue(
      this.getDaySelector(),
      this.getDaySelectorOptions()
    );
    cy.log(
      cy.selectRandomDropdownValue(
        this.getDaySelector(),
        this.getDaySelectorOptions()
      )
    );
    cy.selectRandomDropdownValue(
      this.getMonthSelector(),
      this.getMonthSelectorOptions()
    );
    cy.log(
      cy.selectRandomDropdownValue(
        this.getMonthSelector(),
        this.getMonthSelectorOptions()
      )
    );
    cy.selectRandomDropdownValue(
      this.getYearSelector(),
      this.getYearSelectorOptions()
    );
    cy.log(
      cy.selectRandomDropdownValue(
        this.getYearSelector(),
        this.getYearSelectorOptions()
      )
    );
    this.enterEmail(email);
    this.enterCompany(company);
    this.enterPassword(password);
    this.reEnterPassword(password);
    this.clickRegisterButton();
  }
}

export default RegisterPage;
