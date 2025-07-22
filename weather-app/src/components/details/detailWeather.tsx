import React from 'react';
import { WeatherData, Forecast, ExtraTable } from '../../types/weather';
import { useLocation } from 'react-router-dom';
import TemperatureGraph from './Graph';

type LocationState = {
    data: WeatherData;
};

const DetailWeather = () => {
    const add12Hours = (time: string): string => {
        const [hourStr, minuteStr] = time.split(":");
        let hour = parseInt(hourStr, 10);
      
        hour = (hour + 12) % 24; // ensures wrap-around if needed
        const newHourStr = hour.toString().padStart(2, "0");
      
        return `${newHourStr}:${minuteStr}`;
      };

    const location = useLocation();
    const { data } = location.state as LocationState; // Extracting the WeatherData from the location state
    let sunrise = data.extraTable.sunrise.substring(0,5) || '';
    let sunset = data.extraTable.sunset.substring(0,5) || '';
    sunset = add12Hours(sunset);

    console.log("Weather Data:", data);
    const hourlyTemps = data.forecastData[0].hours.map((h) => ({
        time: h.time, // extract just the hour from "2025-07-06 14:00"
        temperature: h.temperature,
    }));
    console.log("Hourly Temperatures:", hourlyTemps);
    console.log("Sunrise:", sunrise);
    console.log("Sunset:", sunset);
    return (<div>
        DATA :
        <TemperatureGraph data={hourlyTemps} sunrise={sunrise.substring(0,5)} sunset={sunset} />
            {/* {hourlyTemps && hourlyTemps.map((h) => (
        <div key={h.time} className="hourly-temp">
            <p>{h.time}</p>
            <p>{h.temperature} °C</p>
        </div>
        ))} */}
    </div>);
}
export default DetailWeather;