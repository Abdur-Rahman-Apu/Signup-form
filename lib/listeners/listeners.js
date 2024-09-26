import { setListener } from "../../utils/DomOperations.js";
import { goBackBtn } from "../element/element.js";
import handleGoBackBtn from "../handlers/handleGoBackBtn.js";

export default function listeners() {
  setListener(goBackBtn, "click", handleGoBackBtn);
}
