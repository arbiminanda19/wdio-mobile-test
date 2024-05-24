const { IS_USE_APPIUM_GLOBAL, SCENARIO_LISTS } = require("./constant.conf");

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
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
