describe('handling windows', () => {
  it('test new window', () => {
    cy.visit('https://demoqa.com/browser-windows', {
      onBeforeLoad (win) {
        cy.stub(win, 'open').as('childWindow')
      }
    })

    cy.get('#windowButton')
      .click()
      .then(() => {
        cy.window().its('open').should('be.calledOnce')
        cy.visit('https://demoqa.com/sample')

        cy.get('@childWindow').then(() => {
          cy.contains('This is a sample page').should('be.visible')
        })
      })
  })

  it('test new window with dynamic url', () => {
    cy.visit('https://demoqa.com/browser-windows', {
      onBeforeLoad (win) {
        cy.stub(win, 'open').as('childWindow')
      }
    })

    cy.get('#windowButton')
      .click()
      .then(() => {
        cy.window().its('open').should('be.calledOnce')

        cy.get('@childWindow')
          .should('be.called', Cypress.sinon.match.string)
          .then(url => {
            cy.visit('https://demoqa.com' + url.args[0][0])

            cy.get('@childWindow').then(() => {
              cy.contains('This is a sample page').should('be.visible')
            })
          })
      })
  })

  it.only('test new window with cypress helpers function', () => {
    cy.visit('https://demoqa.com/browser-windows', {
      onBeforeLoad (win) {
        cy.stub(win, 'open').as('childWindow')
      }
    })

    cy.get('#windowButton')
      .click()
      .then(() => {
        cy.get('@childWindow')
          .should('be.called', Cypress.sinon.match.string)
          .then(url => {
            const winurl = 'https://demoqa.com' + url.args[0][0]
            cy.tabVisit(winurl, 'win')
            cy.contains('This is a sample page').should('be.visible')
            cy.closeAllTabs()
          })
      })
  })
})
