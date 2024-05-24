import getSelector from "../getSelector";
import { DEFAULT_WAIT } from "../../constant/time.constant";

const waitForDisplayed = async (
  testID,
  timeout = DEFAULT_WAIT,
  isReverse = false
) => {
  await $(getSelector(testID)).waitForDisplayed({
    timeout,
    reverse: isReverse,
  });
};

export default waitForDisplayed;
