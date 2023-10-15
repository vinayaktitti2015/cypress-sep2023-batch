describe('tets wikipedia website', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('test search filter', () => {
    cy.title().should('eq', 'Wikipedia')
    cy.get('#searchInput').clear().type('cypress{enter}')
    cy.wait(2000)
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Cypress')
    cy.url().should('include', '/wiki/Cypress')

    cy.get('.mw-page-title-main').should('have.text', 'Cypress')
  })

  it('test search filter using chai assertions', () => {
    cy.title().should('eq', 'Wikipedia')
    cy.get('#searchInput').clear().type('cypress{enter}')
    cy.wait(2000)
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Cypress')
    cy.url().should('include', '/wiki/Cypress')

    cy.get('.mw-page-title-main').then($el => {
      const actual = $el.text()
      const format = actual.toUpperCase()
      expect(format).to.equal('CYPRESS')
    })
  })

  it('test search filter using jquery invoke function', () => {
    cy.title().should('eq', 'Wikipedia')
    cy.get('#searchInput').clear().type('cypress{enter}')
    cy.wait(2000)
    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Cypress')
    cy.url().should('include', '/wiki/Cypress')

    // invoke('text')
    // invoke('show')
    // invoke('val')

    cy.get('.mw-page-title-main')
      .invoke('text')
      .then(text => {
        const actual = text;
        const format = actual.toLocaleLowerCase()
        expect(format).to.equal('cypress')
      })
  })
})
