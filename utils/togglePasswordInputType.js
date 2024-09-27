import { passwordCloseIcon, passwordInput } from "../lib/element/element.js";
import { setStyle } from "./DomOperations.js";

export default function togglePasswordInputType({ action }) {
  const type = passwordInput.type;

  if (action === "generate" || type === "password") {
    passwordInput.type = "text";
    setStyle(passwordCloseIcon, { display: "block" });
  } else {
    passwordInput.type = "password";
    setStyle(passwordCloseIcon, { display: "none" });
  }
}
