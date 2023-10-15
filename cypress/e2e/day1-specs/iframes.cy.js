describe('handling iframes', () => {
  it.only('testing iframes using cypress-iframe', () => {
    cy.visit('/')

    cy.frameLoaded()
    cy.iframe('#frame-one1434677811')
      .find('#RESULT_TextField-1')
      .clear()
      .type('john ')
    cy.iframe('#frame-one1434677811')
      .find('#RESULT_TextField-2')
      .clear()
      .type('doe')
    cy.iframe('#frame-one1434677811')
      .find('#RESULT_TextField-3')
      .clear()
      .type('9192323222')
    cy.iframe('#frame-one1434677811')
      .find('[name="RESULT_RadioButton-7"]')
      .check({ force: true })
    cy.iframe('#frame-one1434677811')
      .find('#RESULT_CheckBox-8_0')
      .check({ force: true })
    cy.iframe().find('#RESULT_RadioButton-9').select('Afternoon')
    cy.iframe().find('[type="submit"]').click()
  })

  // best practice
  it.only('testing iframes using default wrap function', () => {
    cy.visit('/')

    try {
      // scripts
    } catch (err) {
      throw err
    }

    cy.get('iframe').then(iframe => {
      const body = iframe.contents().find('body')
      cy.wrap(body).find('#RESULT_TextField-1').clear().type('john ')
      cy.wrap(body).find('#RESULT_TextField-2').clear().type('doe')
      cy.wrap(body).find('#RESULT_TextField-3').clear().type('9192323222')
      cy.wrap(body).find('[name="RESULT_RadioButton-7"]').check({ force: true })
      cy.wrap(body).find('#RESULT_CheckBox-8_0').check({ force: true })
      cy.wrap(body).find('#RESULT_RadioButton-9').select('Afternoon')
      cy.wrap(body).find('[type="submit"]').click()
    })
  })

  // best practice
  it('testing iframes using default custom comamnd function', () => {
    cy.visit('/')
    cy.switchToIframe().find('#RESULT_TextField-1').clear().type('john ')
    cy.switchToIframe().find('#RESULT_TextField-2').clear().type('doe')
    cy.switchToIframe().find('#RESULT_TextField-3').clear().type('9192323222')
    cy.switchToIframe().find('[name="RESULT_RadioButton-7"]').check()
    cy.switchToIframe().find('#RESULT_CheckBox-8_0 + label').check()
    cy.switchToIframe().find('#RESULT_RadioButton-9').select('Afternoon')
    cy.switchToIframe().find('[type="submit"]').click()
  })
})
