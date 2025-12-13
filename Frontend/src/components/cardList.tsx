"use client";

import React from 'react';
import { ChevronRight } from "lucide-react";
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store'; 
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  selectTotalItems,
  CartItem
} from '../Reducers/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const CardList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useDispatch<AppDispatch>();

  const removeFromCart = (itemId: number | string) => {
    dispatch(removeItemFromCart(itemId));
  };

  const increaseQuantity = (itemId: number | string) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const decreaseQuantity = (itemId: number | string) => {
    dispatch(decreaseItemQuantity(itemId));
  };


  const calculateTotalPrice = (items: CartItem[]) => {
  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return Number(total.toFixed(2)); // ensures 2 decimal places
};

const totalPrice = calculateTotalPrice(cartItems);
  
    return (
        <div className="bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[60.61px] text-[#6B7280]">
          <div className='flex flex-row justify-between items-center pb-[20px] w-full h-[48px]'>
              <div className='flex flex-row items-center'>
                <div className='flex flex-row items-center pr-[6px]'>
                  <Link href="/" >
                    <h1 className='pt-30 lg:pt-[22.39px] text-[#9CA3AF] text-[10px] lg:text-[12px] hover:text-[#030712] cursor-pointer'>Home</h1>
                  </Link>
                    <ChevronRight  className='space-x-1 mt-30 lg:mt-[22.39px] w-3 lg:w-4'/>
                </div>
                  <h1 className='pt-30 lg:pt-[22.39px] font-normal text-[#030712] text-[10px] lg:text-[12px]'>Cart</h1>
            </div>		
        </div>
      {cartItems.length > 0 ? (
        <div className='flex lg:flex lg:flex-row flex-col-reverse justify-between mt-8 lg:mt-0 py-8'>
        
        <div className='border-[#E5E7EB]'>    		
        <h1 className="lg:px-4 py-4 border-[#E5E7EB] border-b-1 font-semibold text-[#030712] text-[14px] lg:text-[18px]">Cart ({totalItems})</h1>
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-row justify-between lg:gap-2 mt-6 mb-8 lg:mb-0 border-[#E5E7EB] border-b-1">
              <div>
              <Image src={item.image} alt={item.name} width={24} height={24} className="px-4 w-20 lg:w-24 h-16 lg:h-24 object-cover" />
              <button onClick={() => removeFromCart(item.id)} className="flex bg-[#dc2626] mx-4 my-4 px-2 py-1.5 rounded-md text-[10px] text-white lg:text-[12px]" >
                   <FontAwesomeIcon icon= {faTrashCan} className='mt-0.5 mr-[2px] lg:mr-1 w-2 lg:w-4' />  Remove  
                </button>
              </div>
              <div className="lg:ml-2 lg:pr-72">
                <h2 className="pb-2 lg:pb-4 w-[150px] lg:w-[300px] font-semibold text-[12px] lg:text-[16px]">{item.name}</h2>

                <div className='flex flex-row h-auto'>
                  <Image src="/assets/products/Icon.svg" alt="New Arrival 1" width={50.88} height={11} className='w-[50.88px] h-[11px] object-cover' />
                  <Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[11.35px] h-[11px] object-cover' />
                  <Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[11.35px] h-[11px] object-cover' />
                  <span className='-mt-[7px] lg:-mt-[9px] ml-[4px] lg:ml-[8px] py-[3.5px] pr-[4.63px] pl-[5px] rounded-lg font-bold text-[#030712] text-[11px] lg:text-[13px]'>{item.rating}</span>
                            
                  </div>
                    <div className='hidden lg:flex flex-row pt-2'>
                      <div className='bg-[#16A34A] border border-[#E5E7EB] rounded-lg w-[25px] h-[25px]'>
                        <Image src="/assets/header/cart.svg" alt="cart" width={18.6} height={15} className="my-[5.79px] ml-[4.16px] w-[14.6px] h-[14px]" />
                      </div>
        
                      <h3 className='my-[5.79px] ml-2 font-bold text-[#16A34A] text-[11px]'>In Stock</h3>
                    </div>
            </div>
                
                <div className='lg:pr-18'>
                <p className="pb-8 lg:pb-16 pl-9 text-gray-700">${ Number((item.price * item.quantity).toFixed(2)) }</p>
                <div className='flex'>
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 px-2 py-1 rounded text-gray-700">-</button>
                  <span className="mx-2 my-1">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 px-2 py-1 rounded text-gray-700">+</button>
                </div>
                </div>
          </div>
          ))}

            <Link href="/checkout" className="lg:hidden flex flex-1 justify-center bg-violet-800 px-10 py-3 rounded-lg text-white text-center">Checkout (${totalPrice})</Link>


          </div>

          <div className='lg:ml-8 xl:ml-4 lg:px-6 lg:py-6 lg:border border-[#E5E7EB] rounded-sm w-auto lg:w-[380px] h-max'>
              <h1 className="pt-2 pb-4 border-[#E5E7EB] border-b-1 font-semibold text-[14px] lg:text-[18px]">Cart Summary</h1> 
              <div className='pb-4 lg:pb-10'>
                <h2 className='flex justify-between py-2 text-[14px] lg:text-[18px]'>Subtotal <span>${totalPrice}</span></h2>
                <p className='hidden lg:block py-2 border-[#E5E7EB] border-b-1'> Delivery fees not included yet. </p> 
              </div>
              <Link href="/checkout" className="hidden lg:block bg-violet-800 mx-6 mt-10 px-10 py-3 rounded-lg w-full text-white text-center">Checkout (${totalPrice})</Link>
          </div>
      </div>
      ) : (
        <div className='bg-[#ffff] stroke-[#E5E7EB] mt-24 lg:mt-0 pb-[60.61px] w-auto lg:w-[1920px] lg:h-[552.61px] text-[#6B7280]'>
        <div className='flex flex-col pt-[20px] lg:w-[1440px] lg:h-[472px]'>
            <div className='mx-auto lg:mx-[340px] lg:mt-[73px] lg:w-[760px] h-auto lg:h-[359px]'>
                <Image src="/assets/cart/empty.svg" alt="empty-cart" width={160} height={160} className='mx-auto lg:mx-[300px] w-[60px] lg:w-[160px] h-[60px] lg:h-[160px]'/>
        
                <div className='mx-auto lg:mx-3 mt-[30px] lg:mt-[60px] border border-[#E5E7EB] w-[240px] lg:w-[760px] h-auto lg:h-[61px]'>
                        <h3 className='items-center px-[34px] py-[13px] lg:pr-[220.36px] lg:pl-[236.69px] font-bold text-[#F03E3E] text-[12px] lg:text-[18px]'>Your cart is currently empty.</h3>
                </div>
                  <Link href="/shop" >
                    <button className='flex bg-[#212529] mx-auto mt-[20px] mb-4 lg:ml-[320px] pt-2.5 pr-[17.65px] pb-[13px] pl-[18px] rounded-lg lg:w-auto h-[42px] font-bold text-[#ffff] text-[12px] lg:text-[14px] cursor-pointer'>
                            Return to shop
                    </button> 
                  </Link>
            </div>
        </div>
    </div>
      )}
    </div>
    
  )
}

export default CardList