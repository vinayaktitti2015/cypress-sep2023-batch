describe('handling dragNdrop feature', () => {
  it('test dragNdrop using DataTransfer', () => {
    cy.visit('https://jqueryui.com/droppable/')

    const dataTransfer = new DataTransfer()

    cy.switchToIframe('.demo-frame').find('#draggable').trigger('dragstart')
    cy.switchToIframe('.demo-frame')
      .find('#droppable')
      .trigger('drop', { dataTransfer })
    cy.switchToIframe('.demo-frame').find('#droppable').trigger('dropend')
  })

  // 2nd approach
  it('test dragNdrop using cy-drag-drop package', () => {
    cy.visit('https://jqueryui.com/droppable/')
    cy.switchToIframe('.demo-frame')
      .find('#draggable')
      .drag('#droppable', {
        source: { x: 38, y: 60 },
        target: { position: 'right' },
        force: true
      })
  })

  it('test dragNdrop using cy-drag-drop package', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#draggable')
      .drag('#droppable', { force: true })
      .then(success => {
        assert.isTrue(success)
      })
  })

  it.only('test dragNdrop using cy-drag-drop package - move function', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#draggable')
      .move({ deltaX: 199, deltaY: 21 })
      
  })
})
