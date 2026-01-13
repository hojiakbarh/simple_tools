const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const btn = document.getElementById("generateBtn");
const errorMsg = document.getElementById("errorMsg");
const result = document.getElementById("result");
const waLink = document.getElementById("waLink");

btn.addEventListener("click", () => {
  let phone = phoneInput.value.replace(/\D/g, "");
  const message = encodeURIComponent(messageInput.value.trim());

  if (!phone || phone.length < 8) {
    errorMsg.style.display = "block";
    result.style.display = "none";
    return;
  }

  errorMsg.style.display = "none";

  let url = `https://wa.me/${phone}`;
  if (message) {
    url += `?text=${message}`;
  }

  waLink.href = url;
  waLink.textContent = url;
  result.style.display = "block";
});
