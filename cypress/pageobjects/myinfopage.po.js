class MyInfoPage {
  getMyInfoTab () {
    return cy.get('.oxd-main-menu-item--name').eq(5)
  }
  
  getPersonalDetailsTab () {
    return cy.xpath("//a[normalize-space()='Personal Details']")
  }

  getFirstName () {
    return cy.xpath("//input[@placeholder='First Name']")
  }

  getMiddleName () {
    return cy.xpath("//input[@placeholder='Middle Name']")
  }

  getEmployeeID () {
    return cy.xpath("//*[contains(text(),'Employee Id')]//following::input[1]")
  }

  getNationality () {
    return cy.get('.oxd-select-text-input').eq(0)
  }

  getGender () {
    return cy.xpath("//label[normalize-space()='Male']")
  }

  getSmoker () {
    return cy.xpath("//label[normalize-space()='Yes']")
  }

  getSaveButton () {
    return cy.get('[type="submit"').eq(0)
  }
}

export default MyInfoPage
