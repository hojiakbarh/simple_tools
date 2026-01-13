const apiKey = "affc2193dd481df69d61ffdb5697d711";

const cityInput = document.getElementById("city");
const btn = document.getElementById("getWeatherBtn");
const btnText = document.getElementById("btnText");
const loader = document.getElementById("loader");
const errorMsg = document.getElementById("errorMsg");

const currentWeather = document.getElementById("currentWeather");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const forecast = document.getElementById("forecast");

btn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none";
  btnText.style.display = "none";
  loader.style.display = "inline";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();

    if (data.cod !== "200") throw new Error();

    cityName.textContent = data.city.name;
    temp.textContent = `${Math.round(data.list[0].main.temp)}°C`;
    condition.textContent = data.list[0].weather[0].description;
    currentWeather.style.display = "block";

    forecast.innerHTML = "";
    for (let i = 0; i < data.list.length; i += 8) {
      const day = data.list[i];
      forecast.innerHTML += `
        <div>
          <strong>${day.dt_txt.split(" ")[0]}</strong><br>
          ${Math.round(day.main.temp)}°C<br>
          ${day.weather[0].main}
        </div>`;
    }

  } catch {
    errorMsg.style.display = "block";
  }

  btnText.style.display = "inline";
  loader.style.display = "none";
});
