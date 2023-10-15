describe('handling write and read files', () => {
  it('test write data to txt file', () => {
    cy.writeFile('cypress/fixtures/data.txt', 'Hello Cypress')
  })

  it('test write data to json file', () => {
    cy.writeFile('cypress/fixtures/data.json', {
      name: 'danniel',
      email: 'dan@gmail.com',
      phone: 91344343,
      city: 'Hyd'
    })
  })

  it('fetch credentials from HRM website', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    )

    //var username;
    let username
    let password
    //const username;

    cy.get('.orangehrm-demo-credentials p:nth-child(1)').then($el => {
      username = $el.text()

      cy.get('.orangehrm-demo-credentials p:nth-child(2)')
        .then($el => {
          password = $el.text()
        })
        .then(() => {
          cy.writeFile('cypress/fixtures/credentials.json', {
            username: username,
            password: password
          })
        })
    })
  })
})
