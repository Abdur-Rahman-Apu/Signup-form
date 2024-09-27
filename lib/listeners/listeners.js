import { setListener } from "../../utils/DomOperations.js";
import {
  emailInput,
  generatePassBtn,
  goBackBtn,
  linkedinProfileInput,
  nameInput,
  passwordInput,
  passwordInputContainer,
  phoneInput,
  signupBtn,
} from "../element/element.js";
import handleGeneratePassword from "../handlers/handleGeneratePassword.js";
import handleGoBackBtn from "../handlers/handleGoBackBtn.js";
import handlePassword from "../handlers/handlePassword.js";
import handleRemoveErrMsg from "../handlers/handleRemoveErrMsg.js";
import handleSignUpBtn from "../handlers/handleSignUpBtn.js";

export default function listeners() {
  setListener(nameInput, "keyup", handleRemoveErrMsg);

  setListener(emailInput, "keyup", handleRemoveErrMsg);

  setListener(phoneInput, "keyup", handleRemoveErrMsg);

  setListener(linkedinProfileInput, "keyup", handleRemoveErrMsg);

  setListener(passwordInput, "keyup", handleRemoveErrMsg);
  setListener(passwordInputContainer, "click", handlePassword);
  setListener(passwordInputContainer, "keyup", handlePassword);
  setListener(generatePassBtn, "click", handleGeneratePassword);

  setListener(signupBtn, "click", handleSignUpBtn);
  setListener(goBackBtn, "click", handleGoBackBtn);
}
