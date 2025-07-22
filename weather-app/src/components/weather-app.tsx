import { useEffect, useState } from "react";
import Card from "./card";
import './weather-app.css';
import DetailsPanel from "./detailsPanel";
import { currentList } from "../state/slice/weatherData";
import { useDispatch, useSelector } from "react-redux";
import { Open } from "../state/slice/changPanel";
import { AppDispatch } from "../state/store";
import {weatherList,AddToList,GetData} from "../state/slice/weatherData"; // Import the weatherList from the slice

const WeatherApp = () => {
    const isPanelOpen = useSelector((state: any) => state.panel.isPanelOpen); // Access the panel state
    const detailsId = useSelector((state: any) => state.panel.id); // Access the detailsId from the panel state
    const Dispatch = useDispatch<AppDispatch>(); // Get the dispatch function from the store
    const [currVal, setCurrVal] = useState("");
    const [cities, updateCity] = useState<string[]>([]);
    const addCity = (city: string) => {
        if (!city || city.trim() === "") return; // Do not add empty or whitespace-only cities
        let backdate = "2025-07-20";
        Dispatch(Open(city + backdate)); // Dispatch the Open action with the city as id
        city = city + backdate;
        console.log("Adding city:", city);
        if (!city || city.trim() === "") {
            return; // Do not add empty or whitespace-only cities
        }
        updateCity((prevCities) => {
            if (prevCities.length > 0 && prevCities.includes(city)) {
                return prevCities; // City already exists, no need to add
            }
            console.log(...prevCities, city);
            return [...prevCities, city]; // Add the new city to the list
        });
    };
    useEffect(() => {

        updateCity(currentList); // Initialize with the weatherList from the state slice
    }
        , [currentList]);
    return (
        <div className=" weather-wrapper flex items-center flex-row" style={{justifyContent:"flex-start"}}>
            <div className="weather-container flex flex-col justify-flex-start items-center border-radius-4" style={{ contain: "content", minWidth: isPanelOpen ? "65%" : "100%" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "bolder", color: "rgb(47 136 236)" }}>Weather App</h1>
                <div className="filters flex">
                    <select className="city-select" style={{ fontSize: "14px", textAlign: "center", width: "10rem", height: "40px", padding: "5px", margin: "0 10px", backgroundColor: "#d3d3d385" }}>
                        <option value="" >Filter by City</option>
                        <option value="" >Filter by Date</option>
                        <option value="" >Filter by Condition</option>
                        <option value="" disabled>Advanced</option>
                    </select>
                    <input
                        type="text"
                        value={currVal}
                        onChange={(e) => setCurrVal(e.target.value)} // only updates state
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault(); // Optional: prevents form submission
                                addCity(currVal);   // only runs on Enter
                            }
                        }}
                        className="search-bar"
                        placeholder="Search for a city..."
                        style={{
                            width: "10rem",
                            height: "40px",
                            borderRadius: "20px",
                            padding: "10px",
                            marginBottom: "20px",
                            backgroundColor: "#d3d3d385",
                            paddingLeft: "1rem"
                        }} />
                </div>
                <div className="weather-app" style={{ scale: "1" }}>
                    {cities.map((wd, index) => (

                        <div key={index} className="weather-card border-2 w-80 border-grey-200" style={{ borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", scale: "0.8", margin: "-0.5rem" }}>

                            {/* <p><strong>date:</strong> {wd.date}</p> */}
                            <Card details={wd} />
                            {/* <DetailPanel/> */}

                        </div>
                    ))}
                </div>
            </div>

            {isPanelOpen && detailsId && (<div className="weatherPanel height-full" style={{ width: "30%", height: "100%", position: "fixed", right: "0", top: "0", backgroundColor: "#f0f0f0", borderLeft: "1px solid #ccc", overflowY: "auto" }}>
                <DetailsPanel id={detailsId} />
            </div>)}
        </div>
    );
};

export default WeatherApp;
