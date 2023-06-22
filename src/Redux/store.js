import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import { movieApi } from "../API/rtkQueryApi";
import cartReducer from "./movies/cartslice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(movieApi.middleware),
});
