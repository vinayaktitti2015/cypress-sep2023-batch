class AdminPage {
  clickAdmin () {
    const field = cy.get('.oxd-main-menu-item--name').eq(0)
    field.click()
    return this
  }

  clickAdd () {
    const field = cy.xpath("//button[normalize-space()='Add']")
    field.click()
    return this
  }

  selectuserRole (args) {
    const field = cy.get('.oxd-select-text-input').eq(0)
    field.click({ force: true }).then(() => {
      cy.contains(args, { timeout: 10000 }).click({ force: true })
    })
    return this
  }

  selectStatus (args) {
    const field = cy.get('.oxd-select-text-input').eq(1)
    field.click({ force: true }).then(() => {
      cy.contains(args, { timeout: 10000 }).click({ force: true })
    })
    return this
  }

  enterEmpName (args) {
    const field = cy.xpath("//input[@placeholder='Type for hints...']")
    field.clear().type(args)

    return this
  }

  enterUsername (args) {
    const field = cy.xpath(
      "//div[@class='oxd-form-row']//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div[@class='oxd-grid-item oxd-grid-item--gutters']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']"
    )
    field.clear().type(args)

    return this
  }

  enterPassword (args) {
    const field = cy.get('[type="password"]').eq(0)
    field.clear().type(args)

    return this
  }

  enterRetypePassword (args) {
    const field = cy.get('[type="password"]').eq(1)
    field.clear().type(args)

    return this
  }

  clickSave () {
    const field = cy.xpath("//button[normalize-space()='Save']")
    field.click()

    return this
  }

  clickCancel () {
    const field = cy.xpath("//button[normalize-space()='Cancel']")
    field.click()
    return this
  }
}

export default AdminPage
