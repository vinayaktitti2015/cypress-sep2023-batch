describe('conditional testing', () => {
  it('test elements exist or not', () => {
    cy.origin('https://www.wikipedia.org/', () => {
      cy.visit('/')

      cy.get('body').then(body => {
        if (body.find('[data-jsl10n="commons.invalid"]').length == 1) {
          cy.get('[data-jsl10n="commons.name"]')
            .click()
            .then(() => {
              cy.visit('https://commons.wikimedia.org/wiki/Main_Page')
              cy.url().should(
                'eq',
                'https://commons.wikimedia.org/wiki/Main_Page'
              )

              cy.contains('Wikimedia Commons').should('be.visible')
            })
        } else if (body.find('[data-jsl10n="wikibooks.name"]').length > 0) {
          cy.get('[data-jsl10n="wikibooks.name"]')
            .click()
            .then(() => {
              cy.url().should('eq', 'https://www.wikibooks.org/')
            })
        }
      })
    })
  })
})
