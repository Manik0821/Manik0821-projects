type WeatherData = {
    id : string;
    Location: string;
    Temperature: string;
    icon?: string;
    condition?: string;
    windSpeed: number;
    forecastData: Forecast[]
    date: string; // Assuming you want to keep track of the date
    extraTable:ExtraTable
}

type ExtraTable = {
    minTemp: number;
    maxTemp: number;
    avgTemp: number;
    humidity: number;
    pressure: number;
    sunrise: string;
    sunset: string;
    rainChance: number;
}

type Forecast = {
    condition: string;
    icon?: string;
    date: string;
    day: {
        avgtemp: number;
    }
}

export type { WeatherData, ExtraTable, Forecast };