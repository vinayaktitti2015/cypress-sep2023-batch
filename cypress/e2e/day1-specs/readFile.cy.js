describe('handling read files', () => {
  it('test readt data from txt file', () => {
    cy.readFile('cypress/fixtures/data.txt').should('eq', 'Hello Cypress')
  })

  it('test read data to json file', () => {
    cy.readFile('cypress/fixtures/data.json')
      .its('name')
      .should('eq', 'danniel')
    cy.readFile('cypress/fixtures/data.json')
      .its('email')
      .should('eq', 'dan@gmail.com')
    cy.readFile('cypress/fixtures/data.json')
      .its('phone')
      .should('eq', 91344343)
  })

  it.only('read data and input on website', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    )

    cy.readFile('cypress/fixtures/credentials.json').then(data => {
      cy.get(
        ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
      ).type(data.username)
      cy.get(
        ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
      ).type(data.password)
      cy.get('.oxd-button').click()
      cy.get(
        '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'
      ).should('have.text', 'Dashboard')
    })
  })

  it.only('encode the image files', () => {
    cy.readFile('cypress/fixtures/image.jpeg', 'base64').then(logo => {
      cy.log(logo)
    })
  })
})
