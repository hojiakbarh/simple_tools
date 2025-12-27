const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const input = document.getElementById("text");
const qrBox = document.getElementById("qr");

let qrCanvas = null;

generateBtn.addEventListener("click", () => {
  const value = input.value.trim();
  qrBox.innerHTML = "";
  downloadBtn.disabled = true;
  qrCanvas = null;

  if (!value) {
    qrBox.textContent = "Enter text or URL";
    return;
  }

  new QRCode(qrBox, {
    text: value,
    width: 180,
    height: 180
  });

  // Canvas paydo bo‘lishini kutamiz
  setTimeout(() => {
    qrCanvas = qrBox.querySelector("canvas");
    if (qrCanvas) {
      downloadBtn.disabled = false;
    }
  }, 100);
});

downloadBtn.addEventListener("click", () => {
  if (!qrCanvas) return;

  const link = document.createElement("a");
  link.href = qrCanvas.toDataURL("image/png");
  link.download = "qr-code.png";
  link.click();
});
