// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { preprocessTypescript } = require('@nrwl/cypress/plugins/preprocessor');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // Preprocess Typescript file using Nx helper
  on('file:preprocessor', preprocessTypescript(config));

  config.baseUrl = process.env.CYPRESS_BASE_URL_OVERRIDE || 'http://localhost:4200';
  config.env.microservicesEndpoint = process.env.CYPRESS_MICROSERVICES_URL_OVERRIDE || 'http://localhost:3333';

  if (config.env.allowScreenshots) {
    Cypress.Screenshot.defaults({ screenshotOnRunFailure: true });
  }

  return config;
};
