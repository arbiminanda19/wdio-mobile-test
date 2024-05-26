const { IOS_BROWSERSTACK_APP_URL } = require("./constant.conf");
const { config } = require("./wdio-shared-bs.conf");

config.capabilities = [
  {
    deviceName: "iPhone 14 Pro Max",
    platformVersion: "16",
    platformName: "ios",
  },
  {
    deviceName: "iPhone XS",
    platformVersion: "15",
    platformName: "ios",
  },
];

config.commonCapabilities["bstack:options"].buildName =
  "SauceLabs App Test - iOS";
config.commonCapabilities["appium:app"] = IOS_BROWSERSTACK_APP_URL;

exports.config = config;
