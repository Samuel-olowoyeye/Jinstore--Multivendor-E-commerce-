
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store'; // Adjust path based on your project structure

// Define the item type
export interface CartItem extends Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  // secondImage: string;
  // thirdImage: string;
  quantity: number;
}

interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discount: number;
  rating: number;
  category?: string;
  badge?: string;        
  secondImage?: string;  
  thirdImage?: string;  
}


// Define the slice state type
interface CartState {
  items: CartItem[];
  totalItems: number;
}

// Initial state
const initialState: CartState = {
  items: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
    },

    removeItemFromCart: (state, action: PayloadAction<string | number>) => {
        const index = state.items.findIndex(item => item.id === action.payload.toString());
        if (index !== -1) {
          state.totalItems -= state.items[index].quantity;
          state.items.splice(index, 1);
        }
    },
    increaseItemQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(item => item.id === action.payload.toString());
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
      }
    },

    decreaseItemQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;



export const selectTotalItems = (state: RootState): number => state.cart.totalItems;

export default cartSlice.reducer;
