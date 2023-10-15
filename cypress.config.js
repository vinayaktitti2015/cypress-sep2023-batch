const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { isFileExist } = require("cy-verify-downloads");
const xlsx = require("node-xlsx").default;
// import * as request from "request";
const cucumber = require("cypress-cucumber-preprocessor").default;
const mysql = require("mysql2");

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.config.js envs
  const connection = mysql.createConnection(config.env.db);

  // start connection to db
  connection.connect();

  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "mochareports",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true,
    quiet: true,
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    indexHtmlFile: "/custom/path/to/component-index.html",
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("task", { downloadFile });

      on("task", { isFileExist });

      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });

      // cuucmber event
      on("file:preprocessor", cucumber());

      require("cypress-mochawesome-reporter/plugin")(on);

      // on("task", {
      //   parseXlsx(args) {
      //     return new Promise((resolve, reject) => {
      //       const r = request(
      //         { url: args.url, encoding: null },
      //         function (err, res, body) {
      //           if (!res) {
      //             return reject(new Error("No response"));
      //           }
      //           if (res.statusCode !== 200) {
      //             return reject(
      //               new Error("Bad status code: " + res.statusCode)
      //             );
      //           }
      //           const sheet = xlsx.parse(body);
      //           console.log(JSON.stringify(sheet));
      //           resolve(sheet);
      //         }
      //       );
      //     });
      //   },
      // });

      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--width=1400");
          launchOptions.args.push("--height=1200");
          launchOptions.args.push("--incognito");
          launchOptions.args.push("--allow-http-screen-capture");
          launchOptions.args.push("--disable-site-isolation-trials");
          launchOptions.args.push(
            "--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process"
          );
          return launchOptions;
        }

        if (browser.name === "firefox") {
          launchOptions.args.push("--disable-site-isolation-trials");
          launchOptions.args.push(
            "--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process"
          );
          return launchOptions;
        }

        if (browser.name === "edge") {
          launchOptions.args.push("--disable-site-isolation-trials");
          launchOptions.args.push(
            "--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process"
          );
          return launchOptions;
        }

        if (browser.name === "electron") {
          launchOptions.args.push("--window-size=1400,1200");
          launchOptions.preferences.darkTheme = true;
          launchOptions.args.push("--disable-site-isolation-trials");
          launchOptions.args.push(
            "--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process"
          );
          return launchOptions;
        }
      });

      return config;
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: false,
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 60000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    video: true,
    env: {
      TAGS: "@smoke",
      db: {
        host: "localhost",
        user: "root",
        password: "Testing@2023",
        database: "MyFlixDB",
      },
    },
    projectId: "na64co",
    specPattern: "**/*.feature",
    retries: {
      openMode: 2,
      runMode: 2,
    },

    //specPattern: "**/*.feature"
  },
});
