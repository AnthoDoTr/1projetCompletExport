import React, { useState } from 'react';
import axios from 'axios';
import neige from '../../assets/meteo/neige.jpg';
import clear from '../../assets/meteo/clair1.jpg';
import nuage from '../../assets/meteo/nuage.jpg';
import orage from '../../assets/meteo/orage.jpg';
import pluie from '../../assets/meteo/pluie.jpg';
import style from './weather.module.css';
import fond from '../../assets/meteo/default.jpg'

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`http://localhost:3000/weather/${city}`);
    setWeatherData(response.data);
    setImageUrl(getImageUrl(response.data.weather[0].main));
  };

  const getImageUrl = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return clear;
      case 'Clouds':
        return nuage;
      case 'Rain':
        return pluie;
      case 'Snow':
        return neige;
      case 'Thunderstorm':
        return orage;  
      default:
        return fond;
    }
  };



  return (
    <div>
      <form onSubmit={handleSubmit} className={style.weather}>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div className={style.temp}>
          <p>Temperature: {Math.floor(weatherData.main.temp - 273.15)} °C</p>
          <div><p>Humidity: {weatherData.main.humidity} %</p></div>
          <img src={imageUrl} className={style.imageFond} alt="Weather condition" />
        </div>
      )}
    </div>
  );
};

export default Weather;