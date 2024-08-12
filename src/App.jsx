import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { SunMedium, CloudRain, Search } from 'lucide-react';
export default function App() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const fetchWeather = async () => {
        try {
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=59db6b80c4735a40614797e878fde556&units=metric`);
            setWeather(weatherResponse.data);
            const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=59db6b80c4735a40614797e878fde556&units=metric`);
            setForecast(forecastResponse.data);
        } catch (error) {
            console.error("error", error);
            alert('City is not available');
        }
    };
    const handleSearch = () => {
        if (input) {
            fetchWeather();
        }
    };
    const addFavorite = () => {
        if (weather && !favorites.includes(weather.name)) {
            setFavorites([...favorites, weather.name]);
        }
    };
    const removeFavorite = (city) => {
        setFavorites (favorites.filter(favorite => favorite !== city));
    };
    const getDailyForecast = () => {
        if (!forecast) return [];

        const dailyForecast = [];
          let lastDate = null;
         forecast.list.forEach(item => {
     const date = new Date(item.dt * 1000).toLocaleDateString();
              if (date!==lastDate) {
                  dailyForecast.push(item);
                lastDate=date;
            }
        });
        return dailyForecast.slice(0, 5);
    };
    return (
        <div className='weather'>
            <h1 style={{ color:'white' }}>Check Your City Weather</h1>
            <div className='search-bar'>
                <input type="text" placeholder='Search'value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={handleSearch}><Search /></button>
            </div>
            {weather && (
                <div className='weather-info'>
                    <SunMedium size={90} color="white" />
                    <p className='temp'>
                        <span className='temperature'>{weather.main.temp}</span>°C
                    </p>
                    <p className='location'>{weather.name}</p>
                    <div className='humidity-info'>
                        <CloudRain size={40} color="white" style={{ marginLeft: '30px' }} />
                        <p>{weather.main.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                    <button className='favorite-button' onClick={addFavorite}>Add to Favorite</button>
                </div>
            )}
            {forecast && (
                <div className='forecast-info'>
                    <h2 style={{ color: 'white' }}>5-Day Forecast</h2>
                    <div className='forecast-list'>
                        {getDailyForecast().map((item, index) => (
                            <div key={index} className='forecast-item'>
                    <p className='forecast-date'>{new Date(item.dt * 1000).toLocaleDateString()}</p>
                         <p className='forecast-temp'>
                                    <span className='forecast-temperature'>{item.main.temp}</span>°C </p>                             
                                  <p className='forecast-d'>{item.weather[0].description}</p>
                             </div>
                         ))}
                </div>
                </div>
               )}
               {favorites.length > 0 && (
                <div className='favorites'>
                <h2 style={{ color: 'white' }}>Favorite Cities</h2>
                 <ul>
                 {favorites.map(city => (
                            <li key={city} className='favorite-city'>
                             <span>{city}</span>
                                 <button onClick={() => removeFavorite(city)} className='removeBtn'>remove</button>
                     </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

