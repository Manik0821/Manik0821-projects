
export type Spot = {
    id: string,
    parkedStatus: boolean,
    spotType: "bike" | "car" | "truck",
    parkedId : string | null
}
export const parkingMap = [
    {
        id:"SPOT 1",
        parkedStatus: false,
        spotType: "bike",
        parkedId : ""
    },
    {
        id:"SPOT 2",
        parkedStatus: false,
        spotType: "bike",
        parkedId : ""
    },
    {
        id:"SPOT 3",
        parkedStatus: false,
        spotType: "bike",
        parkedId : ""
    },
    {
        id:"SPOT 4",
        parkedStatus: false,
        spotType: "bike",
        parkedId : ""
    },
    {
        id:"SPOT 5",
        parkedStatus: false,
        spotType: "car",
        parkedId : ""
    },
    {
        id:"SPOT 6",
        parkedStatus: false,
        spotType: "car",
        parkedId : ""
    },
    {
        id:"SPOT 7",
        parkedStatus: false,
        spotType: "car",
        parkedId : ""
    },
    {
        id:"SPOT 8",
        parkedStatus: false,
        spotType: "car",
        parkedId : ""
    },
    {
        id:"SPOT 9",
        parkedStatus: false,
        spotType: "truck",
        parkedId : ""
    },
    {
        id:"SPOT 10",
        parkedStatus: false,
        spotType: "truck",
        parkedId : ""
    },

] as Spot[]

export type vehicle = {
    lisence : string,
    type: "truck" | "car" | "bike",
}