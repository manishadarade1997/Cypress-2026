const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  defaultCommandTimeout: 4000,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  env: {
    base_url: "https://www.vimaansafar.com/portal/login.php",
    email: "manishadarade2014@gmail.com",
    password: "Mnud@1010"
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
