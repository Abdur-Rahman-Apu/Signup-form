import { selectElm } from "../../utils/DomOperations.js";

const signUpForm = selectElm(".signup-form");
const nameInput = selectElm("#name");
const nameInputErrMsg = selectElm(".name-input-err");
const emailInput = selectElm("#email");
const emailInputErrMsg = selectElm(".email-input-err");
const phoneInput = selectElm("#phone");
const phoneInputErrMsg = selectElm(".phone-input-err");
const passwordInput = selectElm("#password");
const passwordInputErrMsg = selectElm(".password-input-err");
const generatePassBtn = selectElm(".generate-pass-btn");
const lowPassIndicatorElm = selectElm(".indicator-low");
const mediumPassIndicatorElm = selectElm(".indicator-medium");
const highPassIndicatorElm = selectElm(".indicator-high");
const indicatorTextElm = selectElm(".indicator-text");
const signupBtn = selectElm(".signup-btn");
const goBackBtn = selectElm("..go-back-btn");
