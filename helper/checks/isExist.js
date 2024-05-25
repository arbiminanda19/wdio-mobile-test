import { waitForExist } from "../waits";

const isExist = async (testID, timeout) => {
  try {
    await waitForExist(testID, timeout);
    return true;
  } catch (error) {
    const { message } = error;
    const errorMatcher = "still not existing";

    if (message.includes(errorMatcher)) {
      return false;
    } else {
      throw error;
    }
  }
};

export default isExist;
