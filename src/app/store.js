import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "../slices/restaurantsSlice";
import fruitsSlice from "../slices/fruitsSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice,
    fruits: fruitsSlice,
  },
});
