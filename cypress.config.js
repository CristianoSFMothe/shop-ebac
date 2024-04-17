const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    testIsolation: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
    env: {
      hideCredentials: true,
      requestMode: true,
      hideXhr: true,
    },
    experimentalRunAllSpecs: true,
  },
})
