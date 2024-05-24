const getSelector = (testID) => {
  if (testID.includes("//")) {
    return testID;
  } else {
    return `-ios class chain:${testID}`;
  }
};

export default getSelector;
