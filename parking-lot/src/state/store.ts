import { configureStore } from "@reduxjs/toolkit";
import parkingReducer from "./slice/parking"

export const store = configureStore({
    reducer: {
        parking : parkingReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type Rootstate= ReturnType<typeof store.getState>