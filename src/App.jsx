import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await fetchWeather(query);

		setWeather(data);
		setQuery('');
	};
	return (
		<div className="main-container">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="search"
					placeholder="Search..."
					value={query}
					onChange={handleChange}
				/>
				<button className="btn-search" type="submit">
					Search
				</button>
			</form>

			{weather.main && (
				<div className="city">
					<h2 className="city-name">
						<span>{weather.name}</span>
						<sup>{weather.sys.country}</sup>
					</h2>
					<div className="city-temp">
						{Math.round(weather.main.temp)}
						<sup>&deg;</sup>C
					</div>
					<div className="info">
						<img
							className="city-icon"
							src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt={weather.weather[0].description}
						/>
						<p>{weather.weather[0].description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
