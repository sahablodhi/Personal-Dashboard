import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=1259839a9e04806c41a5280a3a72552e&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-widget">
      {error ? (
        <div>{error}</div>
      ) : !weatherData ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </>
      )}
    </div>
  );
};

export default Weather;
