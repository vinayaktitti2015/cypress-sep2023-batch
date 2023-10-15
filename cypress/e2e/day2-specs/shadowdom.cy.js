describe(
  'handling shadowDOM',
  {
    retries: {
      runMode: 0,
      openMode: 2
    }
  },
  () => {
    it('test shadow DOM traversing', () => {
      cy.visit('http://the-internet.herokuapp.com/shadowdom')

      cy.get('my-paragraph')
        .shadow()
        .eq(0)
        .find('[name="my-text"]')
        .then($el => {
          expect($el.text()).to.equal('My default text')
        })

      cy.contains("Let's have some different text!").should('be.visible')
    })

    it('test nested shadow DOM traversing', () => {
      cy.visit('https://books-pwakit.appspot.com/')

      cy.reload(true)
      cy.get('book-app')
        .shadow()
        .find('app-header')
        .find('app-toolbar')
        .find('book-input-decorator')
        .find('input')
        .clear()
        .type('cypress tests{enter}', { force: true })

      cy.url().should('include', 'https://books-pwakit.appspot.com/explore?')
    })
  }
)
