describe('spy the network calls', () => {
  it('test IG api calls', () => {
    // network call
    cy.intercept(
      'POST',
      'https://www.instagram.com/api/v1/web/accounts/login/ajax/'
    ).as('res')

    // ui auto
    cy.visit('https://www.instagram.com/')
    cy.get(':nth-child(1) > .x1i10hfl > ._acan > ._aacl').click()
    cy.xpath("//input[@name='username']").clear().type('934434343')
    cy.xpath("//input[@name='password']").clear().type('Test@221212')
    cy.xpath("//button[@type='submit']")
      .click()
      .then(() => {
        cy.wait('@res').should(({ response }) => {
          expect(response.body).to.have.property(
            'message',
            'Sorry, your password was incorrect. Please double-check your password.'
          )
          expect(response.body).to.have.property('status', 'fail')
          expect(response.statusCode).to.equal(403)

          console.log('response ', response)
        })
      })
  })
})
