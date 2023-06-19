import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import { movieApi } from "../API/rtkQueryApi";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(movieApi.middleware),
});
