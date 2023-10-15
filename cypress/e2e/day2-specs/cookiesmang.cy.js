describe('cookies handling', () => {
  it('fetch cookies', () => {
    cy.adminLogin()

    cy.getAllCookies().then(cookies => {
      cy.log('cookies ', cookies)

      expect(cookies[0].name).to.eq('orangehrm')
      expect(cookies[0].sameSite).to.eq('strict')
      expect(cookies[0].secure).to.eq(true)
    })
  })

  it('fetch 1 by 1 cookies', () => {
    cy.adminLogin()

    // cy.getCookie('name').then(cookie => {
    //   cy.log('cookies ', cookie)
    // })
    cy.getCookie('name').should('have.a.property', 'value', 'orangehrm')
    cy.getCookie('sameSite').should('have.a.property', 'value', 'strict')
    cy.getCookie('secure').should('have.a.property', 'value', true)
  })

  it('delete cookies', () => {
    cy.adminLogin()

    cy.getAllCookies().then(cookies => {
      cy.log('cookies ', cookies)

      expect(cookies[0].name).to.eq('orangehrm')
      expect(cookies[0].sameSite).to.eq('strict')
      expect(cookies[0].secure).to.eq(true)
    })

    cy.clearAllCookies()
    cy.reload(true)
    cy.contains('Login').should('be.visible')
  })

  it('delete specific cookie', () => {
    cy.adminLogin()

    cy.getAllCookies().then(cookies => {
      cy.log('cookies ', cookies)

      expect(cookies[0].name).to.eq('orangehrm')
      expect(cookies[0].sameSite).to.eq('strict')
      expect(cookies[0].secure).to.eq(true)

      cy.clearCookie(cookies[0].value)
    })
    cy.reload(true)
    cy.contains('Login').should('be.visible')
  })

  it.only('set specific cookie', () => {
    cy.adminLogin()

    cy.getAllCookies().then(cookies => {
      cy.log('cookies ', cookies)

      expect(cookies[0].name).to.eq('orangehrm')
      expect(cookies[0].sameSite).to.eq('strict')
      expect(cookies[0].secure).to.eq(true)

      cy.setCookie(cookies[0].name, 'demowebsite').then(() => {
        cy.wait(2000)
        cy.log('cookies ', cookies[0].name)
      })
    })
  })
})
