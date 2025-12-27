const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const SYM = "!@#$%^&*()_+[]{}<>?";

lengthValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", () => {
  let chars = "";
  if (uppercase.checked) chars += UPPER;
  if (lowercase.checked) chars += LOWER;
  if (numbers.checked) chars += NUM;
  if (symbols.checked) chars += SYM;

  if (!chars) {
    passwordInput.value = "Select at least one option";
    return;
  }

  let password = "";
  for (let i = 0; i < lengthSlider.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordInput.value = password;
});

copyBtn.addEventListener("click", () => {
  if (!passwordInput.value) return;
  navigator.clipboard.writeText(passwordInput.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
});
