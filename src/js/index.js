import '../css/style.css';
import WeatherAPI from './api';
import WeatherDisplay from '../components/WeatherDisplay';

const weatherAPI = new WeatherAPI();
const weatherDisplay = new WeatherDisplay(
	document.querySelector('#weather-container'),
	document.querySelector('#loading')
);

async function loadWeather(city) {
	weatherDisplay.clear();
	weatherDisplay.showLoading();

	try {
		const weatherData = await weatherAPI.fetchWeather(city);
		weatherDisplay.render(weatherData);
	} catch (error) {
		console.error('Error fetching weather data:', error);
		weatherDisplay.render(null); // Pass null to indicate an error
	}
}

document.querySelector('#location-form').addEventListener('submit', (event) => {
	event.preventDefault();
	const locationInput = document.querySelector('#location-input').value;
	loadWeather(locationInput);
});
