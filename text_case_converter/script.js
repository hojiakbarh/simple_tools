const textarea = document.getElementById("text");
const result = document.getElementById("result");

function toUpper() {
  textarea.value = textarea.value.toUpperCase();
  result.textContent = "Converted to UPPERCASE";
}

function toLower() {
  textarea.value = textarea.value.toLowerCase();
  result.textContent = "Converted to lowercase";
}

function toSentence() {
  let text = textarea.value.toLowerCase();
  textarea.value = text.replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
  result.textContent = "Converted to Sentence case";
}

function toCapitalize() {
  textarea.value = textarea.value
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
  result.textContent = "Capitalized each word";
}
