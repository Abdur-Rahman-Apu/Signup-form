import { setListener } from "../../utils/DomOperations.js";
import {
  generatePassBtn,
  goBackBtn,
  input,
  passwordInputContainer,
  signupBtn,
} from "../element/element.js";
import handleGeneratePassword from "../handlers/handleGeneratePassword.js";
import handleGoBackBtn from "../handlers/handleGoBackBtn.js";
import handlePassword from "../handlers/handlePassword.js";
import handleRemoveErrMsg from "../handlers/handleRemoveErrMsg.js";
import handleSignUpBtn from "../handlers/handleSignUpBtn.js";

export default function listeners() {
  setListener(input, "keyup", handleRemoveErrMsg);
  setListener(passwordInputContainer, "click", handlePassword);
  setListener(passwordInputContainer, "keyup", handlePassword);
  setListener(generatePassBtn, "click", handleGeneratePassword);
  setListener(signupBtn, "click", handleSignUpBtn);
  setListener(goBackBtn, "click", handleGoBackBtn);
}
