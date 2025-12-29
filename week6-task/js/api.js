export async function fetchWeather(city) {
  const API_KEY = "32d1ead0ca5d631d45f8282d96048987";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response.json();
}
