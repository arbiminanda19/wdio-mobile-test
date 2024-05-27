require("dotenv").config();

const LOGIN_SCENARIO = "./../scenarios/login/*.test.js";
const PRODUCT_SCENARIO = "./../scenarios/product/*.test.js";

const SCENARIO_LISTS = [LOGIN_SCENARIO, PRODUCT_SCENARIO];

module.exports = {
  IS_USE_APPIUM_GLOBAL: false,
  FILE_NAME: "saucelabs",
  SCENARIO_LISTS: SCENARIO_LISTS,
  ANDROID_PACKAGE_ID: "com.swaglabsmobileapp",
  IOS_BUNDLE_ID: "com.saucelabs.SwagLabsMobileApp",
  BROWSERSTACK_USERNAME: process.env.BROWSERSTACK_USERNAME,
  BROWSERSTACK_ACCESS_KEY: process.env.BROWSERSTACK_ACCESS_KEY,
  ANDROID_BROWSERSTACK_APP_URL: process.env.ANDROID_BROWSERSTACK_APP_URL,
  IOS_BROWSERSTACK_APP_URL: process.env.IOS_BROWSERSTACK_APP_URL,
};
