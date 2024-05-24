import {
  click,
  pause,
  gestures,
  shortPause,
  isDisplayed,
  veryShortPause,
  waitForDisplayed,
  relaunchApp,
} from "../helper";

export default class BaseController {
  swipeToBottomPage() {
    pause();
    gestures.swipeUp(0.9);
  }

  swipeDown(percentage = 0.5) {
    veryShortPause();
    gestures.swipeDown(percentage);
  }

  swipeUp(percentage = 0.5) {
    veryShortPause();
    gestures.swipeUp(percentage);
  }

  swipeLeft(percentage = 0.5) {
    shortPause();
    gestures.swipeLeft(percentage);
  }

  expectGreaterThan(firstValue, secondValue) {
    expect(firstValue).toBeGreaterThan(secondValue);
  }

  runAppInBackground(seconds) {
    driver.background(seconds);
  }

  resetApp() {
    relaunchApp();
  }

  retryElementClicks(selectedElement, elementAssertion) {
    waitForDisplayed(selectedElement);
    let i = 0;
    while (i < 5) {
      click(selectedElement);
      if (isDisplayed(elementAssertion)) {
        i = 5;
        console.log("No Retry");
      } else {
        i++;
        console.log("Try to get element: " + i);
      }
    }
    waitForDisplayed(elementAssertion);
  }

  swipeDownToRefresh() {
    gestures.swipeDown();
    shortPause();
  }
}
