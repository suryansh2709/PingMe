export const userNameTest = userName => {
  let userNameRegex = /^([a-zA-Z]+$)/;
  return userNameRegex.test(userName);
};

export const firstNameTest = fName => {
  let firstNameRegex = /^([a-zA-Z]+$)/;
  return firstNameRegex.test(fName);
};
