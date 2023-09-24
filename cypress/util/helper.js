// these are the reusable components used for any project functions
/**
 * 
 * @returns cypress.
 * playwright
 * puppeteer
 * protarctor
 * webdriverio
 */

export const getTodayDate = () => {
  var today = new Date();
  var dd = today.getDate();

//   if (dd < 10) {
//     dd = "0" + dd;
//   }

  return dd;
};

export const getFutureDate = (val) => {
  const today = new Date();
  var tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + val);
  var dd = tomorrow.getDate();

  return dd;
};

export const randomNumber = (numbers) => {
  return Math.floor(Math.random() * numbers);
};

export const selectRandomDropdownValue = (ddElement, ddOptions) => {
  cy.get(ddOptions)
    .its("length")
    .then(($len) => {
      const lenValue = $len;
      const list = randomNumber(lenValue);

      cy.get(ddOptions)
        .eq(list)
        .then((ele) => {
          cy.get(ddElement).select(ele.val()).should("have.value", ele.val());
        });
    });
};

export const selectRandomCheckbox = (element) => {
  cy.get(element)
    .its("length")
    .then(($len) => {
      const lenValue = $len;
      const list = randomNumber(lenValue);

      cy.get(element).eq(list).should("not.be.checked").check();
    });
};
