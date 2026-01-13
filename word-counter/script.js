const textInput = document.getElementById("textInput");

const wordCountEl = document.getElementById("wordCount");
const charCountEl = document.getElementById("charCount");
const charNoSpaceEl = document.getElementById("charNoSpace");
const sentenceCountEl = document.getElementById("sentenceCount");
const lineCountEl = document.getElementById("lineCount");

function updateStats() {
  const text = textInput.value;

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;

  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length
    : 0;

  const lines = text.length
    ? text.split(/\n/).length
    : 0;

  wordCountEl.textContent = words;
  charCountEl.textContent = chars;
  charNoSpaceEl.textContent = charsNoSpace;
  sentenceCountEl.textContent = sentences;
  lineCountEl.textContent = lines;
}

textInput.addEventListener("input", updateStats);
updateStats();
