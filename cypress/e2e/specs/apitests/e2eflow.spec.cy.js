describe("CRUD operations", () => {
  beforeEach(() => {
    cy.getToken();
  });
  it("check e2e flow", () => {
    cy.createProduct();
    cy.getProduct();
    cy.updateProduct();
    cy.deleteProduct();
  });
});
