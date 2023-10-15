// visit
cy.visit('url');
cy.request('api')
cy.task('db')

cy.url().should('assertion')

cy.go('back')
cy.go('forward')

cy.reload()
cy.reload(true)

// user events
cy.get('css selector')
cy.get('css selector').click()
cy.get('css selector').click({force: true})
cy.get('css selector').click({multiple: true})
cy.get('css selector').click({timeout: 10000})
cy.get('loc').dblclick()
cy.get('loc').dblclick()
cy.get('loc').rightclick()

cy.get('css selector').type('input')
cy.get('css selector').select('dropdown option')
cy.get('css selector').check()
cy.get('css selector').uncheck()
cy.get('css selector').trigger('mouseover')
cy.get('css selector').scrollIntoView().click()
cy.scrollTo('bottom')
cy.scrollTo('topLeft')
cy.contains('LOGIN').click()

// promises or assertions
cy.get('css selector').should('be.visible').click()
cy.get('css selector').should('not.be.visible').click()
cy.get('css selector').should('be.always.calledOn').click()
cy.get('css selector').should('be.enabled').click()
cy.get('css selector').should('be.disabled').click()

// query or traversing
cy.get('[data-test="Actions-children"] li').first().click()
cy.get('[data-test="Actions-children"] li').last().click()
cy.get('[data-test="Actions-children"] li').eq(4).click()
cy.get('[data-test="Actions-children"] li').eq(9).click()


cy.get('parent').find('child ele').click()
cy.get('parent').next().contains('label').click()
cy.get('parent').nextAll().contains('label').click()

cy.get('uncheck').prev().contains('type').click()
cy.get('uncheck').prevAll().click({multiple: true})

cy.get('loc value').as('variable');

cy.wait('@variable')
cy.get('@variable').type('something')

