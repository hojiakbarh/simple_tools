const input = document.getElementById("videoInput");
const btn = document.getElementById("getBtn");
const errorMsg = document.getElementById("errorMsg");
const thumbnails = document.getElementById("thumbnails");

function extractVideoId(value) {
  const reg =
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&?/]+)/;
  const match = value.match(reg);
  return match ? match[1] : value.length === 11 ? value : null;
}

btn.addEventListener("click", () => {
  const value = input.value.trim();
  const videoId = extractVideoId(value);

  if (!videoId) {
    errorMsg.style.display = "block";
    thumbnails.innerHTML = "";
    return;
  }

  errorMsg.style.display = "none";

  const sizes = [
    { label: "Max Resolution", file: "maxresdefault.jpg" },
    { label: "HD Quality", file: "hqdefault.jpg" },
    { label: "Medium Quality", file: "mqdefault.jpg" },
    { label: "Default", file: "default.jpg" }
  ];

  thumbnails.innerHTML = sizes.map(s => `
    <div class="thumb">
      <img src="https://img.youtube.com/vi/${videoId}/${s.file}" alt="${s.label}">
      <a href="https://img.youtube.com/vi/${videoId}/${s.file}" target="_blank">
        Download ${s.label}
      </a>
    </div>
  `).join("");
});
