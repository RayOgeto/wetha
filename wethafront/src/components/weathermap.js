import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const weathermap = () => {
    const weatherTileUrl = 'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=b2c6bd37612d81823f71ec3c1774bace'

    return (
        <div>
            <h2>Weather map</h2>
            <MapContainer center={[0,0]} zoom={2} style={{ height: '500px', width: '100%'}}>
                <TileLayer 
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
                
                <TileLayer 
                    url={weatherTileUrl}
                    attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'/>

            </MapContainer>
        </div>
    )
}

export default weathermap