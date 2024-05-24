const path = require("path");
const { config } = require("./wdio-shared.conf");
const { FILE_NAME, ANDROID_PACKAGE_ID } = require("./constant.conf");

config.capabilities = [
  {
    platformName: "Android",
    maxInstances: 1,
    "appium:platformVersion": "11",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "nightwatch-android-11",
    "appium:app": path.join(
      process.cwd(),
      "./app/android/" + FILE_NAME + ".apk"
    ),
    "appium:appPackage": ANDROID_PACKAGE_ID,
    "appium:appActivity": "com.swaglabsmobileapp.MainActivity",
    "appium:noReset": false,
    "appium:fullReset": true,
    "appium:newCommandTimeout": 240,
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
