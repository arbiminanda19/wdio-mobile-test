import { isIOS } from "../../helper";

const platform = {};
platform.android = {
  TEXT_INPUT_USERNAME: `//*[@content-desc="test-Username"]`,
  TEXT_INPUT_PASSWORD: `//*[@content-desc="test-Password"]`,
  BUTTON_SUBMIT_LOGIN: '//*[@content-desc="test-LOGIN"]',
};

platform.ios = {
  TEXT_INPUT_USERNAME: ``,
  TEXT_INPUT_PASSWORD: ``,
  BUTTON_SUBMIT_LOGIN: ``,
};

const elements = isIOS() ? platform.ios : platform.android;
module.exports = elements;
