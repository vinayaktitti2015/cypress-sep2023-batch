import parseXlsx from 'excel'
describe('handling file downlaod', () => {
  it('test download png/jpg file', () => {
    cy.downloadFile(
      'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
      'cypress/downloads',
      'example.jpg'
    )
  })

  it.only('file download from website using href attr', () => {
    cy.visit('https://www.smartsheet.com/test-case-templates-examples')

    const expected = [
      null,
      null,
      'TEST TITLE',
      'PRIORITY',
      'TEST CASE ID',
      'TEST NUMBER',
      'TEST DATE',
      null,
      null,
      'PRIORITY KEY'
    ];

    // excel file download
    cy.xpath("//div[@id='p-id-476116']//a[contains(text(),'Excel')]").then(
      $el => {
        const url = $el.prop('href')
        cy.downloadFile(url, 'cypress/downloads', 'excel.xlsx')

        // verify excel
        cy.verifyDownload('excel.xlsx')

        // read data
        cy.parseXlsx(url).then(data => {
          console.log(data[0].data[1])
          cy.log(data[0].data[1])

          expect(data[0].data[1]).to.include.members(expected)
        })
      }
    )

    cy.xpath("//div[@id='p-id-476116']//a[contains(text(),'Word')]").then(
      $el => {
        const url = $el.prop('href')
        cy.downloadFile(url, 'cypress/downloads', 'word.doc')
      }
    )
    cy.verifyDownload('word.doc')

    cy.xpath("//div[@id='p-id-476116']//a[contains(text(),'PDF')]").then(
      $el => {
        const url = $el.prop('href')
        cy.downloadFile(url, 'cypress/downloads', 'sample.pdf')
      }
    )
    cy.verifyDownload('sample.pdf')
  })
})
