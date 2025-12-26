import React, { useState } from "react";
import { parkingMap, Spot, vehicle } from "../../Utils/utils";
import './parking.css'

const Parking = () => {

    const [lotmap, setMap] = useState(parkingMap);
    const [vehicle,setVehicle] = useState("car")
    const [licence,setNumber] = useState("")

    const unparkCar = (id: string) => {
        setMap(lotmap.map((spot) => spot.id === id ? { ...spot, parkedStatus: false, parkedId: "" } : spot))
    }
    const addToParking = () => {
        if(!licence)return
        console.log(vehicle,licence)
        const spt = lotmap.find(spot => spot.spotType === vehicle && spot.parkedStatus===false)?.id??"";
        if(spt){
            console.log(spt);
            setMap(lotmap.map((spot)=> spot.id === spt ? {...spot,parkedStatus:true,parkedId:licence}:spot))
        }
        console.log(lotmap);
        setNumber("");
    }
    const [vhl, addVhl] = useState([]);


    return (
        <div className="parking-container">
            <div className="parking">
                <div className="parking-section" style={{ width: "80%" }}>
                    <div className="parking-title" style={{ fontSize: "2.5rem", fontWeight: "700" }}>
                        Parking Lot
                    </div>
                    <div className="Lot">
                        {lotmap.map((pSpot) => (
                            (<div className={"parking-spot " + pSpot.spotType}>

                                <div className={pSpot.parkedStatus ? "spot parked" : "spot"}>
                                    {!pSpot.parkedStatus && <div className="unparked-spot">
                                        {pSpot.id}
                                    </div>}
                                    {pSpot.parkedStatus && <div className="parked-spot">
                                        {pSpot.parkedId}
                                        <button className="unpark-car" onClick={() => { unparkCar(pSpot.id) }}>unpark</button>
                                    </div>}
                                </div>
                            </div>)
                        ))}
                    </div>
                </div>
                <div className="parking-section" style={{ width: "20%" }}>
                    <div className="parking-title" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                        Drive Way
                    </div>
                    <div className="driveway-container">

                        <div className="vhl-add">
                            {/* <input type="text" placeholder="Enter type" /> */}
                            <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                                <option value="bike">bike</option>
                                <option value="truck">truck</option>
                                <option value="car">car</option>
                            </select>
                            <input type="text" placeholder="Enter Licence Number" value={licence} onChange={(e)=>setNumber(e.target.value)} />
                            <button onClick={addToParking}>Add Car</button>
                        </div>
                        <div className="vhl-list">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parking;