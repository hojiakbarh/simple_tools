const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const btn = document.getElementById("calculateBtn");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const errorMsg = document.getElementById("errorMsg");
const resultCard = document.getElementById("resultCard");

btn.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if (!weight || !heightCm) {
    errorMsg.style.display = "block";
    resultCard.style.display = "none";
    return;
  }

  errorMsg.style.display = "none";

  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  bmiValue.textContent = bmi;

  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#60a5fa";
  } else if (bmi < 25) {
    category = "Normal weight";
    color = "#22c55e";
  } else if (bmi < 30) {
    category = "Overweight";
    color = "#facc15";
  } else {
    category = "Obesity";
    color = "#ef4444";
  }

  bmiCategory.textContent = category;
  bmiValue.style.color = color;

  resultCard.style.display = "block";
});
