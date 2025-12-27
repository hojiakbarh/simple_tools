const units = {
  length: ["cm", "m", "km"],
  weight: ["g", "kg"],
  temperature: ["C", "F"]
};

function updateUnits() {
  const type = document.getElementById("type").value;
  const from = document.getElementById("from");
  const to = document.getElementById("to");

  from.innerHTML = "";
  to.innerHTML = "";

  units[type].forEach(u => {
    from.add(new Option(u, u));
    to.add(new Option(u, u));
  });
}

function convert() {
  const type = document.getElementById("type").value;
  const value = parseFloat(document.getElementById("value").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = document.getElementById("result");

  if (isNaN(value)) {
    result.textContent = "Please enter a value";
    return;
  }

  let output = value;

  if (type === "length") {
    if (from === "cm") output = value / 100;
    if (from === "km") output = value * 1000;
    if (to === "cm") output = output * 100;
    if (to === "km") output = output / 1000;
  }

  if (type === "weight") {
    if (from === "g") output = value / 1000;
    if (to === "g") output = output * 1000;
  }

  if (type === "temperature") {
    if (from === "C" && to === "F") output = value * 9/5 + 32;
    if (from === "F" && to === "C") output = (value - 32) * 5/9;
  }

  result.textContent = `${value} ${from} = ${output.toFixed(2)} ${to}`;
}

updateUnits();
