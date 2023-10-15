const data = require('../../fixtures/testdata.json')
describe('test fixtures file data', () => {
  it('test globalsqa form submission', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest/')

    cy.get('#g2599-name').clear().type(data.name)
    cy.get('#g2599-email').clear().type(data.email)
    cy.get('#g2599-website').clear().type(data.website)
    cy.get('#g2599-experienceinyears').select(data.exp)
    cy.get('[value="Functional Testing"]').check()
    cy.get('[value="Graduate"]').check()
    cy.get('#contact-form-comment-g2599-comment').clear().type(data.comment)
    cy.get("button[type='submit']").click()

    cy.get("div[class='content_bgr'] h3:nth-child(1)").should(
      'have.text',
      'Message Sent (go back)'
    )
  })
})
