import { setListener } from "../../utils/DomOperations.js";
import { generatePassBtn, goBackBtn } from "../element/element.js";
import handleGeneratePassword from "../handlers/handleGeneratePassword.js";
import handleGoBackBtn from "../handlers/handleGoBackBtn.js";

export default function listeners() {
  setListener(goBackBtn, "click", handleGoBackBtn);
  setListener(generatePassBtn, "click", handleGeneratePassword);
}
