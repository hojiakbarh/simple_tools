const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateBtn = document.getElementById("generateBtn");
const resultValue = document.getElementById("resultValue");
const errorMsg = document.getElementById("errorMsg");

generateBtn.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    errorMsg.classList.add("show");
    resultValue.textContent = "–";
    return;
  }

  errorMsg.classList.remove("show");

  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  resultValue.textContent = random;
});
