describe("file download feature", () => {
  it("verify excel file download ", () => {
    cy.visit("https://www.smartsheet.com/test-case-templates-examples");

    // step 1 download the file
    cy.get(
      "a[href='/file/ic-test-case-planning-and-execution-template-10549xlsx']"
    ).scrollIntoView();
    cy.get(
      "a[href='/file/ic-test-case-planning-and-execution-template-10549xlsx']"
    ).then(($el) => {
      const url = $el.prop("href");
      cy.downloadFile(url, "cypress/downloads", "excel.xlsx");

      // step 2 verify the file exists
      cy.verifyDownload("excel.xlsx");

      // verify the data exists
      //read the document
      const expected = [
        null,
        null,
        "TEST TITLE",
        "PRIORITY",
        "TEST CASE ID",
        "TEST NUMBER",
        "TEST DATE",
        null,
        null,
        "PRIORITY KEY",
      ];

      // to read the file data
      cy.parseXlsx(url).then((data) => {
        console.log(data);
        cy.log("excel data ", data[0].data[1]); // sheet number/row number
        console.log("excel data ", data[0].data[1]);

        expect(data[0].data[1]).to.include.members(expected);
        for (var i = 1; i < 10; i++) {
          const text = data[0].data[i]
          cy.log(text);
        }
      });
    });
  });
});
