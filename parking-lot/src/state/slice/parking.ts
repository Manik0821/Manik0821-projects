import { createSlice , PayloadAction } from "@reduxjs/toolkit";

export type Spot = {
    id: string,
    parkedStatus: boolean,
    spotType: "bike" | "car" | "truck",
    parkedId : string | null
}
const parkingMap = [
    {
        id:"s1",
        parkedStatus: false,
        spotType: "bike",
        parkedId : ""
    },
    {
        id:"s2",
        parkedStatus: false,
        spotType: "bike",
        parkedId : ""
    },
    {
        id:"s3",
        parkedStatus: false,
        spotType: "car",
        parkedId : ""
    },
    {
        id:"s4",
        parkedStatus: false,
        spotType: "car",
        parkedId : ""
    },
    {
        id:"s5",
        parkedStatus: false,
        spotType: "truck",
        parkedId : ""
    },
    {
        id:"s6",
        parkedStatus: false,
        spotType: "truck",
        parkedId : ""
    },
] as Spot[]
const initialState = {
    parkingSpots: parkingMap
}

export const ParkingSlice = createSlice({
    name: "parking",
    initialState,
    reducers: {
        parkCar: (state,action: PayloadAction<{carId: string,spotId:string}> )=>{
            console.log(" begin")
            state.parkingSpots.forEach((ps)=>{
                if(ps.id===action.payload.spotId){
                    ps.parkedStatus=true;
                    ps.parkedId = action.payload.carId;
                }
            })
            console.log(state.parkingSpots)
        },
        unParkCar : (state,action :PayloadAction<{spotId:string}>)=> {
            state.parkingSpots.forEach(ps=>{
                if(ps.id == action.payload.spotId){
                    ps.parkedId="";
                    ps.parkedStatus = false;
                }
            })
            console.log(state.parkingSpots);
        }   

    }
});

export const {parkCar} = ParkingSlice.actions;
export default ParkingSlice.reducer;