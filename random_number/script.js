const minInput = document.getElementById("minValue");
const maxInput = document.getElementById("maxValue");
const generateBtn = document.getElementById("generateBtn");
const resultEl = document.getElementById("resultValue");

generateBtn.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max) || min > max) {
    resultEl.textContent = "–";
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  resultEl.textContent = randomNumber;
});
