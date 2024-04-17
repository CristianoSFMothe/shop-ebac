const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    testIsolation: false,
    setupNodeEvents(on, config) {
      // eslint-disable-next-line no-trailing-spaces

    },
    env: {
      hideCredentials: true,
      requestMode: true,
      hideXhr: true,
    },
    experimentalRunAllSpecs: true,
  },
})
