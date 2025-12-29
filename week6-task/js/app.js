import { fetchWeather } from "./api.js";
import { saveCity, getCity } from "./storage.js";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const weatherDiv = document.getElementById("weather");

button.addEventListener("click", async () => {
  const city = input.value;
  try {
    const data = await fetchWeather(city);
    saveCity(city);
    displayWeather(data);
  } catch (error) {
    weatherDiv.innerText = error.message;
  }
});

function displayWeather(data) {
  weatherDiv.innerHTML = `
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

const savedCity = getCity();
if (savedCity) {
  input.value = savedCity;
  button.click();
}
