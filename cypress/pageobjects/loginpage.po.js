class LoginPage {
  enterUsername (args) {
    const field = cy.get('[name="username"]')
    field.clear().type(args)
    return this
  }

  getUsername () {
    return '[name="username"]'
  }

  enterPassword (args) {
    const field = cy.get('[name="password"]').eq(0)
    field.clear().type(args)
    return this
  }

  getPassword () {
    return '[name="password"]'
  }

  clickLogin () {
    const field = cy.get('[type="submit"]')
    field.click()
    return this
  }

  getLogin () {
    return '[type="submit"]'
  }

  getDashboard() {
    return '.oxd-topbar-header-breadcrumb > .oxd-text'
  }
}

export default LoginPage
