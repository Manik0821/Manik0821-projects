import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slice/weatherData';
import panelReducer from './slice/changPanel';

export const store = configureStore({
  reducer: {
    weatherData: weatherReducer, // ✅ THIS must be exactly weatherData
    weatherList: weatherReducer, // ✅ THIS must be exactly weatherList
    panel : panelReducer // ✅ THIS must be exactly panel
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
