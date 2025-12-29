export function saveCity(city) {
  localStorage.setItem("city", city);
}

export function getCity() {
  return localStorage.getItem("city");
}
