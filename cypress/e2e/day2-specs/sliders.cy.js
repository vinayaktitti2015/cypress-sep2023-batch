describe('handling sliders', () => {
  it('test ticks slider', () => {
    cy.visit('https://angular-slider.github.io/ngx-slider/home', {
      failOnStatusCode: false
    })

    cy.get(
      'body > app-root:nth-child(1) > main:nth-child(2) > app-home:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ngx-slider:nth-child(1) > span:nth-child(5)'
    )
      .scrollIntoView()
      .type('{rightArrow}{rightArrow}')
      .then(() => {
        cy.get(
          'body > app-root:nth-child(1) > main:nth-child(2) > app-home:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ngx-slider:nth-child(1) > span:nth-child(5)'
        ).should('have.attr', 'aria-valuenow', 7)
      })
  })

  it('test single slider data attr default values', () => {
    cy.visit('https://angular-slider.github.io/ngx-slider/home', {
      failOnStatusCode: false
    })

    cy.get(
      'body > app-root:nth-child(1) > main:nth-child(2) > app-home:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ngx-slider:nth-child(1) > span:nth-child(5)'
    )
      .should('have.attr', 'aria-valuenow', 50)
      .and('have.attr', 'aria-valuemin', 0)
      .and('have.attr', 'aria-valuemax', 100)
      .and('have.attr', 'aria-valuetext', 50)

    cy.get(
      'body > app-root:nth-child(1) > main:nth-child(2) > app-home:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ngx-slider:nth-child(1) > span:nth-child(5)'
    )
      .type('{leftArrow}{leftArrow}')
      .should('have.attr', 'aria-valuenow', 48)
  })

  it('test single slider data attr using invoke func', () => {
    cy.visit('https://angular-slider.github.io/ngx-slider/home', {
      failOnStatusCode: false
    })

    cy.get(
      'body > app-root:nth-child(1) > main:nth-child(2) > app-home:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ngx-slider:nth-child(1) > span:nth-child(5)'
    )
      .invoke('aria-valuenow', 24)
      .trigger('{enter}')
      .wait(1000)
      .should('have.attr', 'aria-valuenow', 24)
  })

  it.only('test vertical slider', () => {
    cy.visit('https://angular-slider.github.io/ngx-slider/home', {
      failOnStatusCode: false
    })

    cy.get(
      ".ngx-slider-span.ngx-slider-pointer.ngx-slider-pointer-min[tabindex='0'][aria-orientation='vertical']"
    )
      .scrollIntoView()
      .type('{upArrow}{upArrow}')
      .then(() => {
        cy.get(
            ".ngx-slider-span.ngx-slider-pointer.ngx-slider-pointer-min[tabindex='0'][aria-orientation='vertical']"
        ).should('have.attr', 'aria-valuenow', 7)
      })
  })
})
