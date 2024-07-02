import '../css/style.css';
import WeatherAPI from './api';
import WeatherDisplay from '../components/WeatherDisplay';

const apiKey = process.env.WEATHER_API_KEY;
const weatherAPI = new WeatherAPI(apiKey);
const weatherDisplay = new WeatherDisplay(document.body);

async function loadWeather() {
	const weatherData = await weatherAPI.fetchWeather('Bellevue');
	weatherDisplay.render(weatherData);
}

loadWeather();
