require("dotenv").config();

const LOGIN_SCENARIO = "./../scenarios/login/*.test.js";
const PRODUCT_SCENARIO = "./../scenarios/product/*.test.js";

const SCENARIO_LISTS = [LOGIN_SCENARIO, PRODUCT_SCENARIO];

const now = new Date();
const day = String(now.getDate()).padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
const year = now.getFullYear();
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");

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
  TIMESTAMP: `${day}/${month}/${year}, ${hours}:${minutes}`,
};
