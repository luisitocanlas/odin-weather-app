export default class WeatherAPI {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = 'https://api.weatherapi.com/v1/current.json';
	}

	async fetchWeather(city) {
		try {
			const response = await fetch(
				`${this.baseUrl}?key=${this.apiKey}&q=${city}`
			);
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

	processWeatherData(data) {
		return {
			location: {
				name: data.location.name,
				region: data.location.region,
				country: data.location.country,
				localtime: data.location.localtime,
			},
			current: {
				temp_c: data.current.temp_c,
				temp_f: data.current.temp_f,
				condition: {
					text: data.current.condition.text,
					icon: `http:${data.current.condition.icon}`,
				},
				humidity: data.current.humidity,
				wind_kph: data.current.wind_kph,
				wind_mph: data.current.wind_mph,
				wind_dir: data.current.wind_dir,
				precip_mm: data.current.precip_mm,
				precip_in: data.current.precip_in,
				feelslike_c: data.current.feelslike_c,
				feelslike_f: data.current.feelslike_f,
			},
		};
	}
}
