const textInput = document.getElementById("textInput");
const buttons = document.querySelectorAll(".buttons button");

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

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
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
  });
});
