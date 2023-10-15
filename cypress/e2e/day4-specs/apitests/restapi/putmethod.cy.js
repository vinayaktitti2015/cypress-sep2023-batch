describe('PUT method calls', () => {
  it('test update user', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: 'morpheus',
        job: 'SDET',
        phone: 60112111111,
        email: 'morpheus@gmail.com',
        city: 'KL',
        country: 'Malaysia'
      }
    }).then(res => {
      expect(res.status).to.equal(200)
      expect(res.body.name).to.eq('morpheus')
      expect(res.body.job).to.equal('SDET')
      expect(res.body.phone).to.equal(60112111111)
      expect(res.body.email).to.equal('morpheus@gmail.com')

      assert.isNotNull(res.body.updatedAt, 'createdAt value not found')
    })
  })

  it('test update user with blanl/null data', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: ' ',
        job: ' ',
        phone: 60112111111,
        email: null,
        city: null,
        country: null
      }
    }).then(res => {
      expect(res.status).to.equal(503)
      expect(res.body.name).to.eq('morpheus')
      expect(res.body.job).to.equal('SDET')
      expect(res.body.phone).to.equal(60112111111)
      expect(res.body.email).to.equal('morpheus@gmail.com')

      assert.isNotNull(res.body.updatedAt, 'createdAt value not found')
    })
  })
})
