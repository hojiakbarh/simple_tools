function update() {
  const p1 = parseFloat(document.getElementById("p1").value);
  const n1 = parseFloat(document.getElementById("n1").value);
  document.getElementById("r1").textContent =
    (!isNaN(p1) && !isNaN(n1)) ? ((p1 * n1) / 100).toFixed(2) : "–";

  const x2 = parseFloat(document.getElementById("x2").value);
  const y2 = parseFloat(document.getElementById("y2").value);
  document.getElementById("r2").textContent =
    (!isNaN(x2) && !isNaN(y2) && y2 !== 0) ? ((x2 / y2) * 100).toFixed(2) + "%" : "–";

  const oldVal = parseFloat(document.getElementById("oldVal").value);
  const newVal = parseFloat(document.getElementById("newVal").value);
  document.getElementById("r3").textContent =
    (!isNaN(oldVal) && !isNaN(newVal) && oldVal !== 0)
      ? (((newVal - oldVal) / oldVal) * 100).toFixed(2) + "%"
      : "–";
}

document.querySelectorAll("input").forEach(i =>
  i.addEventListener("input", update)
);
