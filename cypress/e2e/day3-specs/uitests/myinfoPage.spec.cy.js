describe('myinfo page feature', () => {
  beforeEach(() => {
    cy.adminLogin()
  })
  it('test personal details update', () => {
    cy.updateMyInfo()
  })
})

/***
 * Design Pattern 2
 * page objects with getters encapsulation
 * test data
 * custom commands & e2e.js file imports
 * spec file functions
 */