export default class WeatherAPI {
	constructor() {
		this.baseUrl =
			'https://gp8n3zfpth.execute-api.us-west-2.amazonaws.com/weather';
	}

	async fetchWeather(city) {
		const encodedCity = encodeURIComponent(city);
		try {
			const response = await fetch(`${this.baseUrl}?city=${encodedCity}`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			console.error(
				'There has been a problem with your fetch operation:',
				error
			);
		}
	}
}
