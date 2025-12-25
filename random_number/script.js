const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

generateBtn.addEventListener("click", () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max)) {
    alert("Please enter valid numbers");
    return;
  }

  if (min > max) {
    alert("Min value must be less than or equal to Max value");
    return;
  }

  const randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

  result.textContent = randomNumber;
});
