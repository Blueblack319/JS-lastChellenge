const weather = document.querySelector(".js-weather");

let lat = null;
let lon = null;
const KEY_API = "f954913ec64ced8bc07a0c57caefae65";

function showWeather(temp, cityName) {
  weather.innerText = `${temp} ${cityName}`;
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API}&units=metric`
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (weatherInfo) {
      const temperature = weatherInfo.main["temp"];
      const cityName = weatherInfo.name;
      showWeather(temperature, cityName);
    });
}

function getPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  getWeather(lat, lon);
}

function init() {
  navigator.geolocation.getCurrentPosition(getPosition);
}

init();
