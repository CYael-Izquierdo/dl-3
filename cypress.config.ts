import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  pageLoadTimeout: 10000,
  video: false,
  chromeWebSecurity: true,
  watchForFileChanges: false,
  failOnStatusCode: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  screenshotOnRunFailure: true,
  restartBrowserBetweenSpecFiles: true,
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  retries: {
    runMode: 2,
    openMode: 0,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
