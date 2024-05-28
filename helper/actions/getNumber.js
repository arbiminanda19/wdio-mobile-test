import { isIOS } from "../checks";
import getSelector from "../getSelector";

const getNumber = async (testID) => {
  const element = await $(getSelector(testID));
  let text;
  if (isIOS()) {
    text = await element.getAttribute("label");
  } else {
    text = await element.getText();
  }
  return Number(text.replace(/\D/g, ""));
};

export default getNumber;
