const colorInput = document.getElementById("colorInput");
const hexValueEl = document.getElementById("hexValue");
const rgbValueEl = document.getElementById("rgbValue");

const rInput = document.getElementById("rInput");
const gInput = document.getElementById("gInput");
const bInput = document.getElementById("bInput");

function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  };
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map(v => v.toString(16).padStart(2, "0"))
      .join("")
  );
}

function updateFromHex(hex) {
  const { r, g, b } = hexToRgb(hex);
  hexValueEl.textContent = hex;
  rgbValueEl.textContent = `rgb(${r}, ${g}, ${b})`;
  rInput.value = r;
  gInput.value = g;
  bInput.value = b;
}

function updateFromRgb() {
  const r = parseInt(rInput.value);
  const g = parseInt(gInput.value);
  const b = parseInt(bInput.value);

  if ([r, g, b].some(v => isNaN(v) || v < 0 || v > 255)) return;

  const hex = rgbToHex(r, g, b);
  colorInput.value = hex;
  updateFromHex(hex);
}

colorInput.addEventListener("input", () => {
  updateFromHex(colorInput.value);
});

[rInput, gInput, bInput].forEach(input => {
  input.addEventListener("input", updateFromRgb);
});

// INIT
updateFromHex(colorInput.value);
