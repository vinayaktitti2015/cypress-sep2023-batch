///<reference types="Cypress" />

describe("test suite", () => {
  beforeEach(() => {
    // opening a web page
    cy.visit("https://docs.cypress.io/api/table-of-contents");
  });
  it("test case 001", () => {
    // url commands
    cy.url().should("include", "/api/table-of-contents");
    cy.url().should("equal", "https://test.cypress.io/api/table-of-contents");

    // query commands
    cy.get("h1").should("have.text", "Table of Contents");
    cy.get("h2").should("have.text", "Introduction"); // 4 secs by default

    cy.contains("Login").click();

    // tarversing commands
    cy.get("h1").first().click();
    cy.get("h2").last().click();
    cy.get("h3").eq(10).click();

    cy.get("parent h2").find("a").click();
    cy.contains("A/B Testing").next().click();
    cy.contains("WYSIWYG Editor").prev().click();

    cy.contains("A/B Testing").nextAll().click();
    cy.contains("WYSIWYG Editor").prevAll().click();

    cy.contains("WYSIWYG Editor").parent().click();

    // assertion commands
    cy.title()
      .should("equal", "Table of Contents")
      .and("include", "Table of Contents")
      .and("contain", "Introduction");

    // user interaction commands
    cy.get("h1").click();
    cy.get("h1").click({ force: true });
    cy.get("h2").click(100, 200);

    cy.get('[name="username"]').type("text");

    // dropdown commands
    cy.get('[name="dropdown"]').select("Option 1");
    cy.get('[name="dropdown"]').select("Option 2");

    // radio button commands
    cy.get('input[type="radio"]').check();
    cy.get('input[type="radio"]').uncheck();

    // checkbox commands
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').uncheck();

    // right click commands
    cy.get("h1").rightclick();
    cy.get("h1").rightclick({ force: true });
    cy.get("h2").rightclick(100, 200);

    cy.get("h1").dblclick();

    // scroll commands
    cy.get("h1").scrollIntoView();
    cy.scrollTo("top");
    cy.scrollTo("bottom");
    cy.scrollTo("center");

    // navigation commands
    cy.go("back");
    cy.go("forward");
    cy.reload();
    cy.reload(true);

    // static wait commands
    cy.wait(5000);

    // explicit wait commands
    cy.get("h1", { timeout: 10000 }).should("have.text", "Table of Contents");

    // hover commands
    cy.contains("Computers").trigger("mouseover");
    cy.get("h1").trigger("mousemove");
    cy.get("h1").trigger("mouseout");

    cy.get("h1").trigger("dragstart");
    cy.get("h1").trigger("drag");
    cy.get("h1").trigger("dragend");

    // responsive commands
    cy.viewport(1000, 600);
    cy.viewport("iphone-xr");
    cy.viewport("samsung-galaxy-s");
    cy.viewport("ipad-2");
    cy.viewport("iphone-6");

    /**
     * web
     * api
     * db checking
     * mobie-view
     * accessibility checking
     * visual testing
     * intercepting requests
     * component testing
     * unit testing
     * performance testing using google lighthouse analysis
     */
  });
});
