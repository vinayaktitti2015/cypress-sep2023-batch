describe("webtable handling", () => {
  it.only("sample scenario for webtable", () => {
    cy.visit("http://testautomationpractice.blogspot.com/");
    // cy.get('[name="BookTable"] tbody tr td:nth-child(1)')
    //     .eq(4)
    //     .scrollIntoView()
    cy.scrollTo("center");
    cy.get('[name="BookTable"] tbody tr td:nth-child(1)').each(
      ($el, index, $list) => {
        cy.log("ele ", $el.text());

        if ($el.text() == "Master In Java") {
          // check Author
          cy.log("list ", $list.text() + "\n");
          cy.get('[name="BookTable"] tbody tr td:nth-child(2)')
            .eq(index)
            .then(($el) => {
              expect($el.text()).to.eq("Amod");
            });

          // check subject using dynamic functions
          cy.get('[name="BookTable"] tbody tr td:nth-child(3)')
            .eq(index)
            .then(($el) => {
              const actual = $el.text();
              const expected = ["Java", "JAVA", "java"];
              expect(expected).to.include(actual);

              //expect(expected).to.have.any.keys(actual);
              expect(actual).to.be.oneOf(expected);
            });

          // check PRICE
          cy.get('[name="BookTable"] tbody tr td:nth-child(4)')
            .eq(index)
            .then(($el) => {
              const price = $el.text();
              const priceInt = parseInt(price);
              expect(priceInt).to.eq(2000);
            });
        }
      }
    );
  });
});
