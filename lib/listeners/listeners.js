import { setListener } from "../../utils/DomOperations.js";
import {
  generatePassBtn,
  goBackBtn,
  passwordInputContainer,
} from "../element/element.js";
import handleGeneratePassword from "../handlers/handleGeneratePassword.js";
import handleGoBackBtn from "../handlers/handleGoBackBtn.js";
import handlePassword from "../handlers/handlePassword.js";

export default function listeners() {
  setListener(passwordInputContainer, "click", handlePassword);
  setListener(passwordInputContainer, "keyup", handlePassword);
  setListener(generatePassBtn, "click", handleGeneratePassword);
  setListener(goBackBtn, "click", handleGoBackBtn);
}
