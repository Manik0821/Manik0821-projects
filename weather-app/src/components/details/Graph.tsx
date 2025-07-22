import exp from "constants";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, ReferenceLine
  } from "recharts";
  
  type Props = {
    data: { time: string; temperature: number | null | undefined }[];
    sunrise: string;
    sunset: string;
  };
  
  const TemperatureGraph: React.FC<Props> = ({ data, sunrise, sunset }) => {
    const extendData = [...data];
    extendData.push({time: sunrise, temperature: null}); // Add sunrise marker
    extendData.push({time: sunset, temperature: null}); // Add sunset marker
    console.log("Extended Data:", extendData);
    extendData.sort((a, b) => a.time.localeCompare(b.time));
    const temperatures = data.map((d) => d.temperature).filter((t): t is number => t !== null && t !== undefined);
    const minTemp = Math.floor(Math.min(...temperatures)) - 2; // Safely calculate minTemp
    const maxTemp = Math.ceil(Math.max(...temperatures)) + 2;
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={extendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis unit="°C" 
          domain={[minTemp,maxTemp]}/>
          <Tooltip />
  
          {/* Temp Line */}
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            connectNulls={true}
          />
          <ReferenceLine x={sunrise} stroke="orange" strokeDasharray="10 10" label={{ value: "Sunrise", position: "top", fill: "orange" }} />
        <ReferenceLine x={sunset} stroke="red" strokeDasharray="10 10ß" label={{ value: "Sunset", position: "top", fill: "red" }} />
      
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default TemperatureGraph;