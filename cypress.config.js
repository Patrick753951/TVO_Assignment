const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kcv8qr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      fixturesFolder: 'fixtures'
    },
    baseUrl: 'https://www.tvo.org/series-docs',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});