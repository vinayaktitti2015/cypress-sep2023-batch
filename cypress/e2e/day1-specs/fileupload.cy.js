describe('handling file upload', () => {
  it('test file upload jpeg', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest/')

    cy.get("input[name='file-553']").attachFile('image.jpeg')
    cy.get("input[name='file-553']").should(
      'have.value',
      'C: + ""+fakepathimage.jpeg'
    )
  })

  it('test file upload for pdf format', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest/')

    cy.get("input[name='file-553']").attachFile('sample.pdf')
    cy.get('.wpcf7-form-control').should('have.value', 'sample.pdf')
  })

  // direct approach
  it.only('test file upload using cypress comamnds', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest/')

    cy.get("input[name='file-553']").selectFile('cypress/fixtures/image.jpeg')
    cy.get("input[name='file-553']", { timeout: 10000 }).should(
      'have.value',
      'C: + "\"+fakepathimage.jpeg'
    )
  })

  it.only('test multiple file uploads using cypress comamnds', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest/')

    cy.get("input[name='file-553']").selectFile([
      'cypress/fixtures/image.jpeg',
      'cypress/fixtures/sample.pdf'
    ])
    cy.get("input[name='file-553']", { timeout: 10000 }).should(
      'have.value',
      '2 Files'
    )
  })
})
