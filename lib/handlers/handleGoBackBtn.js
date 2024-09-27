import { setStyle } from "../../utils/DomOperations.js";
import {
  footerAfterSignupContainer,
  footerBeforeSignupContainer,
  signUpForm,
  signUpSuccessContainer,
} from "../element/element.js";

export default function handleGoBackBtn() {
  // hide success related elements
  setStyle(signUpSuccessContainer, { display: "none" });
  setStyle(footerAfterSignupContainer, { display: "none" });

  // show form related elements
  setStyle(signUpForm, { display: "grid" });
  setStyle(footerBeforeSignupContainer, { display: "flex" });

  // reset input field value
  document.querySelectorAll("input").forEach((elm) => {
    elm.value = "";
  });
}
