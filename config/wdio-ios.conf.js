const path = require("path");
const { config } = require("./wdio-shared.conf");
const { FILE_NAME, IOS_BUNDLE_ID } = require("./constant.conf");

config.capabilities = [
  {
    platformName: "iOS",
    "appium:platformVersion": "16.2",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone SE (3rd generation)",
    "appium:app": path.join(process.cwd(), "./app/ios/" + FILE_NAME + ".app"),
    "appium:bundleId": IOS_BUNDLE_ID,
    "appium:noReset": false,
    "appium:fullReset": true,
    "appium:newCommandTimeout": 240,
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
