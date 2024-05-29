const { IS_USE_APPIUM_GLOBAL, SCENARIO_LISTS } = require("./constant.conf");
const allure = require("allure-commandline");

exports.config = {
  // Runner configuration
  runner: "local",
  port: 4723,

  // Test files
  specs: [SCENARIO_LISTS],
  exclude: [],

  // Capabilities
  maxInstances: 10,
  before: function (capabilities, specs) {
    require("ts-node").register({
      transpileOnly: true,
      project: "./tsconfig.json",
    });
  },

  // Test configurations
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: IS_USE_APPIUM_GLOBAL ? [] : [["appium"]],
  appium: {
    command: "appium",
  },
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 1000000,
  },
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },
};
