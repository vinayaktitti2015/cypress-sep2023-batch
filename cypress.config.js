const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { isFileExist } = require("cy-verify-downloads");
const xlsx = require("node-xlsx").default;
const request = require("request");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { downloadFile });

      on("task", { isFileExist });

      on("task", {
        parseXlsx(args) {
          return new Promise((resolve, reject) => {
            const r = request(
              { url: args.url, encoding: null },
              function (err, res, body) {
                if (!res) {
                  return reject(new Error("No response"));
                }
                if (res.statusCode !== 200) {
                  return reject(
                    new Error("Bad status code: " + res.statusCode)
                  );
                }
                const sheet = xlsx.parse(body);
                console.log(JSON.stringify(sheet));
                resolve(sheet);
              }
            );
          });
        },
      });
    },
    //specPattern: "cypress/specs/**/*.spec.js",
    //excludeSpecPattern: "cypress/e2e/2-advanced-examples/location.cy.js",
    //baseUrl: "https://demo.nopcommerce.com/",
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 20000,
    requestTimeout: 6000,
    responseTimeout: 6000,
    watchForFileChanges: true,
    chromeWebSecurity: false,
    downloadsFolder: "cypress/downloads",
  },
});
