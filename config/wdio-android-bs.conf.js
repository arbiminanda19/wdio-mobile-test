const { ANDROID_BROWSERSTACK_APP_URL } = require("./constant.conf");
const { config } = require("./wdio-shared-bs.conf");

config.capabilities = [
  {
    platformName: "android",
    "appium:deviceName": "Samsung Galaxy S22 Ultra",
    "appium:platformVersion": "12.0",
  },
  {
    platformName: "android",
    "appium:deviceName": "Google Pixel 7 Pro",
    "appium:platformVersion": "13.0",
  },
];

config.commonCapabilities["bstack:options"].buildName =
  "SauceLabs App Test - Android";
config.commonCapabilities["appium:app"] = ANDROID_BROWSERSTACK_APP_URL;

exports.config = config;
