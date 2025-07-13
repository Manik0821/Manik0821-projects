import { configureStore } from "@reduxjs/toolkit";
import winCountReducer from './counter/winCheck';
import PlayerReducer from './counter/players';

export const store = configureStore({
    reducer: {
        winCheck: winCountReducer,
        players: PlayerReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;