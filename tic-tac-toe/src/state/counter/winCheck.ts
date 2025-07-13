import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface winner {
    status: string
}

const initialState: winner[] = [
    { status: "" },
    { status: "" }
];

const WinCheck = createSlice({
    name: "WinStatus",
    initialState,
    reducers: {

        Winner: (state, action: PayloadAction<number>) => {
            console.log("winner is :", action.payload);
            if (action.payload === 0) { state[0].status = "winner"; state[1].status = "loser" };
            if (action.payload === 1) { state[0].status = "loser"; state[1].status = "winner" };
            if (action.payload === 2) { state[0].status = ""; state[1].status = "" };
            if (action.payload === 3) { state[0].status = "draw"; state[1].status = "draw" };

        },
        Draw: (state) => {
            state[0].status = "draw";
            state[1].status = "draw";
            console.log("Game is Draw");
        }
    }
});


export const { Winner, Draw } = WinCheck.actions
export default WinCheck.reducer;