import { passwordInput } from "../lib/element/element.js";

export default function togglePasswordInputType({ type }) {
  const type = passwordInput.type;

  console.log(type, "password type");
}
