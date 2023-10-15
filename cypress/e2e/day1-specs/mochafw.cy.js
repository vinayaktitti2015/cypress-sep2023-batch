describe('test suite', () => {
  before(() => {
    // pre-hooks
    // will execute before all tests
    cy.log('before hooks')
  })

  beforeEach(() => {
    // will execute before each test
    cy.log('beforeEach hooks')
  })
  it('test case 1', () => {
    // test case 1
    cy.log('test case 1')
  })

  it('test case 2', () => {
    // test case 2
    cy.log('test case 2')
  })

  it('test case 3', () => {
    // test case 3
    cy.log('test case 3')
    console.log('')
  })
  it('test case - multiple comments', () => {
    /*
     *
     *
     */
    cy.log('test case 4')
  })

  after(() => {
    cy.log('after hooks')
  })

  afterEach(() => {
    cy.log('afterEach hooks')
  })
})
