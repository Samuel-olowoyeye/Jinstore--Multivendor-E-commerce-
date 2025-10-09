import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

// Define Product type
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  discountPrice: number;
  image: string;
  badge: string;
  rating: number;
}

// Alias for clarity
export type SavedItem = Product;

// Define the state interface
interface FavoriteState {
  items: SavedItem[];
}

// Initial state
const initialState: FavoriteState = {
  items: [],
};

const savedItemSlice = createSlice({
  name: 'savedItem',
  initialState,
  reducers: {
    addToSavedItem: (state, action: PayloadAction<SavedItem>) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromSavedItem: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter(item => item.id !== action.payload.toString());
    },
    toggleSavedItem: (state, action: PayloadAction<SavedItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

// Export actions and selectors
export const {
  addToSavedItem,
  removeFromSavedItem,
  toggleSavedItem,
} = savedItemSlice.actions;

export const selectSavedItems = (state: RootState): SavedItem[] => state.savedItem.items;
export const isItemSaved = (state: RootState, id: string): boolean =>
  state.savedItem.items.some(item => item.id === id);

export default savedItemSlice.reducer;
