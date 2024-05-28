const { IOS_BROWSERSTACK_APP_URL } = require("./constant.conf");
const { config } = require("./wdio-shared-bs.conf");

config.capabilities = [
  {
    "appium:deviceName": "iPhone 14 Pro Max",
    "appium:platformVersion": "16",
    platformName: "iOS",
  },
  {
    "appium:deviceName": "iPhone XS",
    "appium:platformVersion": "15",
    platformName: "iOS",
  },
];

config.commonCapabilities[
  "bstack:options"
].buildName = `SauceLabs App Test - iOS - ${Date.now()}`;
config.commonCapabilities["appium:app"] = IOS_BROWSERSTACK_APP_URL;

exports.config = config;
