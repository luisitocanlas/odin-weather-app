export default class WeatherDisplay {
	constructor(container) {
		this.container = container;
	}

	render(weatherData) {
		const { location, current } = weatherData;

		this.container.innerHTML = `
      <h2>Weather in ${location.name}, ${location.region}, ${location.country}</h2>
      <p>${location.localtime}</p>
      <div class="weather-condition">
        <img src="${current.condition.icon}" alt="${current.condition.text}">
        <p>${current.condition.text}</p>
      </div>
      <p>Temperature: ${current.temp_c}°C (${current.temp_f}°F)</p>
      <p>Feels like: ${current.feelslike_c}°C (${current.feelslike_f}°F)</p>
      <p>Humidity: ${current.humidity}%</p>
      <p>Wind: ${current.wind_kph} kph (${current.wind_mph} mph) ${current.wind_dir}</p>
      <p>Precipitation: ${current.precip_mm} mm (${current.precip_in} in)</p>
    `;
	}
}
