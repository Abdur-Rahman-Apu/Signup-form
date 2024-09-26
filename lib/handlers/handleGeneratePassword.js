import { generatePassword } from "../../utils/generatePassword.js";
import indicator from "../../utils/indicator.js";
import { passwordInput } from "../element/element.js";

export default function handleGeneratePassword() {
  console.log("generatePassBtn");

  const password = generatePassword();

  //   set value into the password input field
  passwordInput.value = password;

  // show indicator
  indicator(password.length);

  // toggle password box type
}
