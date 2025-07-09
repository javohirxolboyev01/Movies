import type { IMovie } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface WishlistState {
  value: IMovie[];
}

const initialState: WishlistState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<IMovie>) => {
      const isExist = state.value.some((item) => item.id === action.payload.id);
      if (isExist) {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.value.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
