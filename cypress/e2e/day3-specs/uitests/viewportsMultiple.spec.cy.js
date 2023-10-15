import LoginPage from '../../../pageobjects/loginpage.po'
const page = new LoginPage()
const sizes = ['iphone-xr', 'samsung-note9', 'macbook-16', 'ipad-mini']
describe('handling viewports 1 by 1', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
  })

  sizes.forEach(size => {
    it(`test orange HRM using device: ${size} viewports`, () => {
      cy.viewport(size)
      expect(Cypress.env('password')).to.be.a('string').and.not.to.be.empty
      userLogin()
      dashboardExist()
    })

    afterEach(() => {
      cy.clearAllCookies()
      cy.reload(true)
    })
  })
})

function dashboardExist () {
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    .contains('Dashboard')
    .should('be.visible')
}

function userLogin () {
  expect(Cypress.env('password')).to.be.a('string').and.not.to.be.empty
  page.enterUsername(Cypress.env('username'))
  page.enterPassword(Cypress.env('password'))
  page.clickLogin()
}
