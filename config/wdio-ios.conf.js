const path = require("path");
const { config } = require("./wdio-shared.conf");
const { FILE_NAME, IOS_BUNDLE_ID } = require("./constant.conf");

config.capabilities = [
  {
    platformName: "iOS",
    "appium:platformVersion": "17.5",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone SE (3rd generation)",
    "appium:udid": "D21D8206-290B-4555-B86D-4438F61AB50B",
    "appium:app": path.join(process.cwd(), "./app/ios/" + FILE_NAME + ".app"),
    "appium:bundleId": IOS_BUNDLE_ID,
    "appium:newCommandTimeout": 240,
    "appium:autoAcceptAlerts": true,
  },
];

exports.config = config;
