import { selectElm } from "../../utils/DomOperations.js";

const signUpForm = selectElm(".signup-form");
const signUpSuccessContainer = selectElm(".signup-success");

const nameInput = selectElm("#name");
const nameInputErrMsg = selectElm(".name-input-err");

const emailInput = selectElm("#email");
const emailInputErrMsg = selectElm(".email-input-err");

const phoneInput = selectElm("#phone");
const phoneInputErrMsg = selectElm(".phone-input-err");

const linkedinProfileInput = selectElm("#profile");
const linkedinProfileInputErr = selectElm(".profile-input-err");

const passwordInputContainer = selectElm(".password-input-box");
const passwordInput = selectElm("#password");
const passwordOpenIcon = selectElm(".open");
const passwordCloseIcon = selectElm(".close");
const passwordInputErrMsg = selectElm(".password-input-err");
const generatePassBtn = selectElm(".generate-pass-btn");
const lowPassIndicatorElm = selectElm(".indicator-low");
const mediumPassIndicatorElm = selectElm(".indicator-medium");
const highPassIndicatorElm = selectElm(".indicator-high");
const indicatorTextElm = selectElm(".indicator-text");

const footerBeforeSignupContainer = selectElm(".before-signup");
const footerAfterSignupContainer = selectElm(".after-signup");
const signupBtn = selectElm(".signup-btn");
const goBackBtn = selectElm(".go-back-btn");

export {
  emailInput,
  emailInputErrMsg,
  footerAfterSignupContainer,
  footerBeforeSignupContainer,
  generatePassBtn,
  goBackBtn,
  highPassIndicatorElm,
  indicatorTextElm,
  linkedinProfileInput,
  linkedinProfileInputErr,
  lowPassIndicatorElm,
  mediumPassIndicatorElm,
  nameInput,
  nameInputErrMsg,
  passwordCloseIcon,
  passwordInput,
  passwordInputContainer,
  passwordInputErrMsg,
  passwordOpenIcon,
  phoneInput,
  phoneInputErrMsg,
  signupBtn,
  signUpForm,
  signUpSuccessContainer,
};
