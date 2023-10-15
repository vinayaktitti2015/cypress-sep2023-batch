import AdminPage from '../pageobjects/adminpage.po'

Cypress.Commands.add('createNewUser', () => {
  cy.fixture('adminuser.json').then(data => {
    const page = new AdminPage()
    page.clickAdmin()
    page.clickAdd()
    cy.contains('Add User', { timeout: 10000 }).should('be.visible')
    page.selectuserRole(data.userrole)
    page.selectStatus(data.status)
    page.enterEmpName(data.empname + '{enter}')
    page.enterUsername(data.username)
    page.enterPassword(data.password)
    page.enterRetypePassword(data.password)
    page.clickSave()
    cy.contains('System Users').should('be.visible')
  })
})
