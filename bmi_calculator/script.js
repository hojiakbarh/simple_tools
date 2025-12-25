const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const calcBtn = document.getElementById("calcBtn");
const bmiValue = document.getElementById("bmiValue");
const bmiStatus = document.getElementById("bmiStatus");

calcBtn.addEventListener("click", () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight");
    return;
  }

  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);
  const roundedBMI = bmi.toFixed(1);

  bmiValue.textContent = roundedBMI;

  let status = "";
  let color = "";

  if (bmi < 18.5) {
    status = "Underweight";
    color = "#f59e0b";
  } else if (bmi < 25) {
    status = "Normal weight";
    color = "#16a34a";
  } else if (bmi < 30) {
    status = "Overweight";
    color = "#f97316";
  } else {
    status = "Obese";
    color = "#dc2626";
  }

  bmiStatus.textContent = status;
  bmiStatus.style.color = color;
  bmiValue.style.color = color;
});
