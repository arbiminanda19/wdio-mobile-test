import { Gestures } from "../gestures";
import getSelector from "../getSelector";
import pause from "./pause";

const scrollDownTo = async (testID, pauseTimeout) => {
  let maxRetry = 10;
  const destElement = await $(getSelector(testID));

  if (pauseTimeout) await pause(pauseTimeout);

  while (!(await destElement.isDisplayed()) && maxRetry > 0) {
    await Gestures.swipeUp(0.5);
    maxRetry--;
  }

  if (!(await destElement.isDisplayed())) {
    throw new Error(`Element ${testID} is not displayed after scrolling`);
  }
};

export default scrollDownTo;
