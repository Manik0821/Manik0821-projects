import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/cart";
import ToggleReducer from "./slice/controller";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    Toggle: ToggleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
