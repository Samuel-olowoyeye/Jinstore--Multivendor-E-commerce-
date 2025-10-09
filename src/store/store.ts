import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Reducers/cartSlice';
import categoryReducer from '../Reducers/CategorySlice';
import savedItemReducer from '../Reducers/itemSlice'

export const store = configureStore({
  reducer: { 
    cart: cartReducer,
    savedItem: savedItemReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;