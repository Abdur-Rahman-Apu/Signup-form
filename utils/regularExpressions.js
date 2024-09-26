const getSpecialCharacterRegex = () =>
  /[\!"#$%&'\(\)\*\+,-\/:;\<\>\?@`{}\|~\[\]^\.\\_]/;

const getRegex = (regex, modifier = "g") => {
  return new RegExp(regex, modifier);
};

const isDigitPresent = (str) => getRegex(/[0-9]/).test(str);

const isSpecialCharacterPresent = (str) =>
  getRegex(getSpecialCharacterRegex()).test(str);

const isLowercasePresent = (str) => getRegex(/[a-z]/).test(str);
const isUppercasePresent = (str) => getRegex(/[A-Z]/).test(str);

export {
  getRegex,
  isDigitPresent,
  isLowercasePresent,
  isSpecialCharacterPresent,
  isUppercasePresent,
};
