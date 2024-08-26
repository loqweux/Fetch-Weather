import { renderCurrent, renderForecast } from "./functions.js";

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric"
)
  .then((response) => response.json())
  .then((data) => {
    renderCurrent(data);
    renderForecast(data);
  });
