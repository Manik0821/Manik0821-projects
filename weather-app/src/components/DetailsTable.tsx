import { ExtraTable } from "../types/weather";

interface DetailsTableProps {
    extraTable: ExtraTable;
}

const DetailsTable = ({ extraTable }: DetailsTableProps) => {
    return (
        <div className="details-table">
            <table className="weather-details-table" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
                <thead className="p-4">
                    <tr>
                        <th style={{ padding: "0.5rem", borderBottom: "2px solid #ccc", textAlign: "left" }}>Detail</th>
                        <th style={{ padding: "0.5rem", borderBottom: "2px solid #ccc", textAlign: "left" }}>Value</th>
                    </tr>
                </thead>
                <tbody style={{ width: "100%" }}>
                    <tr>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>Min Temperature</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{extraTable.minTemp} °C</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>Max Temperature</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{extraTable.maxTemp} °C</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>Average Temperature</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{extraTable.avgTemp} °C</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>Humidity</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{extraTable.humidity} %</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>Pressure</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{extraTable.pressure} mb</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>Sunrise</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{extraTable.sunrise}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>Sunset</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{extraTable.sunset}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>Rain Chance</td>
                        <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>{extraTable.rainChance} %</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsTable;