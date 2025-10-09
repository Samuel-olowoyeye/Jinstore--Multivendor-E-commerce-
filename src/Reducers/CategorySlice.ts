import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: 'All Categories',
    priceRange: 'All',
    sortOption: 'Relevance',
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});


export const { setCategory, setPriceRange, setSortOption} = categorySlice.actions;
export default categorySlice.reducer;

