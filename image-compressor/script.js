const fileInput = document.getElementById("fileInput");
const quality = document.getElementById("quality");
const qualityValue = document.getElementById("qualityValue");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const btn = document.getElementById("processBtn");
const errorMsg = document.getElementById("errorMsg");
const result = document.getElementById("result");
const preview = document.getElementById("preview");
const sizeInfo = document.getElementById("sizeInfo");
const downloadBtn = document.getElementById("downloadBtn");

quality.addEventListener("input", () => {
  qualityValue.textContent = quality.value + "%";
});

btn.addEventListener("click", () => {
  const file = fileInput.files[0];
  if (!file || !file.type.startsWith("image/")) {
    errorMsg.style.display = "block";
    result.style.display = "none";
    return;
  }

  errorMsg.style.display = "none";

  const img = new Image();
  img.onload = () => {
    let w = img.width;
    let h = img.height;

    const newW = parseInt(widthInput.value);
    const newH = parseInt(heightInput.value);

    if (newW && !newH) {
      w = newW;
      h = Math.round(img.height * (newW / img.width));
    }
    if (newH && !newW) {
      h = newH;
      w = Math.round(img.width * (newH / img.height));
    }
    if (newW && newH) {
      w = newW;
      h = newH;
    }

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, w, h);

    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob);
      preview.src = url;
      downloadBtn.href = url;
      downloadBtn.download = "onhub-image.jpg";
      sizeInfo.textContent =
        `Original: ${(file.size / 1024).toFixed(1)} KB · New: ${(blob.size / 1024).toFixed(1)} KB`;
      result.style.display = "block";
    }, "image/jpeg", quality.value / 100);
  };

  img.src = URL.createObjectURL(file);
});
