import getSelector from "../getSelector";
import { DEFAULT_WAIT } from "../../constant/time.constant";

const waitForExist = async (
  testID,
  timeout = DEFAULT_WAIT,
  isReverse = false
) => {
  await $(getSelector(testID)).waitForExist({ timeout, reverse: isReverse });
};

export default waitForExist;
