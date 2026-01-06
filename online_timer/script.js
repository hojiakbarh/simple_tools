const minutesInput = document.getElementById("minutesInput");
const setBtn = document.getElementById("setBtn");

const display = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const presetButtons = document.querySelectorAll(".presets button");

let totalSeconds = 0;
let timerInterval = null;

function updateDisplay() {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  display.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval || totalSeconds <= 0) return;

  timerInterval = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time is up!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 0;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

presetButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    totalSeconds = parseInt(btn.dataset.minutes) * 60;
    updateDisplay();
    clearInterval(timerInterval);
    timerInterval = null;
  });
});

setBtn.addEventListener("click", () => {
  const minutes = parseInt(minutesInput.value);
  if (isNaN(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes");
    return;
  }
  totalSeconds = minutes * 60;
  updateDisplay();
  clearInterval(timerInterval);
  timerInterval = null;
});

updateDisplay();
