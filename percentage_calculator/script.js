function calculate() {
  const percent = document.getElementById("percent").value;
  const number = document.getElementById("number").value;
  const result = document.getElementById("result");

  if (percent === "" || number === "") {
    result.textContent = "Please enter both values";
    return;
  }

  const value = (percent / 100) * number;
  result.textContent = `${percent}% of ${number} is ${value}`;
}
