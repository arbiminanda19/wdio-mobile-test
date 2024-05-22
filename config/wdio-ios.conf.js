const path = require("path");
const { config } = require("./wdio-shared.conf");
const { FILE_NAME } = require("./constant.conf");

config.capabilities = [
  {
    platformName: "iOS",
    "appium:platformVersion": "16.2",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone SE (3rd generation)",
    "appium:app": path.join(process.cwd(), "./app/ios/" + FILE_NAME + ".app"),
    "appium:noReset": true,
    "appium:newCommandTimeout": 240,
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
