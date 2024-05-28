const path = require("path");
const { config } = require("./wdio-shared.conf");
const { FILE_NAME, IOS_BUNDLE_ID } = require("./constant.conf");

config.capabilities = [
  {
    platformName: "iOS",
    "appium:platformVersion": "17.5",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone 15",
    "appium:udid": "01FCFD24-CEC7-43B6-AE55-86A84CF4AAA3",
    "appium:app": path.join(process.cwd(), "./app/ios/" + FILE_NAME + ".app"),
    "appium:bundleId": IOS_BUNDLE_ID,
    "appium:newCommandTimeout": 240,
    "appium:autoAcceptAlerts": true,
  },
];

exports.config = config;
