describe('handling credentials', () => {
  beforeEach(() => {
    
  })
  it('Admin module', () => {
    cy.get('.oxd-main-menu-item--name').contains('Admin').click()
    cy.contains('System Users').should('be.visible')
  })

  it('Leave module', () => {
    cy.get('.oxd-main-menu-item--name').contains('Leave').click()
    cy.contains('Leave List').should('be.visible')
  })

  it('My Info module', () => {
    cy.get('.oxd-main-menu-item--name').contains('My Info').click()
    cy.contains('Personal Details').should('be.visible')
  })
})
