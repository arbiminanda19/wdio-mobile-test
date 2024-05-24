import { waitForDisplayed } from "../waits";

const expectDisplayed = (testID, timeout) => {
  waitForDisplayed(testID, timeout);
};

export default expectDisplayed;
