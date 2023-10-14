// these are the reusable components used for any project functions
/**
 *
 * @returns cypress.
 * playwright
 * puppeteer
 * protarctor
 * webdriverio
 */

// date functions
export const getTodayDate = () => {
  var today = new Date();
  var dd = today.getDate();

  //   if (dd < 10) {
  //     dd = "0" + dd;
  //   }

  return dd;
};

export const getMonth = () => {
  var today = new Date();
  var month = today.getMonth();

  //   if (dd < 10) {
  //     dd = "0" + dd;
  //   }

  return month;
};

export const getThisYear = () => {
  var today = new Date();
  var year = today.getFullYear();

  //   if (dd < 10) {
  //     dd = "0" + dd;
  //   }

  return year;
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
