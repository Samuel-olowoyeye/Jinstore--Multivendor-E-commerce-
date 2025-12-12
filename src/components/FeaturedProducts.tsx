"use client"
import React from 'react'
import Image from 'next/image'
import {  MoveRight, Plus } from 'lucide-react'
import FeaturedProduct from '@/Data/FeaturedProduct'
import HeartButton from '@/ButtonComponent/HeartButton'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Reducers/cartSlice'
import Link from 'next/link'
import toast from 'react-hot-toast'


const FeaturedProducts = () => {

  const dispatch = useDispatch();

  interface Product {
  id: string;
  image: string;
  badge: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discount: number;
  rating: number;
}

	const handleAddToCart = (product: Product) => {
		 dispatch(addItemToCart({ ...product, id: String(product.id), quantity: 1 }));

		 toast.success("Product Added to Cart Successfully"); 

		}

  return (
    <div className='bg-[#ffff] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] w-full h-auto'>
          {/* Featured products Header */}
        <div className='flex flex-row justify-between items-center'>
              <div className='flex lg:flex-row flex-col lg:items-center lg:gap-[16px] w-[240px] lg:w-auto'>
                <h1 className='pt-[32.5px] font-bold text-[#030712] text-[16px] lg:text-[18px]'>Featured Products</h1>
                <h3 className='pt-2 lg:pt-[38px] text-[#9CA3AF] text-[10px] lg:text-[13px]'>Do not miss the current offers until the end of March.</h3>
              </div>
            <Link href="/shop" >
              <button className='flex flex-row items-center gap-2 lg:gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[28px] py-[28px] pt-[10px] pb-[10px] pl-[13px] border border-[#9CA3AF] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                  View All
                  <MoveRight className='mr-[10px] lg:mr-[15px] w-2 lg:w-3 h-2 lg:h-3' />	
              </button>
            </Link>
            </div>
          
          {/* Featured products*/}
            <div className='justify-between items-center grid grid-cols-1 lg:grid-cols-3 mt-[26px] w-full h-auto'>

            {FeaturedProduct.map((product) => (
                <div key={product.id} className='border border-[#E5E7EB] w-auto lg:w-[423.33px] xl:w-[450.33px] h-[280.17] lg:h-[331.17px]'>
                  <div className='flex flex-row'>
                  {/* left part */}
                  <div className='relative mr-[10px] pt-[13px] pl-[28px]'>
                    <h3 className='inline-flex top-3 left-3 absolute bg-[#DC2626] py-[4px] lg:py-[6px] pr-[7px] lg:pr-[9.68px] pl-[6px] lg:pl-[8px] border rounded-full font-extrabold text-[#FEF2F2] text-[8px] lg:text-[10px]'>{product.discount}%</h3>
                    <Link href={`/product/${product.id}`}>
                    <Image src={product.image} alt="New Arrival 1" width={183.67} height={243.67} className='w-[183.67px] h-[180.67px] lg:h-[243.67px] object-cover cursor-pointer' />
                    </Link>
                    <HeartButton product={product} />
                  
                  </div>
                  {/* right part */}
                  <div>
                    <h3 className='px-[15px] pt-[10px] w-auto lg:w-[230.4px] h-auto font-regular text-[#030712] text-[13px] lg:text-[14px] tracking-tighter'>{product.name}</h3>
                    <div className='flex flex-row items-center pt-[15px]'>
                      <Image src="/assets/products/Icon.svg" alt="New Arrival 1" width={50.88} height={11} className='ml-[15px] w-[43.88px] lg:w-[50.88px] h-[10px] lg:h-[11px] object-cover' />
                      <Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[10.35px] lg:w-[11.35px] h-[10px] lg:h-[11px] object-cover' />
                      <Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[10.35px] lg:w-[11.35px] h-[10px] lg:h-[11px] object-cover' /> 
                      <span className='pl-[8px] text-[#6b7280] text-[10px] lg:text-[12px]'>{product.rating}</span>
                    </div>
      
                    <div className='flex flex-row pt-[10px]'>
                            <p className='top-0 mb-[12px] ml-[15px] pr-[6px] font-bold text-[#dc2626] text-[18px] lg:text-[22px]'>${product.price}</p>
                            <p className='ml-[2px] pt-2 font-medium text-[#111827] text-[14.1px] lg:text-[16.1px] line-through'>${product.discountPrice}</p>
                      </div>
                    <div className='flex flex-row justify-between lg:mx-3 mr-6 ml-3'>
                        <button  onClick={() => handleAddToCart(product)} className='flex flex-row justify-between items-center bg-[#FFFFFF] hover:bg-[#634C9F] mb-[15px] pt-[6px] lg:pt-[9px] pr-[15px] pb-[6px] lg:pb-[9px] pl-[10px] lg:pl-[15px] border border-[#634C9F] rounded-full w-full font-medium text-[#634C9F] text-[11px] lg:text-[13px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                          Add to cart
                          <Plus className='w-[13px] lg:w-[16px] h-[13px] lg:h-[16px]' />
                        </button>
                      </div>
                  </div>
                </div>
                  <div className='flex flex-row items-center ml-[15px]'>
                    <Image src="/assets/products/span.badge.svg" alt="New Arrival 1" width={80.19} height={24} className='mt-[10px] w-[80.19çpx] h-[24px]' />
                    <div className='z-40 -mt-6'>
                      <h3 className='ml-[62px] text-[#9CA3AF] text-[10px] lg:text-[11px]'> Remains until the end of the offer </h3>
                      <Image src="/assets/products/626.svg" alt="New Arrival 1" width={32} height={14} className='ml-[76px] w-[30px] lg:w-[32px] h-[12px] lg:h-[14px]' />
                    </div>
                  </div>
                </div>
               
              ))}
            </div>
               
          {/* Featured products banners  */}
          <div className='flex justify-between gap-2 lg:grid lg:grid-cols-2 py-8 lg:overflow-visible overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar'>
                <div className='flex-row flex-shrink-0 bg-[url("/assets/products/banner08.svg")] bg-cover bg-no-repeat bg-center rounded-lg w-full lg:w-[626px] xl:w-[666px] h-[227.23px] lg:h-[280.5px]'>
                  <div>
                      <h3 className='inline-flex bg-[#FFEDD5] mt-[30px] lg:mt-[50px] ml-[30px] px-[10px] py-[4px] rounded-full font-semibold text-[#7C2D12] text-[10px] lg:text-[12px]'>Only This Week</h3>
                      <h1 className='pt-[15px] pl-[30px] font-extrabold text-[#111827] text-[18px] lg:text-[28px] leading-8 tracking-tighter'>Make your grocery <br /> shopping easy with us</h1>
                      <h3 className='mt-[9px] pl-[30px] text-[#6B7280] text-[11px] lg:text-[13px]'>Only this week. Don’t miss...</h3>
                    <Link href="/shop" >
                      <button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[19px] ml-[30px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                          Shop Now 
                        <MoveRight className='mr-[15px] w-3 h-3' />	
                      </button>
                    </Link>  
                  </div>
                </div>
                <div className='flex-row flex-shrink-0 bg-[url("/assets/products/banner09.svg")] bg-cover bg-no-repeat bg-center rounded-lg w-full lg:w-[626px] xl:w-[666px] h-[227.23px] lg:h-[280.5px]'>
                    <div>
                        <h3 className='inline-flex bg-[#FFEDD5] mt-[30px] lg:mt-[50px] ml-[30px] px-[10px] py-[4px] rounded-full font-semibold text-[#7C2D12] text-[10px] lg:text-[12px]'>Only This Week</h3>
                        <h1 className='pt-[15px] pl-[30px] font-extrabold text-[#111827] text-[18px] lg:text-[28px] leading-8 tracking-tighter'>Get your everyday <br /> needs here with us</h1>
                        <h3 className='mt-[9px] pl-[30px] text-[#6B7280] text-[13px]'>Only this week. Don’t miss...</h3>
                        <Link href="/shop" >
                      <button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[19px] ml-[30px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                          Shop Now 
                        <MoveRight className='mr-[15px] w-3 h-3' />	
                      </button>
                    </Link>  
                    </div>
                </div>
                
        </div> 
        </div>
  )
}

export default FeaturedProducts