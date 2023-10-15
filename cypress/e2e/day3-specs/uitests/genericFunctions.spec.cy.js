import * as helper from '../../../util/helper'
import LoginPage from '../../../pageobjects/loginpage.po'
describe('generic functions usage', () => {
  it('test login with GF', () => {
    cy.visit('/web/index.php/auth/login')

    const page = new LoginPage()
    helper.eleType(page.getUsername(), Cypress.env('username'))
    helper.eleType(page.getPassword(), Cypress.env('password'))
    helper.eleClick(page.getLogin())
    helper.eleExistText(page.getDashboard(), 'Dashboard')
    helper.eleContains('Dashboard')
  })
})
