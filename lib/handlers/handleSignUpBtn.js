import { setStyle } from "../../utils/DomOperations.js";
import {
  isEmailValid,
  isLinkedInProfileUrlValid,
  isNameValid,
  isPasswordValid,
  isPhoneNumberValid,
} from "../../utils/regularExpressions.js";
import {
  emailInput,
  emailInputErrMsg,
  footerAfterSignupContainer,
  footerBeforeSignupContainer,
  linkedinProfileInput,
  linkedinProfileInputErr,
  nameInput,
  nameInputErrMsg,
  passwordInput,
  passwordInputErrMsg,
  phoneInput,
  phoneInputErrMsg,
  signUpForm,
  signUpSuccessContainer,
} from "../element/element.js";

// To show the input error message and focus the input element
const setInputErrorState = (inputElm, inputErrLabel, errMsg) => {
  inputElm.focus();
  inputErrLabel.textContent = errMsg;
  inputErrLabel.classList.remove("hide");
};

// To check input field is valid or invalid
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

  const isPasswordFieldValid = checkingField(
    password,
    passwordInput,
    passwordInputErrMsg,
    "Please enter valid password",
    isPasswordValid
  );

  const isProfileFieldValid = checkingField(
    linkedinProfile,
    linkedinProfileInput,
    linkedinProfileInputErr,
    "Please enter valid URL",
    isLinkedInProfileUrlValid
  );

  const isPhoneFieldValid = checkingField(
    phone,
    phoneInput,
    phoneInputErrMsg,
    "Please enter valid phone",
    isPhoneNumberValid
  );

  const isEmailFieldValid = checkingField(
    email,
    emailInput,
    emailInputErrMsg,
    "Please enter valid email",
    isEmailValid
  );

  const isNameFieldValid = checkingField(
    name,
    nameInput,
    nameInputErrMsg,
    "Please enter valid name",
    isNameValid
  );

  const condition =
    isNameFieldValid &&
    isEmailFieldValid &&
    isPhoneFieldValid &&
    isProfileFieldValid &&
    isPasswordFieldValid;

  if (condition) {
    // show success related elements
    setStyle(signUpSuccessContainer, { display: "flex" });
    setStyle(footerAfterSignupContainer, { display: "flex" });

    // hide form related elements
    setStyle(signUpForm, { display: "none" });
    setStyle(footerBeforeSignupContainer, { display: "none" });
  }
}
