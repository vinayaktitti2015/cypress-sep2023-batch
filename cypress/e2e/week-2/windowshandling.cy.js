describe("windows handling", () => {
  it("test new window or child window", () => {
    cy.visit("https://demoqa.com/browser-windows", {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("childwindow");
      },
    });

    cy.get("#windowButton")
      .click()
      .then(() => {
        // switch to the child window
        cy.window().its("open").should("be.calledOnce"); // assertion
        cy.visit("https://demoqa.com/sample");
        cy.get("@childwindow").then(() => {
          cy.contains("This is a sample page").should("be.visible");
        });
      });
  });

  it.only("test new window or child window for dynamic URL", () => {
    let parentWindow;

    cy.visit("https://demoqa.com/browser-windows", {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("childwindow");
      },
    });

    // save the parent window handle
    cy.window().then((win) => {
      parentWindow = win;
    });

    cy.get("#windowButton")
      .click()
      .then(() => {
        // switch to the child window
        cy.window().its("open").should("be.calledOnce");
        cy.get("@childwindow")
          .should("be.calledOnce", Cypress.sinon.match.string)
          .then((url) => {
            cy.visit("https://demoqa.com" + url.args[0][0]);
            url.restore;

            cy.get("@childwindow").then(() => {
              cy.contains("This is a sample page").should("be.visible");
            });

            // close the child window
            cy.window().then((childwin) => {
              childwin.close();
            });

            cy.log("parentWindow", +parentWindow);
            // switch back to the previous page/parent window
            const parenturl = cy.wrap(parentWindow).its("location.href");

            cy.visit(parenturl);
          });
      });
  });

  // using cypress helpers functions
  it("test new window or child window for about:blank", () => {
    cy.visit("/browser-windows", {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("childwindow");
      },
    });

    cy.get("#messageWindowButton")
      .click({ force: true })
      .wait(2000)
      .then(() => {
        // switch to the child window
        cy.switchToTab(0);
        cy.contains(
          "Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization."
        ).should("be.visible");
      });
  });

  it("test new tab ", () => {
    cy.visit("/browser-windows", {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("childwindow");
      },
    });

    cy.get("#tabButton")
      .click()
      .then(() => {
        // switch to the child window

        try {
          cy.tabVisit("https://demoqa.com/sample", "newtab");
          cy.contains("This is a sample page").should("be.visible");
        } catch (error) {
          cy.log(error);
        }
      });
  });
});
