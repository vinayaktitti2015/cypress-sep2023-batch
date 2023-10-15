describe('handling multiple assertions', () => {
  it('test assertions using then callback', () => {
    cy.visit('https://example.cypress.io/todo')

    cy.get('[data-test="new-todo"]')
      .type('new label{enter}')
      .then(() => {
        cy.get('.toggle + label').then(list => {
          expect(list[0]).to.contain.text('Pay electric bill')
          expect(list[1]).to.contain.text('Walk the dog')

          expect(list[2], { timeout: 10000 }).to.contain.text('new label')
        })
      })
  })

  it.only('test assertions using should promise', () => {
    cy.visit('https://example.cypress.io/todo')

    cy.get('[data-test="new-todo"]')
      .type('new label{enter}')
      .should(() => {
        cy.get('.toggle + label').then(list => {
          expect(list[0]).to.contain.text('Pay electric bill')
          expect(list[1]).to.contain.text('Walk the dog')

          expect(list[2], { timeout: 10000 }).to.contain.text('new label')
        })
      })
  })
})
