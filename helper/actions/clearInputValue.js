import getSelector from "../getSelector";

const clearInputValue = (testID) => {
  $(getSelector(testID)).clearValue();
};

export default clearInputValue;
