import LoginPage from '../../../pageobjects/loginpage.po'
const page = new LoginPage()
describe('handling viewports 1 by 1', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
  })

  it('test orange HRM using iOS viewports', () => {
    cy.viewport('iphone-xr')
    expect(Cypress.env('password')).to.be.a('string').and.not.to.be.empty
    userLogin()
    dashboardExist()
  })

  it('test orange HRM using Android viewports', () => {
    cy.viewport('samsung-note9')
    userLogin()
    dashboardExist()
  })

  it('test orange HRM using width/height viewports', () => {
    cy.viewport(660, 550)
    userLogin()
    dashboardExist()
  })

  afterEach(() => {
    cy.clearAllCookies()
    cy.reload(true)
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
