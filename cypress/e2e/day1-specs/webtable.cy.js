describe('handling webtable', () => {
  it('test HTML table', () => {
    cy.visit('/')

    cy.get('[name="BookTable"] tbody tr td:nth-child(1)').each(($el, index) => {
      const label = $el.text()

      if (label == 'Learn JS') {
        // check author data mapping
        cy.get('[name="BookTable"] tbody tr td:nth-child(2)')
          .eq(index)
          .then($el => {
            const author = $el.text()
            expect(author).to.equal('Animesh')
          })

        // check subject data mapping
        cy.get('[name="BookTable"] tbody tr td:nth-child(3)')
          .eq(index)
          .then($el => {
            const subject = $el.text()
            expect(subject).to.equal('Javascript')
          })

           // check price data mapping
        cy.get('[name="BookTable"] tbody tr td:nth-child(4)')
        .eq(index)
        .then($el => {
          const price = $el.text()
          const convert = parseInt(price)
          expect(convert).to.equal(300)
        })
      }
    })
  })
})
