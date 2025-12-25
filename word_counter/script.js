const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const sentenceCount = document.getElementById("sentenceCount");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();

  // Characters
  charCount.textContent = text.length;

  // Words
  const words = text.length === 0 ? 0 : text.split(/\s+/).length;
  wordCount.textContent = words;

  // Sentences
  const sentences = text.length === 0
    ? 0
    : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  sentenceCount.textContent = sentences;
});
