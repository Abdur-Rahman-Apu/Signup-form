import { generatePassword } from "../../utils/generatePassword.js";
import indicator from "../../utils/indicator.js";
import togglePasswordInputType from "../../utils/togglePasswordInputType.js";
import { passwordInput } from "../element/element.js";

export default function handleGeneratePassword() {
  console.log("generatePassBtn");

  const password = generatePassword();

  //   set value into the password input field
  passwordInput.value = password;

  // show indicator
  indicator();

  // toggle password box type
  togglePasswordInputType({ action: "generate" });

  // manually triggering keyup event
  const event = new Event("keyup", { bubbles: true });
  passwordInput.dispatchEvent(event);
}
