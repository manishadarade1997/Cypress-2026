const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  //allowCypressEnv: false,
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 600000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 0,
  },

  env: {
    base_url: "https://www.vimaansafar.com/portal/login.php",
    email: "manishadarade2014@gmail.com",
    password: "Mnud@1010"
  },


  e2e: {
    specPattern: "cypress/e2e/BDD/**/*.feature",
    excludeSpecPattern: "cypress/e2e/**/*.cy.js",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config);
      
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      
      return config;
    },
  },
});
