const { defineConfig } = require("cypress");
require('dotenv').config();
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.URL = process.env.ENV_URL // === '3355' ? 'token1' : 'token2'
      config.env.USER =  process.env.USER_ID // === '3355' ? 'token1' : 'token2'
      config.env.PASSWORD = process.env.USER_PASSWORD // === '3355' ? 'token1' : 'token2'
      return config
    }
  },
});
