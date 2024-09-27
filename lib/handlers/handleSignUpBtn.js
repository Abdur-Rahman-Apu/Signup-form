import {
  emailInput,
  linkedinProfileInput,
  nameInput,
  nameInputErrMsg,
  passwordInput,
  phoneInput,
} from "../element/element.js";

export default function handleSignUpBtn() {
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const linkedinProfile = linkedinProfileInput.value;
  const password = passwordInput.value;

  if (name) {
  } else {
    nameInput.focus();
    nameInputErrMsg.textContent = "Please fill the field";
    nameInputErrMsg.classList.remove("hide");
  }
}
