"use client";

import React from 'react';
import { Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSavedItem, isItemSaved, Product } from '../Reducers/itemSlice';
import { RootState } from '../store/store';

interface HeartButtonProps {
  product: Product;
}

const HeartButton: React.FC<HeartButtonProps> = ({ product }) => {
  const dispatch = useDispatch();
  const isFavorited = useSelector((state: RootState) =>
    isItemSaved(state, product.id)
  );

  return (
    <button
      onClick={() => dispatch(toggleSavedItem(product))}
      className={`p-1 rounded-full transition-colors duration-300 ease-in-out absolute top-3 right-1 lg:top-4 lg:right-2 cursor-pointer ${
        isFavorited ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
      }`}
    >
      <Heart className="w-[14.86px] h-[14.5px] " />
    </button>
  );
};

export default HeartButton;
