const birthInput = document.getElementById("birthdate");
const btn = document.getElementById("calcBtn");
const errorMsg = document.getElementById("errorMsg");
const result = document.getElementById("result");
const ageText = document.getElementById("ageText");

btn.addEventListener("click", () => {
  const birthValue = birthInput.value;
  if (!birthValue) {
    errorMsg.style.display = "block";
    result.style.display = "none";
    return;
  }

  errorMsg.style.display = "none";

  const birthDate = new Date(birthValue);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  ageText.textContent = `You are ${years} years, ${months} months and ${days} days old.`;
  result.style.display = "block";
});
