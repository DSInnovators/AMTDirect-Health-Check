const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'AMTDirect Health Check',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    baseUrl: 'https://qa.testamt.com/',
    specPattern: 'cypress/e2e/Runner.cy.js'
  },
  retries: {
    runMode: 2,
    openMode: 0

  },
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 100000


});
