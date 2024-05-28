import { ANDROID_PACKAGE_ID, IOS_BUNDLE_ID } from "../../config/constant.conf";
import { isIOS } from "../../helper";

const relaunchApp = async () => {
  const BUNDLE_ID = isIOS() ? IOS_BUNDLE_ID : ANDROID_PACKAGE_ID;
  // restart app if running
  const runningApps = await driver.queryAppState(BUNDLE_ID);
  if (runningApps !== 0) {
    await driver.terminateApp(BUNDLE_ID);
    await driver.activateApp(BUNDLE_ID);
  }
};

export default relaunchApp;
