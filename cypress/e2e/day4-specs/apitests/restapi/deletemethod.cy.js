describe('DELETE method calls', () => {
  it('test DELETE user single record', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      expect(res.status).to.equal(204)

      expect(res.headers).to.have.property('cf-cache-status', 'DYNAMIC')
      expect(res.headers).to.have.property('connection', 'keep-alive')
    })
  })

  it('test DELETE user single record', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.its('headers').its('cf-cache-status').should('eq', 'DYNAMIC')
      res.its('headers').its('connection').should('eq', 'keep-alive')
    })
  })
})
