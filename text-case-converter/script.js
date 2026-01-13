const textInput = document.getElementById("textInput");
const radios = document.querySelectorAll("input[name='case']");

function sentenceCase(text) {
  return text
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
}

function capitalizeWords(text) {
  return text
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

function convert() {
  const type = document.querySelector("input[name='case']:checked").value;
  let text = textInput.value;

  if (!text) return;

  switch (type) {
    case "upper":
      textInput.value = text.toUpperCase();
      break;
    case "lower":
      textInput.value = text.toLowerCase();
      break;
    case "sentence":
      textInput.value = sentenceCase(text);
      break;
    case "capitalize":
      textInput.value = capitalizeWords(text);
      break;
  }
}

radios.forEach(radio => {
  radio.addEventListener("change", convert);
});
