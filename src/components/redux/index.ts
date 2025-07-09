import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./feature/wishlistSlice";
export const store = configureStore({
  reducer: {
    Wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
