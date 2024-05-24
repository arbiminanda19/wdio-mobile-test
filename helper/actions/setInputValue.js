import getSelector from "../getSelector";

const setInputValue = async (
  testID,
  value,
  { clearBeforeFill = true } = {}
) => {
  const element = $(getSelector(testID));
  if (clearBeforeFill) {
    await element.setValue(value);
  } else {
    await element.addValue(value);
  }
};

export default setInputValue;
