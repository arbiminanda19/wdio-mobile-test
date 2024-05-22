const path = require("path");
const { config } = require("./wdio-shared.conf");
const { FILE_NAME } = require("./constant.conf");

config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "nightwatch-android-11",
    "appium:app": path.join(
      process.cwd(),
      "./app/android/" + FILE_NAME + ".apk"
    ),
    "appium:noReset": true,
    "appium:newCommandTimeout": 240,
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
