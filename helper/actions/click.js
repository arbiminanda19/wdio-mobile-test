import getSelector from "../getSelector";
import { waitForDisplayed } from "../waits";

const click = async (testID, timeout) => {
  if (timeout) await waitForDisplayed(testID, timeout);
  await $(getSelector(testID)).click();
};

export default click;
