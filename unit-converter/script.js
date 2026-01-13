const category = document.getElementById("category");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");

const units = {
  length: {
    meter: 1,
    kilometer: 1000,
    mile: 1609.34
  },
  weight: {
    gram: 1,
    kilogram: 1000,
    pound: 453.592
  },
  temperature: ["celsius", "fahrenheit"]
};

function populateUnits() {
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  if (category.value === "temperature") {
    ["celsius", "fahrenheit"].forEach(u => {
      fromUnit.add(new Option(u, u));
      toUnit.add(new Option(u, u));
    });
  } else {
    Object.keys(units[category.value]).forEach(u => {
      fromUnit.add(new Option(u, u));
      toUnit.add(new Option(u, u));
    });
  }

  convert();
}

function convert() {
  const val = parseFloat(inputValue.value);
  if (isNaN(val)) {
    outputValue.value = "";
    return;
  }

  let result = val;

  if (category.value === "temperature") {
    if (fromUnit.value !== toUnit.value) {
      result =
        fromUnit.value === "celsius"
          ? val * 9 / 5 + 32
          : (val - 32) * 5 / 9;
    }
  } else {
    const base = val * units[category.value][fromUnit.value];
    result = base / units[category.value][toUnit.value];
  }

  outputValue.value = result.toFixed(2);
}

category.addEventListener("change", populateUnits);
[inputValue, fromUnit, toUnit].forEach(el =>
  el.addEventListener("input", convert)
);

populateUnits();
