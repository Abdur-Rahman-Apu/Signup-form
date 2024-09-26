import { getRandomValue } from "./getRandomValue.js";
import {
  isDigitPresent,
  isLowercasePresent,
  isSpecialCharacterPresent,
  isUppercasePresent,
} from "./regularExpressions.js";

const decideWhichPasswordRuleIsMissing = (inputValue) => {
  if (!isSpecialCharacterPresent(inputValue)) {
    console.log("Special missing");
    return { min: 33, max: 47 };
  }
  if (!isDigitPresent(inputValue)) {
    console.log("digit missing");
    return { min: 48, max: 57 };
  }
  if (!isUppercasePresent(inputValue)) {
    console.log("upper missing");
    return { min: 67, max: 90 };
  }
  if (!isLowercasePresent(inputValue)) {
    console.log("lower missing");
    return { min: 97, max: 122 };
  }
};

const generatePassword = () => {
  let password = "";

  for (let i = 0; i < 12; i++) {
    let min = 33;
    let max = 126;

    console.log(password, "before password", min, max, i);

    if (i % 2 !== 0) {
      const newAsciiRange = decideWhichPasswordRuleIsMissing(password);
      console.log(newAsciiRange, "receive new ascii");
      if (newAsciiRange) {
        min = newAsciiRange.min;
        max = newAsciiRange.max;
      }
    }
    console.log(min, max, i, "min max");

    password += String.fromCharCode(getRandomValue(min, max));

    console.log(password, "after password", min, max, i);
  }
  return password;
};

export { generatePassword };
