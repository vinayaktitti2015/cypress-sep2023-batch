describe('mock test data the network calls', () => {
  it('test mock data', () => {
    // network call
    cy.intercept('GET', 'https://www.abstractapi.com/api/ip-geolocation-api', {
      fixture: 'mock.html'
    }).as('response')

    // ui auto
    cy.visit('https://www.abstractapi.com/api/ip-geolocation-api', {
      failOnStatusCode: false
    })
    cy.wait(2000)
    cy.contains('Cypress Intercept mock data').should('be.visible')
  })
})
