const colorInput = document.getElementById("colorInput");
const preview = document.getElementById("preview");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyButtons = document.querySelectorAll(".copy-buttons button");

function hexToRgb(hex) {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function updateColor() {
  const hex = colorInput.value;
  const rgb = hexToRgb(hex);

  preview.style.background = hex;
  hexValue.value = hex.toUpperCase();
  rgbValue.value = rgb;
}

copyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.copy;
    const value = type === "hex" ? hexValue.value : rgbValue.value;
    navigator.clipboard.writeText(value);
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = type === "hex" ? "Copy HEX" : "Copy RGB";
    }, 1000);
  });
});

colorInput.addEventListener("input", updateColor);
updateColor();
