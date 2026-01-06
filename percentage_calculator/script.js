function calcPercentOf() {
  const p = parseFloat(document.getElementById("percent1").value);
  const n = parseFloat(document.getElementById("number1").value);

  if (isNaN(p) || isNaN(n)) return;
  const result = (p / 100) * n;
  document.getElementById("result1").textContent =
    `Result: ${result.toFixed(2)}`;
}

function calcWhatPercent() {
  const part = parseFloat(document.getElementById("part").value);
  const whole = parseFloat(document.getElementById("whole").value);

  if (isNaN(part) || isNaN(whole) || whole === 0) return;
  const result = (part / whole) * 100;
  document.getElementById("result2").textContent =
    `Result: ${result.toFixed(2)}%`;
}

function calcChange() {
  const oldVal = parseFloat(document.getElementById("oldValue").value);
  const newVal = parseFloat(document.getElementById("newValue").value);

  if (isNaN(oldVal) || isNaN(newVal) || oldVal === 0) return;
  const change = ((newVal - oldVal) / oldVal) * 100;
  const type = change >= 0 ? "Increase" : "Decrease";

  document.getElementById("result3").textContent =
    `Result: ${Math.abs(change).toFixed(2)}% ${type}`;
}
