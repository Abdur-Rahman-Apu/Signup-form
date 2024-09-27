import { getRandomValue } from "./getRandomValue.js";
import {
  isDigitPresent,
  isLowercasePresent,
  isSpecialCharacterPresent,
  isUppercasePresent,
} from "./regularExpressions.js";

// Check in the generated password, is there any password rule is missing? if missing, then return the range of the ascii value of that rule. For example, special character is missing, then the range of ascii value is 33-47 will be returned as an object like {min:33,max:47}
const decideWhichPasswordRuleIsMissing = (inputValue) => {
  if (!isSpecialCharacterPresent(inputValue)) {
    return { min: 33, max: 47 };
  }
  if (!isDigitPresent(inputValue)) {
    return { min: 48, max: 57 };
  }
  if (!isUppercasePresent(inputValue)) {
    return { min: 67, max: 90 };
  }
  if (!isLowercasePresent(inputValue)) {
    return { min: 97, max: 122 };
  }
};

const generatePassword = () => {
  let password = "";

  for (let i = 0; i < 12; i++) {
    let min = 33;
    let max = 126;

    if (i % 2 !== 0) {
      const newAsciiRange = decideWhichPasswordRuleIsMissing(password);

      // if new ascii range found then update the min and max value
      if (newAsciiRange) {
        min = newAsciiRange.min;
        max = newAsciiRange.max;
      }
    }

    // generate password randomly and transformed the numeric value of ascii code into ascii character
    password += String.fromCharCode(getRandomValue(min, max));
  }

  return password;
};

export { generatePassword };
