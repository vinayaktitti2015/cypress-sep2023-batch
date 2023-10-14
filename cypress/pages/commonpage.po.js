class CommonPage {
  clickRegisterLink() {
    const field = cy.get(".ico-register");
    field.click();
    return this;
  }

  clickLoginLink() {
    const field = cy.get(".ico-login");
    field.click();
    return this;
  }

  clickWishlistLink() {
    const field = cy.get(".ico-wishlist");
    field.click();
    return this;
  }

  clickShoppingCartLink() {
    const field = cy.get(".ico-cart");
    field.click();
    return this;
  }
}

export default CommonPage;
