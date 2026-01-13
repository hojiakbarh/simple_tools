const minutesInput = document.getElementById("minutesInput");
const setBtn = document.getElementById("setBtn");
const display = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const presetButtons = document.querySelectorAll(".presets button");
const errorEl = document.getElementById("inputError");

let totalSeconds = 0;
let timer = null;

function updateDisplay() {
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  display.textContent = `${m}:${s}`;
}

function startTimer() {
  if (timer || totalSeconds <= 0) return;

  timer = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(timer);
      timer = null;
      alert("Time is up!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  totalSeconds = 0;
  updateDisplay();
}

setBtn.addEventListener("click", () => {
  const minutes = parseInt(minutesInput.value, 10);
  if (!minutes || minutes <= 0) {
    errorEl.classList.add("show");
    return;
  }
  errorEl.classList.remove("show");
  totalSeconds = minutes * 60;
  updateDisplay();
  clearInterval(timer);
  timer = null;
});

presetButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    totalSeconds = parseInt(btn.dataset.minutes, 10) * 60;
    updateDisplay();
    clearInterval(timer);
    timer = null;
  });
});

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
