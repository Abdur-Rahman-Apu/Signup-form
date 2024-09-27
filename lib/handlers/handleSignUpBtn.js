import {
  isEmailValid,
  isLinkedInProfileUrlValid,
  isNameValid,
  isPhoneNumberValid,
} from "../../utils/regularExpressions.js";
import {
  emailInput,
  emailInputErrMsg,
  linkedinProfileInput,
  linkedinProfileInputErr,
  nameInput,
  nameInputErrMsg,
  passwordInput,
  passwordInputErrMsg,
  phoneInput,
  phoneInputErrMsg,
} from "../element/element.js";

const setInputErrorState = (inputElm, inputErrLabel, errMsg) => {
  inputElm.focus();
  inputErrLabel.textContent = errMsg;
  inputErrLabel.classList.remove("hide");
};

const checkingField = (
  value,
  input,
  inputErrLabel,
  errMsg,
  validationCheck
) => {
  if (value && validationCheck(value)) {
    return true;
  } else {
    setInputErrorState(input, inputErrLabel, errMsg);
    return false;
  }
};

export default function handleSignUpBtn() {
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const linkedinProfile = linkedinProfileInput.value;
  const password = passwordInput.value;

  const isNameFieldValid = checkingField(
    name,
    nameInput,
    nameInputErrMsg,
    "Please enter valid name",
    isNameValid
  );
  const isEmailFieldValid = checkingField(
    email,
    emailInput,
    emailInputErrMsg,
    "Please enter valid email",
    isEmailValid
  );
  const isPhoneFieldValid = checkingField(
    phone,
    phoneInput,
    phoneInputErrMsg,
    "Please enter valid phone",
    isPhoneNumberValid
  );
  const isProfileFieldValid = checkingField(
    linkedinProfile,
    linkedinProfileInput,
    linkedinProfileInputErr,
    "Please enter valid URL",
    isLinkedInProfileUrlValid
  );
  const isPasswordFieldValid = checkingField(
    password,
    passwordInput,
    passwordInputErrMsg,
    "Please enter valid password",
    isPasswordFieldValid
  );
}
