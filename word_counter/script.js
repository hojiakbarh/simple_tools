const textInput = document.getElementById("textInput");
const wordCountEl = document.getElementById("wordCount");
const charCountEl = document.getElementById("charCount");
const charNoSpaceEl = document.getElementById("charNoSpace");

function updateCounts() {
  const text = textInput.value;

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;

  wordCountEl.textContent = words;
  charCountEl.textContent = chars;
  charNoSpaceEl.textContent = charsNoSpace;
}

textInput.addEventListener("input", updateCounts);
updateCounts();
