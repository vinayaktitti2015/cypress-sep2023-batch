import MyInfoPage from '../pageobjects/myinfopage.po'
const data = require('../fixtures/myinfo.json')

Cypress.Commands.add('updateMyInfo', () => {
  const page = new MyInfoPage()
  page.getMyInfoTab().click({ force: true })
  page.getPersonalDetailsTab().click({ force: true })
  page
    .getFirstName()
    .clear()
    .type(data.fullname)
    .should('have.value', data.fullname)
  page
    .getMiddleName()
    .clear()
    .type(data.middlename)
    .should('have.value', data.middlename)
  page.getEmployeeID().clear().type(data.empid).should('have.value', data.empid)
  page
    .getNationality()
    .click({ force: true })
    .then(() => {
      cy.contains(data.nationality).click({ force: true })
    })
  page.getGender().click({ force: true })
  page.getSmoker().click({ force: true })
  page.getSaveButton().click({ force: true })
  cy.contains('Success').should('be.visible')
})
