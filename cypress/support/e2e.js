// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './admin'
import './myinfo'

// 3rd party plugin imports
import 'cypress-iframe'
import 'cypress-file-upload'
import 'cypress-xpath'
import 'cypress-mochawesome-reporter/register';


require('cypress-downloadfile/lib/downloadFileCommand')
require('cy-verify-downloads').addCustomCommand()
require('@4tw/cypress-drag-drop')

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', err => {
  return false
})

const sizes = ['iphone-xr', 'samsung-note9', 'macbook-16', 'ipad-mini']

beforeEach(() => {
  // const role = Cypress.env('role')

  // if (role == 'admin') {
  //   cy.adminLogin('adminLogin')
  // } else if (role == 'user') {
  //   cy.userLogin('adminLogin')
  // }

  // sizes.forEach(size => {
  //   cy.viewport(size)
  // })
})

// afterEach(() => {
//   cy.clearAllCookies()
//   cy.reload(true)
// })

// beforeEach(() => {
//   cy.userLogin('adminLogin')
// })
