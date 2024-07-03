import '../css/style.css';
import WeatherAPI from './api';
import WeatherDisplay from '../components/WeatherDisplay';

const apiKey = process.env.WEATHER_API_KEY;
const weatherAPI = new WeatherAPI(apiKey);
const weatherDisplay = new WeatherDisplay(
	document.querySelector('#weather-container'),
	document.querySelector('#loading')
);

async function loadWeather(city) {
	weatherDisplay.clear();
	weatherDisplay.showLoading();
	const weatherData = await weatherAPI.fetchWeather(city);
	weatherDisplay.render(weatherData);
}

document.querySelector('#location-form').addEventListener('submit', (event) => {
	event.preventDefault();
	const locationInput = document.querySelector('#location-input').value;
	loadWeather(locationInput);
});
