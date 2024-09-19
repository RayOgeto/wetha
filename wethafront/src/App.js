import React, { useState } from 'react';
import SearchBar from './components/searchbar';
import WeatherDisplay from './components/weatherdisplay';
import weathermap from './components/weathermap';

const App = () => { 
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (location) => {
        try {
            // const response = await fetch(`https://weather.onrender.com/api/weather/${location}/`);
            const response = await fetch(`https://wetha.onrender.com/`);
            if (!response.ok) {
              throw new Error('failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);  
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null)
        }
    };

    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%'} }>
            <div style={{alignItems: 'center'}}>
                <h1 style={{fontFamily: 'monospace'}}>Wetha App</h1>
                <SearchBar onSearch={fetchWeather} />
                <WeatherDisplay weatherData={weatherData} />
                <weathermap />
            </div>
        </div>
    );
};



export default App;
