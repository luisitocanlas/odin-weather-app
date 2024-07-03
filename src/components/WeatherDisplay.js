export default class WeatherDisplay {
	constructor(container, loadingElement) {
		this.container = container;
		this.loadingElement = loadingElement;
	}

	showLoading() {
		this.loadingElement.style.display = 'block';
	}

	hideLoading() {
		this.loadingElement.style.display = 'none';
	}

	clear() {
		this.container.innerHTML = '';
	}

	render(weatherData) {
		this.hideLoading();

		if (!weatherData || !weatherData.location || !weatherData.current) {
			this.container.innerHTML = `<p>Failed to fetch weather data. Please try again.</p>`;
			return;
		}

		const { location, current } = weatherData;

		this.container.innerHTML = `
      <h2>Weather in ${location.name}, ${location.region}, ${location.country}</h2>
      <p>Local Time: ${location.localtime}</p>
      <div class="weather-condition">
        <img src="${current.condition.icon}" alt="${current.condition.text}">
        <p>${current.condition.text}</p>
      </div>
      <p>Temperature: ${current.temp_c}°C (${current.temp_f}°F)</p>
      <p>Feels like: ${current.feelslike_c}°C (${current.feelslike_f}°F)</p>
      <p>Humidity: ${current.humidity}%</p>
      <p>Wind: ${current.wind_kph} kph (${current.wind_mph} mph) ${current.wind_dir}</p>
      <p>Precipitation: ${current.precip_mm} mm (${current.precip_in} in)</p>
      <p>Pressure: ${current.pressure_mb} mb (${current.pressure_in} in)</p>
      <p>Visibility: ${current.vis_km} km (${current.vis_miles} miles)</p>
      <p>UV Index: ${current.uv}</p>
    `;
	}
}
