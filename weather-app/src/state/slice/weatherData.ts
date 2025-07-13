import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../types/weather";

export function formatDateToDayMonth(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Ensures 2-digit day
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // JUL, MAR, etc.
    return `${day} ${month}`;
}

const initialState: WeatherData = {
    id: "",
    Location: "",
    Temperature: "",
    windSpeed: 0,
    icon: "",
    condition: "",
    date: "", // Assuming you want to keep track of the date
    forecastData: [],
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

export let weatherList: string[] = [];
// ✅ async thunk defined before slice
export const weatherAsync = createAsyncThunk(
    'weatherData/weatherDetails',
    async (id: string) => {
        let cityName = id.substring(0, id.length - 10); // Extract city name from the ID
        console.log("Fetching weather for city:", cityName);
        const res = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=6fba568e3e914b71be270601250607&q=${cityName}&days=5`
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
                }
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
            `http://api.weatherapi.com/v1/${apiType}.json?key=6fba568e3e914b71be270601250607&q=${cityName}&dt=${dt}`
            //   `https://api.weatherapi.com/v1/current.json?key=6fba568e3e914b71be270601250607&q=${cityName}`
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
            forecastData: [],
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
                weatherList = weatherList.filter((item) => item !== action.payload.id); // Remove duplicates
                weatherList.push(action.payload.id); // Add new city to the list
                console.log("Updated weather list:", weatherList);
                state = action.payload;
            })
            .addCase(weatherCardAsync.pending, () => {
                console.log("Fetching weather...");
            })
            .addCase(weatherCardAsync.fulfilled, (state: WeatherData, action: PayloadAction<WeatherData>) => {
                console.log("Weather fetched successfully:", action.payload);
                // weatherList = weatherList.filter((item) => item !== action.payload.id); // Remove duplicates
                // weatherList.push(action.payload.id); // Add new city to the list
                // console.log("Updated weather list:", weatherList);
                state = action.payload;
            });

    }
});

export default weatherSlice.reducer;
