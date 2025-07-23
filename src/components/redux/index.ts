import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./feature/wishlistSlice";
import userReducer from "./feature/usersSlice";
export const store = configureStore({
  reducer: {
    Wishlist: wishlistReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
