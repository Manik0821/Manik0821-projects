import React from "react";
import "./parkingSpot.css"
import { Spot } from "../../../state/slice/parking";

type SpotProps = {
    spot : Spot
}

const ParkingSpot: React.FC<SpotProps> =({spot}) => {
    return(
        <div className="ParkingSpot-container">
            <div className="parkingSpot flex gap-3">
            {spot.id}
            {spot.parkedId &&
                <div className="parkedSpot" style={{color:"green"}}>
                    {spot.parkedId}
                </div>
            }
            {
                !spot.parkedId &&
                <div className="parkedSpot" style={{color:"grey"}}>
                    {" {Not Parked} "}
                </div>
            }
            </div>
        </div>
    )
}

export default ParkingSpot;