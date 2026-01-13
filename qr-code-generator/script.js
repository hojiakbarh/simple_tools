const input = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");

let qrCanvas = null;

generateBtn.addEventListener("click", () => {
  const value = input.value.trim();
  qrBox.innerHTML = "";
  downloadBtn.disabled = true;

  if (!value) {
    qrBox.textContent = "Please enter text or URL";
    return;
  }

  new QRCode(qrBox, {
    text: value,
    width: 200,
    height: 200
  });

  setTimeout(() => {
    qrCanvas = qrBox.querySelector("canvas");
    if (qrCanvas) downloadBtn.disabled = false;
  }, 100);
});

downloadBtn.addEventListener("click", () => {
  if (!qrCanvas) return;

  const link = document.createElement("a");
  link.href = qrCanvas.toDataURL("image/png");
  link.download = "onhub-qr-code.png";
  link.click();
});
