import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../types/weather";

let key = "";

export function formatDateToDayMonth(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Ensures 2-digit day
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // JUL, MAR, etc.
    return `${day} ${month}`;
}
type StorageList = {
    [id:string]: WeatherData
}
export let weatherList: StorageList= {};
export const AddToList = (id:string,data:WeatherData) => {
    if (!weatherList[id]) {
        weatherList[id] = data; // Add new city to the list
    } else {
        console.log(`City with ID ${id} already exists in the list.`);
    }
}
export const GetData = (id: string) => {
    if (weatherList[id]) {
        return weatherList[id]; // Return the data for the given ID
    } else {
        console.log(`No data found for city with ID ${id}.`);
        return null; // Return null if no data found
    }
}

const initialState: WeatherData = {
    id: "",
    Location: "",
    Temperature: "",
    windSpeed: 0,
    icon: "",
    condition: "",
    date: "", // Assuming you want to keep track of the date
    forecastData: [
        {
            condition: "",
            date: "",
            icon: "",
            day: {
                avgtemp: 0
            },
            hours: []
        }
    ],
    extraTable: {
        minTemp: 0,
        maxTemp: 0,
        avgTemp: 0,
        humidity: 0,
        pressure: 0,
        sunrise: "",
        sunset: "",
        rainChance: 0,
    }
}

export let currentList: string[] = [];
// ✅ async thunk defined before slice
export const weatherAsync = createAsyncThunk(
    'weatherData/weatherDetails',
    async (id: string) => {
        const Temp = GetData(id);
        let cityName = id.substring(0, id.length - 10); // Extract city name from the ID
        let dt = id.substring(id.length - 10, id.length); // Extract date from the ID
        console.log("Fetching weather for city:", cityName);
        const res = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}&days=3&dt=${dt}`
            //   `https://api.weatherapi.com/v1/current.json?key=6fba568e3e914b71be270601250607&q=${cityName}`
        );
        const data = await res.json();
        const val: WeatherData = {
            id: data.location.name + data.forecast.forecastday[0].date, // Unique ID based on city name and local time
            Location: `${data.location.name}`,
            Temperature: `${data.current.temp_c} °C`,
            windSpeed: data.current.wind_kph,
            icon: data.current.condition.icon,
            condition: data.current.condition.text,
            date: (data.forecast.forecastday[0].date), // Assuming you want to keep track of the date
            forecastData: data.forecast.forecastday.map((day: any) => ({
                condition: day.day.condition.text,
                date: (day.date.substring(0, 10)),
                icon: day.day.condition.icon,
                day: {
                    avgtemp: day.day.avgtemp_c
                },
                hours: day.hour.map((h: any) => ({
                    time: h.time.split(" ")[1], // extract just the hour from "2025-07-06 14:00"
                    temperature: h.temp_c,
                }))
            })),
            extraTable: {
                minTemp: data.forecast.forecastday[0].day.mintemp_c,
                maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
                avgTemp: data.forecast.forecastday[0].day.avgtemp_c,
                humidity: data.current.humidity,
                pressure: data.current.pressure_mb,
                sunrise: data.forecast.forecastday[0].astro.sunrise,
                sunset: data.forecast.forecastday[0].astro.sunset,
                rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
            }
        };
        AddToList(val.id, val); // Add the fetched data to the list
        return val;
    }
);
export const weatherCardAsync = createAsyncThunk(
    'weatherData/weatherCardDetails',
    async (id: string) => {
        let cityName = id.substring(0, id.length - 10); // Extract city name from the ID
        let apiType = "forecast"
        console.log("id", id);
        let dt = id.substring(id.length - 10, id.length); // Extract date from the ID
        const res = await fetch(
            `http://api.weatherapi.com/v1/${apiType}.json?key=${key}&q=${cityName}&dt=${dt}`
        );
        console.log("data", res);
        const data = await res.json();
        const val: WeatherData = {
            id: data.location.name + data.forecast.forecastday[0].date, // Unique ID based on city name and local time
            Location: `${data.location.name}`,
            Temperature: `${data.current.temp_c} °C`,
            windSpeed: data.current.wind_kph,
            icon: data.current.condition.icon,
            condition: data.current.condition.text,
            date: (data.forecast.forecastday[0].date), // Assuming you want to keep track of the date
            forecastData: data.forecast.forecastday.map((day: any) => ({
                condition: day.day.condition.text,
                date: (day.date.substring(0, 10)),
                icon: day.day.condition.icon,
                day: {
                    avgtemp: day.day.avgtemp_c
                },
                hours: day.hour.map((h: any) => ({
                    time: h.time.split(" ")[1], // extract just the hour from "2025-07-06 14:00"
                    temperature: h.temp_c,
                }))
            })),
            extraTable: {
                minTemp: data.forecast.forecastday[0].day.mintemp_c,
                maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
                avgTemp: data.forecast.forecastday[0].day.avgtemp_c,
                humidity: data.current.humidity,
                pressure: data.current.pressure_mb,
                sunrise: data.forecast.forecastday[0].astro.sunrise,
                sunset: data.forecast.forecastday[0].astro.sunset,
                rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
            }
        };
        AddToList(val.id, val); // Add the fetched data to the list
        return val;
    }
);

const weatherSlice = createSlice({
    name: "weatherData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(weatherAsync.pending, () => {
                console.log("Fetching weather...");
            })
            .addCase(weatherAsync.fulfilled, (state: WeatherData, action: PayloadAction<WeatherData>) => {
                console.log("Weather fetched successfully:", action.payload);
                currentList = currentList.filter((item) => item !== action.payload.id); // Remove duplicates
                currentList.push(action.payload.id); // Add new city to the list
                console.log("Updated weather list:", currentList);
                state = action.payload;
            })
            .addCase(weatherCardAsync.pending, () => {
                console.log("Fetching weather...");
            })
            .addCase(weatherCardAsync.fulfilled, (state: WeatherData, action: PayloadAction<WeatherData>) => {
                console.log("Weather fetched successfully:", action.payload);
                state = action.payload;
            });

    }
});

export default weatherSlice.reducer;
