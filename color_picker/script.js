const colorInput = document.getElementById("colorInput");
const hexValueEl = document.getElementById("hexValue");
const rgbValueEl = document.getElementById("rgbValue");

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

colorInput.addEventListener("input", () => {
  const hex = colorInput.value;
  hexValueEl.textContent = hex;
  rgbValueEl.textContent = hexToRgb(hex);
});
