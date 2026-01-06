const categoryEl = document.getElementById("category");
const fromUnitEl = document.getElementById("fromUnit");
const toUnitEl = document.getElementById("toUnit");
const inputValueEl = document.getElementById("inputValue");
const resultEl = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

const units = {
  length: ["meter", "kilometer", "mile"],
  weight: ["gram", "kilogram", "pound"],
  temperature: ["celsius", "fahrenheit"]
};

function populateUnits() {
  const category = categoryEl.value;
  fromUnitEl.innerHTML = "";
  toUnitEl.innerHTML = "";

  units[category].forEach(unit => {
    const option1 = document.createElement("option");
    option1.value = unit;
    option1.textContent = unit;
    fromUnitEl.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = unit;
    option2.textContent = unit;
    toUnitEl.appendChild(option2);
  });
}

function convert() {
  const value = parseFloat(inputValueEl.value);
  if (isNaN(value)) return;

  const from = fromUnitEl.value;
  const to = toUnitEl.value;
  const category = categoryEl.value;

  let result = value;

  if (category === "length") {
    const meters = from === "meter" ? value :
      from === "kilometer" ? value * 1000 :
      value * 1609.34;

    result = to === "meter" ? meters :
      to === "kilometer" ? meters / 1000 :
      meters / 1609.34;
  }

  if (category === "weight") {
    const grams = from === "gram" ? value :
      from === "kilogram" ? value * 1000 :
      value * 453.592;

    result = to === "gram" ? grams :
      to === "kilogram" ? grams / 1000 :
      grams / 453.592;
  }

  if (category === "temperature") {
    if (from === to) result = value;
    else if (from === "celsius")
      result = value * 9 / 5 + 32;
    else
      result = (value - 32) * 5 / 9;
  }

  resultEl.textContent = `Result: ${result.toFixed(2)}`;
}

categoryEl.addEventListener("change", populateUnits);
convertBtn.addEventListener("click", convert);

// INIT
populateUnits();
