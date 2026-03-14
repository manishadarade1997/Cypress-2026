const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    allowCypressEnv: false,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    username: "8482964245",
    password: "Mnud@1010",
    url: "https://www.amazon.in/s?k=join+amazon+prime&adgrpid=1327112148528381&hvadid=82944775541359&hvbmt=bb&hvdev=c&hvlocphy=157689&hvnetw=o&hvqmt=b&hvtargid=kwd-82945393014646%3Aloc-90&hydadcr=5626_2377281&mcid=3861a9d242543041b997efa1f39279d3&msclkid=c099b4ff045d1c944006dd557475a908&tag=msndeskstdin-21&ref=pd_sl_9ntprzamt3_b"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
