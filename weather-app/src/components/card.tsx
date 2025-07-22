import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { weatherAsync, formatDateToDayMonth, weatherCardAsync } from '../state/slice/weatherData';
import { WeatherData, ExtraTable } from "../types/weather";
import './card.css'; // Import the CSS file for styling
import { Open } from '../state/slice/changPanel';
import DetailsTable from './DetailsTable';
import {GetData } from "../state/slice/weatherData";

const Card = ({ details = "", panel = false }) => {
  useEffect(() => {
    setName(details);
  }, [details]);

  const [newName, setName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const [weatherDetails, setWeatherDetails] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (!newName.trim()) return;
    console.log("newName:", newName);
    const fetchWeatherDetails = async () => {
      try {
        let result;
        if (GetData(newName)) {
          result = GetData(newName);
        } else {
          result = await Promise.any(
            newName.split(",").map((city) => dispatch(
              panel ? weatherCardAsync(city.trim()) : weatherAsync(city.trim())
            ).unwrap())
          );
        }
        console.log("Weather details fetched:", result);
        setWeatherDetails(result);
      } catch (error) {
        console.error("Error fetching weather details:", error);
        setWeatherDetails(null);
      }
    };

    fetchWeatherDetails();
  }, [dispatch, newName]); // ✅ depend directly on newName

  return (<>

    {weatherDetails !== null && (<div className='card-wrapper border-radius-4' style={{ backgroundColor: "rgba(48, 198, 225, 0.23)", contain: "content" }}>
      <div className="card flex justify-between flex-col border-radius-4">
        <div className="card-top flex flex-col align-center justify-between ml-10 mr-10" style={{ textAlign: "center" }} onClick={() => dispatch(Open(details))}>
          <p className="city-name" style={{ fontSize: "20px", fontWeight: "bold" }}>{weatherDetails?.Location}</p>
          <p className="weather-date border-radius-4" style={{ fontSize: "18px", fontWeight: "bold", color: "rgb(47 136 236)" }}>{formatDateToDayMonth(weatherDetails.date.substring(0, 10))}</p>
          <img src={weatherDetails?.icon} alt={weatherDetails?.condition} style={{ padding: "0.5rem 2rem" }} />
          {!panel && (<p className="temperature" style={{ fontSize: "16px", marginTop: "5rem", fontWeight: "bold", marginLeft: "12rem", position: "absolute" }}>{weatherDetails?.Temperature}</p>)}
          <p className="condition" style={{ fontSize: "16px", marginBottom: "1rem", fontWeight: "bolder" }}>{weatherDetails?.condition}</p>
        </div>
        <div className="card-footer flex" style={{ backgroundColor: "#f0f0f0", cursor: "pointer", borderRadius: "0 0 10px 10px", textAlign: "center" }}>
          {!panel && weatherDetails?.forecastData.map((forecast, index) => (
            forecast.date !== weatherDetails?.date &&
            (
              <div key={index} className={`forecast-item ${weatherDetails.Location + forecast.date}`} style={{ width: "25%", borderRight: "1px solid #e8e7ec" }} onClick={() => dispatch(Open(`${weatherDetails.Location + forecast.date}`))} >
                <div className="forecast-date" style={{ fontSize: "14px", fontWeight: "bolder", marginBottom: "-0.4rem", paddingTop: "0.2rem", color: "rgb(47 136 236)" }}>{formatDateToDayMonth(forecast.date)}</div>
                <img src={forecast.icon} alt={forecast.condition} className="" />
                <p style={{ fontSize: "12px" }}>{forecast.day.avgtemp} °C</p>
              </div>
            )))}
        </div>
      </div>
    </div>)}

    {panel && weatherDetails && (<div className="table-wrapper">
      {weatherDetails.extraTable && <DetailsTable extraTable={weatherDetails.extraTable as ExtraTable} />}
    </div>)}
  </>
  )
}

export default Card;