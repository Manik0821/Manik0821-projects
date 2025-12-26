import React from "react";
import { useDispatch } from "react-redux";
import { parkCar } from "../../state/slice/parking";
import { useSelector } from "react-redux";
import { Rootstate } from "../../state/store"
import ParkingSpot from "./parkingSpot/parkingSpot";
import './parkingLot.css'

const ParkingLot = () => {
    const map = useSelector((state: Rootstate) =>
        state.parking.parkingSpots
    )

    const checkAvailability = (vtype: string) => {
        // console.log(map)
        if (!map) return "";
        const s = map.find((spot) => vtype == spot.spotType && spot.parkedStatus == false)
        let res = ""
        if (s) res = s.id
        return res;
    }

    const parkThisCar = (vtype: string, carId: string) => {
        const spotId: string = checkAvailability(vtype);
        console.log("start")
        if (spotId !== "" || spotId) {
            dispatch(parkCar({ carId, spotId }))
            console.log("parking..")
        }
    }


    const dispatch = useDispatch();

    return (
        <>
            <div className="parkingLot-container" style={{ width: "100%", display: "flex" , padding:"1rem"}}>
                <div className="parkingLot" style={{width:"80%"}}>
                    <div className="parkingTitle" style={{fontSize:"24px",fontWeight:"700",textAlign:"center",border:"1px solid black"}}>
                        Parking-Lot
                    </div>
                    <div className="Lot flex" style={{flexWrap:"wrap"}}>
                        {
                            map.map((spot)=>(
                                <ParkingSpot spot={spot} />
                            ))
                        }
                    </div>
                </div>
                <div className="CarsList" style={{display:"flex",flexDirection:"column"}}>

                    <button onClick={() => parkThisCar("bike", "ABCD123")} >park</button>
                    <button onClick={() => parkThisCar("car", "ABCD123")} >park</button>
                    <button onClick={() => parkThisCar("truck", "ABCD123")} >park</button>

                </div>

            </div>
        </>
    )
}

export default ParkingLot;