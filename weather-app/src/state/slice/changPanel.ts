import {createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface panelState {
    isPanelOpen: boolean;
    id: string; // Assuming you want to keep track of the ID
}

const initialState: panelState = {
    isPanelOpen: false,
    id:""
};

export const panelSlice = createSlice({
    name: "panel",
    initialState,
    reducers: {
        Open: (state,action :PayloadAction<string>) => {
            state.isPanelOpen = true; // Toggle the panel state
            state.id = action.payload; // Set the ID when opening the panel
        },
        Close: (state) => {
            state.isPanelOpen = false; // Toggle the panel state
        }
    }
});

export const { Open, Close } = panelSlice.actions;
export default panelSlice.reducer;