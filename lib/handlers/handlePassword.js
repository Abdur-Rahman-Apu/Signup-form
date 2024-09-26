import togglePasswordInputType from "../../utils/togglePasswordInputType.js";

export default function handlePassword(e) {
  console.log(e.target, e.target.tagName, "target");
  console.log(e.currentTarget, "current target");

  // handle click into the password show and hide icon
  if (e.type === "click" && e.target.tagName === "I") {
    const isOpen = e.target.classList.contains("open");

    togglePasswordInputType({ action: null });
  }

  //   handle typing into the password input field
  if (e.type === "keyup" && e.target.tagName === "INPUT") {
  }
}
