import { LeavePage } from '../../../pageobjects/leavepage.po'
const data = require('../../../fixtures/leave.json')
describe('leave page feature', () => {
  beforeEach(() => {
    cy.adminLogin()
  })
  it('test search leave app', () => {
    cy.get(LeavePage.tab.menu).eq(2).click({ force: true })
    cy.contains('Leave List').should('be.visible')
    cy.xpath(LeavePage.div.status)
      .click({ force: true })
      .then(() => {
        cy.contains(data.leavestatus).click({ force: true })
      })
    cy.xpath(LeavePage.div.leavetype)
      .click({ force: true })
      .then(() => {
        cy.contains(data.leavetype).click({ force: true })
      })
    cy.xpath(LeavePage.input.employname)
      .clear()
      .type(data.employname + '{enter}', { delay: 200 })
      .then(() => {
        cy.wait(3000)
        cy.contains(data.employfullname).click({ force: true })
      })
    cy.xpath(LeavePage.div.subunit)
      .click({ force: true })
      .then(() => {
        cy.contains(data.leavetype).click({ force: true })
      })

    cy.xpath(LeavePage.button.searchbtn)
      .click({ force: true })
      .then(() => {
        cy.xpath(LeavePage.div.employnamefilter).then($el => {
          const actual = $el.text().trim()
          expect(actual).to.include(data.employname)
        })
      })
  })
})
