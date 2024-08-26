import { current, forecast } from "./vars.js";

export const renderCurrent = (data) => {
  const { name } = data.city;
  const currentWeather = data.list[0];
  const date = new Date().toLocaleString();
  const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
  const template = `
      <div>
        <p>${name}</p>
        <p>${date}</p>
      </div>
      <div>
        <img src="${iconUrl}" alt="${currentWeather.weather[0].description}" />
        <p>${currentWeather.weather[0].description}</p>
        <p>${Math.round(currentWeather.main.temp)}°C</p>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>`;
  current.innerHTML = template;
};

export const renderForecast = (data) => {
  for (let i = 0; i < data.list.length; i += 8) {
    const forecastItem = data.list[i];
    const date = new Date(forecastItem.dt * 1000).toLocaleDateString();
    const iconUrl = `https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`;
    const template = `
      <div class="forecast-item">
        <p>${date}</p>
        <img src="${iconUrl}" alt="${forecastItem.weather[0].description}" />
        <p>${Math.round(forecastItem.main.temp)}°C</p>
      </div>`;
    forecast.innerHTML += template;
  }
};
