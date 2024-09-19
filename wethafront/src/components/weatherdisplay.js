import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
    
    if (!weatherData || !weatherData.main) {
        return <p>No weather data available. Please search for a location.</p>;
    }

    const { main, name, weather } = weatherData;
    const temperatureCelsius = (main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius

    return (
        <div>
            <h2>Weather in {name}</h2>
            <p>Temperature: {temperatureCelsius}°C</p>
            <p>Condition: {weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;
