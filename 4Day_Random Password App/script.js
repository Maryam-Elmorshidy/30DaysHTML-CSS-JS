const passwordBox = document.getElementById("password");
// console.log(passwordBox);
const generatorButton = document.querySelector(".generator");
const copyButton = document.querySelector(".copy");

const lengthValue = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&()*+,-./:;<=>?@[]^_{|}~";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password +=
    upperCase[
      Math.floor(Math.random() * upperCase.length)
    ]; /** 0 ≤ Math.random() < 1 */
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lengthValue > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

const copyPassword = () => {
  // passwordBox.select();
  // document.execCommand("copy");  // as it is old

  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => alert("Copied!"))
    .catch((err) => console.error("Failed to copy", err));
};

generatorButton.addEventListener("click", () => {
  passwordBox.value = "";
  createPassword();
});
copyButton.addEventListener("click", copyPassword);
