import getSelector from "../getSelector";

const getNumber = async (testID) => {
  const element = await $(getSelector(testID));
  const text = await element.getText();
  return Number(text.replace(/\D/g, ""));
};

export default getNumber;
