import indicator from "../../utils/indicator.js";
import togglePasswordInputType from "../../utils/togglePasswordInputType.js";

export default function handlePassword(e) {
  // handle click into the password show and hide icon
  if (e.type === "click" && e.target.tagName === "I") {
    togglePasswordInputType({ action: null });
  }

  //   handle typing into the password input field
  if (e.type === "keyup" && e.target.tagName === "INPUT") {
    const message = e.target.value;
    indicator(message.length);
  }
}
