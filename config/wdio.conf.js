const path = require("path");
const { IS_USE_APPIUM_GLOBAL } = require("./constant.conf");

exports.config = {
  // Runner configuration
  runner: "local",
  port: 4723,

  // Test files
  specs: ["./../test/specs/**/*.test.js"],
  exclude: [],

  // Capabilities
  maxInstances: 10,
  before: function (capabilities, specs) {
    require("ts-node").register({
      transpileOnly: true,
      project: "./tsconfig.json",
    });
  },
  capabilities: [
    {
      platformName: "Android",
      "appium:platformVersion": "11",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "emulator-5556",
      "appium:app": path.join(process.cwd(), "./app/android/wdio.apk"),
      "appium:noReset": true,
      "appium:newCommandTimeout": 240,
      "appium:autoGrantPermissions": true,
    },
  ],

  // Test configurations
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: IS_USE_APPIUM_GLOBAL ? [] : [["appium", { command: "appium" }]],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
