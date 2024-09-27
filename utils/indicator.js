import {
  highPassIndicatorElm,
  indicatorTextElm,
  lowPassIndicatorElm,
  mediumPassIndicatorElm,
  passwordInput,
} from "../lib/element/element.js";
import { setStyle, setText } from "./DomOperations.js";
import {
  isDigitPresent,
  isLowercasePresent,
  isSpecialCharacterPresent,
  isUppercasePresent,
} from "./regularExpressions.js";

// we have 4 rule: minimum 1 uppercase, 1 lowercase, 1 digit and 1 special character. The below function will check, how many rules are remaining
const remainingPasswordRule = () => {
  const passwordValue = passwordInput.value;
  let remainingRule = 4;

  if (isDigitPresent(passwordValue)) {
    remainingRule--;
  }

  if (isSpecialCharacterPresent(passwordValue)) {
    remainingRule--;
  }

  if (isLowercasePresent(passwordValue)) {
    remainingRule--;
  }

  if (isUppercasePresent(passwordValue)) {
    remainingRule--;
  }

  return remainingRule;
};

// show indicator of the password strength
const updateIndicatorInTheUI = (type) => {
  switch (type) {
    case "low":
      setStyle(lowPassIndicatorElm, { visibility: "visible" });
      setStyle(mediumPassIndicatorElm, { visibility: "hidden" });
      setStyle(highPassIndicatorElm, { visibility: "hidden" });
      setStyle(indicatorTextElm, { visibility: "visible" });
      setText(indicatorTextElm, "Low");
      break;

    case "medium":
      setStyle(lowPassIndicatorElm, { visibility: "visible " });
      setStyle(mediumPassIndicatorElm, { visibility: "visible" });
      setStyle(highPassIndicatorElm, { visibility: "hidden" });
      setStyle(indicatorTextElm, { visibility: "visible" });
      setText(indicatorTextElm, "Medium");
      break;

    case "high":
      setStyle(lowPassIndicatorElm, { visibility: "visible" });
      setStyle(mediumPassIndicatorElm, { visibility: "visible" });
      setStyle(highPassIndicatorElm, { visibility: "visible" });
      setStyle(indicatorTextElm, { visibility: "visible" });
      setText(indicatorTextElm, "Strong");
      break;

    default:
      setStyle(highPassIndicatorElm, { visibility: "hidden" });
      setStyle(mediumPassIndicatorElm, { visibility: "hidden" });
      setStyle(lowPassIndicatorElm, { visibility: "hidden" });
      setStyle(indicatorTextElm, { visibility: "hidden" });
      setStyle(indicatorTextElm, { visibility: "hidden" });
      break;
  }
};

export default function indicator() {
  const password = passwordInput.value;
  const passwordLength = password.length;

  const passwordRuleRemaining = remainingPasswordRule();

  if (!passwordLength) {
    // empty field
    updateIndicatorInTheUI(null);
  } else if (passwordLength < 4) {
    // low indicator
    updateIndicatorInTheUI("low");
  } else if (passwordLength < 8 || passwordRuleRemaining >= 1) {
    // medium indicator
    updateIndicatorInTheUI("medium");
  } else if (passwordLength > 7 || passwordRuleRemaining === 0) {
    //high indicator
    updateIndicatorInTheUI("high");
  }
}
