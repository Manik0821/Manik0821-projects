import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Player {
    name: string,
    Val: "O" | "X",
    turn: boolean,
    winCount: number
}

const initialState: Player[] = [{
    name: "Manik",
    Val: "O",
    turn: true,
    winCount: 0
}, {
    name: "jain",
    Val: "X",
    turn: false,
    winCount: 0
}];

const Players = createSlice({
    name: "Players",
    initialState,
    reducers: {
        playerWins: (state,action: PayloadAction<number>) => {
            state[action.payload].winCount += 1;
        },
        Draw: () => {
            console.log("Game is Draw");
        }
    }
});


export const { playerWins,Draw } = Players.actions
export default Players.reducer;