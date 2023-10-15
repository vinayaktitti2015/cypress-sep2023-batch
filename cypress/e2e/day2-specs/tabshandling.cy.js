describe('tabs handling', () => {
  it('test tabs using target attr removal', () => {
    cy.visit('https://phptravels.com/change-log/')
    cy.get('[data-name="login"]')
      .last()
      .invoke('removeAttr', 'target')
      .click()
      .then(() => {
        cy.contains('Sign in to your account to continue.').should('be.visible')
        cy.get('#inputEmail').type('admin@yahoo.com')
        cy.get('#inputPassword').type('admin123')
        cy.get('#login').click()
      })
  })

  it('test tabs using href attr', () => {
    cy.visit('https://phptravels.com/change-log/')
    cy.get('[data-name="login"]')
      .last()
      .then($el => {
        const url = $el.prop('href')
        cy.visit(url)
        cy.contains('Sign in to your account to continue.').should('be.visible')
        cy.get('#inputEmail').type('admin@yahoo.com')
        cy.get('#inputPassword').type('admin123')
        cy.get('#login').click()
      })
  })

  // 3rd party plugin
  it.only('test tabs using cypress helpers functions', () => {
    cy.visit('https://phptravels.com/change-log/')
    cy.get('[data-name="login"]')
      .last()
      .click()
      .then(($el) => {
        const url = $el.prop('href')
        cy.tabVisit(url, 'tab')
        cy.contains('Sign in to your account to continue.').should('be.visible')
        cy.get('#inputEmail').type('admin@yahoo.com')
        cy.get('#inputPassword').type('admin123')
        cy.get('#login').click()

        //cy.closeTab(0)
        cy.closeAllTabs()
      })
  })
})
