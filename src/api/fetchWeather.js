import axios from 'axios';

const URL = import.meta.env.VITE_URL;
const APP_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: APP_KEY,
		},
	});
	return data;
};
