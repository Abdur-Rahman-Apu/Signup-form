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

const isNameValid = (str) => getRegex(/^[a-zA-Z ]+$/).test(str);

const isEmailValid = (str) => getRegex(/^[a-z]+@[a-z\.]+\.[a-z]+$/).test(str);

const isPhoneNumberValid = (str) =>
  getRegex(/^\+?(88)?(01)[3-9]\d{8}$/).test(str);

const isLinkedInProfileUrlValid = (str) =>
  getRegex(/^https:\/\/www\.linkedin\.com\/in\/[a-z\-]+\/$/).test(str);

const isPasswordValid = (str) =>
  getRegex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\!"#$%&'\(\)\*\+,-\/:;\<\>\?@`{}\|~\[\]^\.\\_]).{8,}$/
  ).test(str);

export {
  getRegex,
  isDigitPresent,
  isEmailValid,
  isLinkedInProfileUrlValid,
  isLowercasePresent,
  isNameValid,
  isPasswordValid,
  isPhoneNumberValid,
  isSpecialCharacterPresent,
  isUppercasePresent,
};
