const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    pageLoadTimeout:10000,
    watchForFileChanges:false,
    defaultCommandTimeout:60000,
    specPattern: "cypress/e2e/tests/features/*.feature",
    baseUrl: "https://bambello.herokuapp.com/#/board/60bb8a47bfc2a07e2ada4b0f",
    screenshotsFolder: "testResults/screenshots",
    videosFolder: "testResults/videos",
    env: {
      qaUrl: "",
      stageUrl: "",
      baseUri: "",
      TAGS: "@demouitest"
    }
  }
});