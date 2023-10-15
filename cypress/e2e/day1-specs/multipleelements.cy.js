const data = require('../../fixtures/list.json')
describe('handling multiple elements', () => {
  it('test internetheroku app list elements', () => {
    cy.visit('http://the-internet.herokuapp.com/')

    cy.get('ul li a').each(($el, index, $list) => {
      const label = $el.text()

      cy.log('label: ', label)

      if (label == 'Hovers') {
        cy.wrap($el).click()
        cy.url().should('eq', 'http://the-internet.herokuapp.com/hovers')
      }
    })
  })

  it('test internetheroku app list elements order labels', () => {
    cy.visit('http://the-internet.herokuapp.com/')

    cy.get('ul li a').each(($el, index, $list) => {
      const label = $el.text()

      cy.log('label: ', label)

      if (label == 'Checkboxes') {
        cy.wrap($el).click()
        cy.url().should('eq', 'http://the-internet.herokuapp.com/checkboxes')
        expect(label).to.equal(data.list[index])
        //break;
      } else if (index == 7) {
        //break;
        expect(label).to.match(/[A-Za-z0-9/&]/)
      }
    })
  })

  it.only('test internetheroku app list elements using regex', () => {
    cy.visit('http://the-internet.herokuapp.com/')

    cy.get('ul li a').each(($el, index, $list) => {
      const label = $el.text()

      cy.log('label: ', label)

      expect(label).to.match(/[A-Za-z0-9/&]/)
    })
  })
})
