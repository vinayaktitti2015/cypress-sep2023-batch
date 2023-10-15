import { selectRandomDropdownValue } from '../../util/helper'
describe('handling dropdowns', () => {
  it('test select tag dropdown', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest/')
    cy.get('#g2599-experienceinyears')
      .select('3-5', { force: true })
      .should('have.value', '3-5')
  })

  it('test multi select tag dropdown', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest/')
    cy.get('#g2599-experienceinyears')
      .select(['1-2', '3-5', '6-10'], { force: true })
      .should('have.value', ['1-2', '3-5', '6-10'])
  })

  it('test input tag dropdowns', () => {
    cy.visit('https://demo.mobiscroll.com/select/multiple-select')
    cy.get('#multiple-select-input')
      .click({ force: true })
      .then(() => {
        cy.get('.mbsc-wheel-item-checkmark.mbsc-wheel-item-multi').click({
          multiple: true,
          force: true
        })
      })
  })

  it('test input tag dropdowns & select labels', () => {
    cy.visit('https://demo.mobiscroll.com/select/multiple-select')
    cy.get('#multiple-select-input')
      .click({ force: true })
      .then(() => {
        cy.wait(2000)
        cy.get('.mbsc-wheel-item-checkmark.mbsc-wheel-item-multi')
          .contains('Electronics & Computers')
          .dblclick({ force: true, enterKey: true })
        cy.get('.mbsc-wheel-item-checkmark.mbsc-wheel-item-multi')
          .contains('Clothing & Jewelry')
          .dblclick({ force: true, enterKey: true })
      })
  })

  it('test group wheel options & select labels', () => {
    cy.visit('https://demo.mobiscroll.com/jquery/select/group-options#')
    cy.scrollTo(869, 366)
    cy.xpath(
      "//div[@id='mbsc-control-15']//div//input[@id='single-group-select-wheel-input']"
    )
      .first()
      .click({ force: true })
      .then(() => {
        cy.wait(2000)
        cy.get('.mbsc-scroller-wheel-item.mbsc-ios.mbsc-ltr')
          .contains('US')
          .click({ force: true, enterKey: true })
          .then(() => {
            cy.contains('Boston').click({ force: true })
          })
        cy.get('.mbsc-scroller-wheel-item.mbsc-ios.mbsc-ltr')
          .contains('UK')
          .click({ force: true, enterKey: true })
          .then(() => {
            cy.contains('Bath').click({ force: true })
          })
      })
  })

  it.only('test random select tag dropdown value', () => {
    cy.visit('https://www.globalsqa.com/samplepagetest/')
    try {
      selectRandomDropdownValue(
        '#g2599-experienceinyears',
        '#g2599-experienceinyears option'
      )
    } catch (err) {
      throw err
    }
  })
})
