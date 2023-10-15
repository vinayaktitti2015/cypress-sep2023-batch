describe('PATCH method calls', () => {
  it('test update user single record', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        phone: 601122222222,
        email: 'morpheus22222'
      }
    }).then(res => {
      expect(res.status).to.equal(200)
     
      expect(res.body.phone).to.equal(601122222222)
      expect(res.body.email).to.equal('morpheus22222@gmail.com')

      assert.isNotNull(res.body.updatedAt, 'updatedAt value not found')
    })
  })

})
