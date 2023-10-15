import { getTodayDate, getFutureDay } from '../../util/helper'
var moment = require('moment')
//var moment = require('moment-timezone')
describe('datepicker handling', () => {
  it('test direct input', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#datepicker').clear().type('12/20/2022{enter}')
  })

  it('test datepicker using system date', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#datepicker')
      .click()
      .then(() => {
        cy.get('.ui-state-default').contains(getTodayDate()).click()
      })
  })

  it('test datepicker using system future date', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#datepicker')
      .click()
      .then(() => {
        cy.pause()
        cy.get('.ui-state-default')
          .contains(getFutureDay(5))
          .click()
          .then(() => {
            cy.get('#datepicker').should('have.value', '12/25/2022')
          })
      })
  })

  it('test datepicker for future month', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#datepicker')
      .click()
      .then(() => {
        cy.get('[title="Next"]')
          .click()
          .then(() => {
            cy.get('.ui-state-default').contains(10).click()
          })
      })
  })

  it.only('moment module formats', () => {
    const date = moment().format('DD/MM/YYYY, h:mm:ss')
    cy.log('date format: ', date)

    const days = moment().add(7, 'days')
    cy.log('add ', days)

    cy.visit('https://vcalendar.io/datepicker.html')
    cy.get("input[class='px-2 py-1 border rounded focus:outline-none focus:border-blue-300']")
      .clear()
      .type(date)
      .type('{enter}')

  })

  it('timezone usecases', () => {
    var june = moment('2022-12-20T12:00:00Z')
    june.tz('America/Los_Angeles').format('ha z') // 5am PDT

    cy.log('format ', june)

    const usdate = moment()
      .tz('America/New_York')
      .format('MMMM Do YYYY, h:mm:ss a')
    cy.log('date: ', usdate)

    const ukdate = moment()
      .tz('Europe/Berlin')
      .format('MMMM Do YYYY, h:mm:ss a')
    cy.log('date: ', ukdate)

    const asia = moment()
      .tz('Asia/Singapore')
      .format('MMMM Do YYYY, h:mm:ss a')
    cy.log('date: ', asia)
  })
})
