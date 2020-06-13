const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const KEY_API = "f954913ec64ced8bc07a0c57caefae65";

function showWeather(temp, cityName) {
  weather.innerText = `${temp} ${cityName}`;
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (weatherInfo) {
      const temperature = weatherInfo.main.temp;
      const cityName = weatherInfo.name;
      showWeather(temperature, cityName);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const coordsObj = {
    lat,
    lon,
  };
  saveCoords(coordsObj);
  getWeather(lat, lon);
}

function handleGeoFail() {
  console.log("Can't get location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadCoords() {
  let coordsObj = localStorage.getItem(COORDS);
  if (coordsObj === null) {
    askForCoords();
  } else {
    coordsObj = JSON.parse(coordsObj);
    const lat = coordsObj.lat;
    const lon = coordsObj.lon;
    getWeather(lat, lon);
  }
}

function init() {
  loadCoords();
}

init();
