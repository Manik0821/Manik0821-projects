import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    isFilterEnabled: false,
    isFilterPopupOpen: false,
}

export const ToggleSlice = createSlice({
    name: "controller",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
        openSidebar: (state) => {
            state.isSidebarOpen = true;
        },
        closeFilter: (state) => {
            state.isFilterEnabled = false;
        },
        openFilter: (state) => {
            state.isFilterEnabled = true;
        },
        togglePopup: (state) => {
            state.isFilterPopupOpen = !state.isFilterPopupOpen;;
        }

    },
});

export const { toggleSidebar, closeSidebar, openSidebar,openFilter,closeFilter,togglePopup } = ToggleSlice.actions;
export default ToggleSlice.reducer;