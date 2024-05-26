const {
  SCENARIO_LISTS,
  BROWSERSTACK_USERNAME,
  BROWSERSTACK_ACCESS_KEY,
} = require("./constant.conf");

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
};
