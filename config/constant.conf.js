const LOGIN_SCENARIO = "./../scenarios/login/*.test.js";
const PRODUCT_SCENARIO = "./../scenarios/product/*.test.js";

const SCENARIO_LISTS = [LOGIN_SCENARIO, PRODUCT_SCENARIO];

module.exports = {
  IS_USE_APPIUM_GLOBAL: false,
  FILE_NAME: "saucelabs",
  SCENARIO_LISTS: SCENARIO_LISTS,
  ANDROID_PACKAGE_ID: "com.swaglabsmobileapp",
  IOS_BUNDLE_ID: "com.swaglabsmobileapp",
};
