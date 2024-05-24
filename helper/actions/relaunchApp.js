import { ANDROID_PACKAGE_ID, IOS_BUNDLE_ID } from "../../config/constant.conf";
import { isIOS } from "../../helper";

const relaunchApp = () => {
  const BUNDLE_ID = isIOS() ? IOS_BUNDLE_ID : ANDROID_PACKAGE_ID;
  const currentContext = driver.getContext();
  if (currentContext) {
    driver.terminateApp(BUNDLE_ID);
    driver.activateApp(BUNDLE_ID);
  }
};

export default relaunchApp;
