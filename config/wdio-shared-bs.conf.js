const {
  SCENARIO_LISTS,
  BROWSERSTACK_USERNAME,
  BROWSERSTACK_ACCESS_KEY,
} = require("./constant.conf");
const allure = require("allure-commandline");

exports.config = {
  user: BROWSERSTACK_USERNAME,
  key: BROWSERSTACK_ACCESS_KEY,
  hostname: "hub.browserstack.com",
  services: [
    [
      "browserstack",
      {
        browserstackLocal: true,
      },
    ],
  ],
  maxInstances: 10,
  specs: SCENARIO_LISTS,
  commonCapabilities: {
    "bstack:options": {
      projectName: "BrowserStack Test Automation",
      debug: true,
      networkLogs: true,
      local: true,
    },
  },
  beforeSession: (config, capabilities) => {
    capabilities["appium:app"] = config.commonCapabilities["appium:app"];
    capabilities["bstack:options"] = {
      ...config.commonCapabilities["bstack:options"],
      ...capabilities["bstack:options"],
    };
  },
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
