describe('mysql database queries', () => {
  it('fetch members table field data', () => {
    cy.task('queryDb', 'SELECT * FROM members').then(results => {
      cy.log('results: ', JSON.stringify(results))

      expect(results[0].full_names).to.equal('John')
      expect(results[0].gender).to.equal('Male')
      expect(results[0].postal_address).to.equal('50232')
      expect(results[0].contact_number).to.equal('602323232')
    })
  })

  it('inserting new records to members table field data', () => {
    const query =
      'INSERT INTO members (membership_number, full_names, gender,  date_of_birth, physical_address, postal_address, contact_number, email) VALUES (4, "Sarah", "Female", null, "Selangor", "55555", "6102323222", "sarah@yahoo.com")'

    cy.task('queryDb', query).then(results => {
      cy.log('results: ', JSON.stringify(results))
    })

    cy.task('queryDb', 'SELECT * FROM members').then(results => {
      cy.log('results: ', JSON.stringify(results))

      expect(results[3].full_names).to.equal('Sarah')
      expect(results[3].gender).to.equal('Female')
      expect(results[3].postal_address).to.equal('55555')
      expect(results[3].contact_number).to.equal('6102323222')
    })
  })

  it('Update records to members table field data', () => {
    const query =
      'UPDATE members SET contact_number="00012121212", email="sarah12112@yahoo.com" WHERE membership_number=4'

    cy.task('queryDb', query).then(results => {
      cy.log('results: ', JSON.stringify(results))
    })

    cy.task('queryDb', 'SELECT * FROM members').then(results => {
      cy.log('results: ', JSON.stringify(results))

      expect(results[3].full_names).to.equal('Sarah')
      expect(results[3].gender).to.equal('Female')
      expect(results[3].postal_address).to.equal('55555')
      expect(results[3].contact_number).to.equal('00012121212')
    })
  })

  it('Delete records to members table field data', () => {
    const query = 'DELETE FROM members WHERE membership_number=3'

    cy.task('queryDb', query).then(results => {
      cy.log('results: ', JSON.stringify(results))
    })

    cy.task('queryDb', 'SELECT * FROM members').then(results => {
      cy.log('results: ', JSON.stringify(results))

      expect(results[2].full_names).to.equal(null)
      expect(results[2].gender).to.equal(null)
      expect(results[2].postal_address).to.equal(null)
      expect(results[2].contact_number).to.equal(null)
    })
  })
})
