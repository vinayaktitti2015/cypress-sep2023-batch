export const selectRandomDropdownValue = (parentElement, randomOption) => {
  cy.get(randomOption)
    .its('length')
    .then($length => {
      const lenValue = $length
      cy.log('lenValue', lenValue)
      const list = randomNumber($length)
      cy.log('list ', list)

      cy.get(randomOption)
        .eq(list)
        .then(ele => {
          cy.get(parentElement)
            .select(ele.val(), { force: true })
            .should('have.value', ele.val())
        })
    })
}

export const randomNumber = number => {
  return Math.floor(Math.random() * number)
}

export const getTodayDate = () => {
  var today = new Date()
  var dd = today.getDate()
  var month = today.getMonth()
  var year = today.getFullYear()

  cy.log('dd: ', dd)
  cy.log('month: ', month)
  cy.log('year: ', year)

  cy.log('full date format: ', dd + '/' + month + '/' + year)

  if (dd < 10) {
    dd = '0' + dd // 09, 05
  }

  return dd
}

export const getFutureDay = val => {
  const today = new Date()
  var tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + val)
  var dd = tomorrow.getDate()

  return dd
}

// generic functions
export const eleClick = loc => {
  cy.get(loc).click({ force: true })
}

export const eleSelect = (loc, value) => {
  cy.get(loc).select(value).should('have.value', value)
}

export const eleCheck = loc => {
  cy.get(loc).check({ force: true })
}

export const eleType = (loc, args) => {
  cy.get(loc).type(args)
}

export const eleTrigger = (loc, args) => {
  cy.get(loc).trigger(args)
}

export const switchToIframeClick = (iframeLoc, childEleLoc) => {
  cy.iframe(iframeLoc).find(childEleLoc).click()
}

export const switchToIframeType = (iframeLoc, childEleLoc, args) => {
  cy.iframe(iframeLoc).find(childEleLoc).type(args)
}

export const navigateTo = args => {
  cy.go(args)
}

export const eleExist = loc => {
  cy.get(loc).should('be.visible')
}

export const eleExistText = (loc, args) => {
  cy.get(loc).should('have.text', args)
}

export const eleContains = args => {
  cy.contains(args).isVisible()
}
