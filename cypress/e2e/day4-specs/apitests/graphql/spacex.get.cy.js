import {
  companyQuery,
  rocketQuery,
  launchesQuery
} from '../../../../util/payload'
describe('Graph QL calls', () => {
  it('fetch company details', () => {
    cy.request({
      url: 'https://api.spacex.land/graphql/',
      method: 'POST',
      body: {
        query: companyQuery
      }
    }).then(res => {
      expect(res.status).to.eq(200)
      expect(res.body.data.company.ceo).to.eq('Elon Musk')
      expect(res.body.data.company.employees).to.eq(7000)
      expect(res.body.data.company.founded).to.eq(2002)
      expect(res.body.data.company.headquarters.address).to.eq('Rocket Road')

      expect(res.body.data.company.summary).to.eq(
        'SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.'
      )
    })
  })

  it('fetch rocket details', () => {
    cy.request({
      url: 'https://api.spacex.land/graphql/',
      method: 'POST',
      body: {
        query: rocketQuery
      }
    }).then(res => {
      expect(res.status).to.eq(200)
      expect(res.body.data.rocket).to.eq(null)
    })
  })

  it('fetch launches details', () => {
    cy.request({
      url: 'https://api.spacex.land/graphql/',
      method: 'POST',
      body: {
        query: launchesQuery
      }
    }).then(res => {
      expect(res.status).to.eq(200)

      cy.log('res: ', JSON.stringify(res))
    })
  })
})
