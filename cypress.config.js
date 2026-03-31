const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
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
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
