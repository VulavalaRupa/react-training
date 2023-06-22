import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const movie = action.payload;
      const existingItem = state.items.find((item) => item.imdbID === movie.imdbID);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ ...movie, count: 1 });
      }

      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const movieId = action.payload;
      const existingItem = state.items.find((item) => item.imdbID === movieId);

      if (existingItem) {
        if (existingItem.count === 1) {
          state.items = state.items.filter((item) => item.imdbID !== movieId);
        } else {
          existingItem.count -= 1;
        }
        state.count -= 1;
      }
    },
}
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;