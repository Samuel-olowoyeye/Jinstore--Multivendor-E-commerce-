import { createSlice } from '@reduxjs/toolkit';
import Products from '@/Data/Products';
import { sortProducts } from '@/helper/sortProducts';



const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: 'All Categories',
    priceRange: 'All',
    sortOption: 'Relevance',
    products: Products,
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
      state.products = sortProducts(state.products, action.payload);
    },
  },
});


export const { setCategory, setPriceRange, setSortOption} = categorySlice.actions;
export default categorySlice.reducer;

