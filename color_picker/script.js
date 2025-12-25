const colorInput = document.getElementById("colorInput");
const preview = document.getElementById("preview");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyButtons = document.querySelectorAll("button[data-copy]");

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function updateColor() {
  const hex = colorInput.value;
  const rgb = hexToRgb(hex);

  preview.style.background = hex;
  hexValue.value = hex;
  rgbValue.value = rgb;
}

colorInput.addEventListener("input", updateColor);

copyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.copy;
    const text = type === "hex" ? hexValue.value : rgbValue.value;

    navigator.clipboard.writeText(text);
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = "Copy"), 1000);
  });
});

updateColor();
