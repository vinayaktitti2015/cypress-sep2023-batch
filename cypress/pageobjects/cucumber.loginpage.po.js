const username_input = '[name="username"]'
const password_input = '[name="password"]'
const login_button = '[type="submit"]'
const dashboard_label = '.oxd-topbar-header-breadcrumb > .oxd-text'

class LoginPageClass {
  enterUsername () {
    const field = cy.get(username_input)
    field.clear().type(Cypress.env('username'))
    return this
  }

  enterPassword () {
    const field = cy.get(password_input).eq(0)
    field.clear().type(Cypress.env('password'))
    return this
  }

  clickLogin () {
    const field = cy.get(login_button)
    field.click()
    return this
  }

  verifyDashboard () {
    cy.get(dashboard_label).should('have.text', 'Dashboard')
  }
}

export default LoginPageClass
