import { isIOS } from "../../helper";

const platform = {};
platform.android = {
  SPECIFIC_PRODUCT: (productName) =>
    `//*[@content-desc="test-Item title" and contains(@text, '${productName}')]`,
  CART_IMAGE: '//*[@content-desc="test-Cart"]',
  CART_COUNT: () =>
    `${platform.android.CART_IMAGE}/descendant::android.widget.TextView`,
  BUTTON_ADD_TO_CART: '//*[@content-desc="test-ADD TO CART"]',
  BUTTON_ADD_SPECIFIC_PRODUCT_TO_CART: (productName) =>
    `${platform.android.SPECIFIC_PRODUCT(
      productName
    )}/following-sibling::*[@content-desc="test-ADD TO CART"]`,
  BUTTON_REMOVE_FROM_CART: '//*[@content-desc="test-REMOVE"]',
};

platform.ios = {
  SPECIFIC_PRODUCT: (productName) =>
    `**/*[\`name == "test-Item" AND label CONTAINS "${productName}"\`]`,
  CART_IMAGE: '**/*[`name == "test-Cart"`]',
  CART_COUNT: () => platform.ios.CART_IMAGE,
  BUTTON_ADD_TO_CART: '**/*[`name == "test-ADD TO CART"`]',
  BUTTON_ADD_SPECIFIC_PRODUCT_TO_CART: (productName) =>
    `${platform.ios.SPECIFIC_PRODUCT(
      productName
    )}/*/*/*[\`name == "ADD TO CART"\`]`,
  BUTTON_REMOVE_FROM_CART: '**/*[`name == "test-REMOVE"`]',
};

const elements = isIOS() ? platform.ios : platform.android;
module.exports = elements;
