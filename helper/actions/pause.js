import {
  DEFAULT_WAIT,
  DEFAULT_SHORT_WAIT,
  DEFAULT_VERY_SHORT_WAIT,
  DEFAULT_LONG_WAIT,
  DEFAULT_VERY_LONG_WAIT,
  DEFAULT_SUPER_LONG_WAIT,
} from "../../constant/time.constant";

const pause = (duration = DEFAULT_WAIT) => {
  driver.pause(duration);
};

export const shortPause = () => pause(DEFAULT_SHORT_WAIT);
export const veryShortPause = () => pause(DEFAULT_VERY_SHORT_WAIT);
export const longPause = () => pause(DEFAULT_LONG_WAIT);
export const veryLongPause = () => pause(DEFAULT_VERY_LONG_WAIT);
export const superLongPause = () => pause(DEFAULT_SUPER_LONG_WAIT);

export default pause;
