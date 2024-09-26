import { getRandomValue } from "./getRandomValue.js";

const generatePassword = () => {
  let password = "";

  for (let i = 0; i < 12; i++) {
    password += getRandomValue(33, 126);
  }
  return password;
};

export { generatePassword };
