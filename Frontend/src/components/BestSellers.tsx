"use client"
import React from 'react'
import Image from 'next/image'
import { MoveRight, Plus } from 'lucide-react'
import BestSellersProducts from '@/Data/BestSellersProducts'
import HeartButton from '@/ButtonComponent/HeartButton'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Reducers/cartSlice'
import Link from 'next/link'
import toast from 'react-hot-toast'


const BestSellers = () => {

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
  
       toast.success("Product Added Successfully"); 
  
      }

  return (
    <div className='bg-[#ffff] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] w-full h-auto'>
          {/* Bestsellers Header */}
        <div className='flex flex-row justify-between items-center'>
              <div className='flex lg:flex-row flex-col lg:items-center lg:gap-[15.49px] w-[240px] lg:w-auto'>
                <h1 className='lg:pt-[32.5px] font-bold text-[#030712] text-[16px] lg:text-[18px]'>Best Sellers</h1>
                <h3 className='pt-2 lg:pt-[38px] text-[#9CA3AF] text-[10px] lg:text-[13px]'>Some of the new products arriving this weeks</h3>
              </div>
            <Link href="/shop" >
              <button className='relative flex flex-row items-center gap-2 lg:gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[28px] py-[28px] pt-[10px] pb-[10px] pl-[13px] border border-[#9CA3AF] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                  View All
                  <MoveRight className='mr-[10px] lg:mr-[15px] w-2 lg:w-3 h-2 lg:h-3' />
              </button>
              </Link>
            </div>
          
          {/* Bestsellers proucts */}
            <div className='grid grid-cols-2 lg:grid-cols-5 mt-[26px] w-full h-auto'>
              {BestSellersProducts.map((product) => (
            
              <div key={product.id}  className='border border-[#E5E7EB] w-auto lg:w-[255px] xl:w-[270px] h-[360px] lg:h-[422.38px]'>
                <div className='relative pt-[13px] pl-[25px]'>
                  <h3 className='inline-flex top-3 left-3 absolute bg-[#DC2626] py-[4px] lg:py-[6px] pr-[7px] lg:pr-[9.68px] pl-[6px] lg:pl-[8px] border rounded-full font-extrabold text-[#FEF2F2] text-[8px] lg:text-[10px]'>{product.discount}%</h3>
                  <Link href={`/product/${product.id}`}>
                  <Image src={product.image} alt="New Arrival 1" width={199} height={199} className='m-auto w-[130px] lg:w-[199px] h-[135px] lg:h-[199px] object-cover cursor-pointer' />
                  </Link>
                  <HeartButton product={product} />
                </div>
                <div>
                  <h3 className='pt-[30px] pr-1.5 pl-[10px] w-auto lg:w-[248.3px] h-auto font-regular text-[#030712] text-[13px] lg:text-[14px] line-clamp-2'>{product.description}</h3>
    
                  <div className='flex flex-row items-center pt-[9px]'>
                    <Image src="/assets/products/Icon.svg" alt="New Arrival 1" width={50.88} height={11} className='ml-[15px] w-[43.88px] lg:w-[50.88px] h-[10px] lg:h-[11px] object-cover' />
                    <Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[10.35px] lg:w-[11.35px] h-[10px] lg:h-[11px] object-cover' />
                    <span className='pl-[8px] text-[#6b7280] text-[10px] lg:text-[12px]'>{product.rating}</span>
                  </div>
    
                  <div className='flex flex-row pt-[5px] pb-[3px]'>
                      <p className='top-0 mb-[12px] ml-[15px] pr-[6px] font-bold text-[#dc2626] text-[18px] lg:text-[22px]'>${product.price}</p>
                      <p className='ml-[2px] pt-2 font-medium text-[#111827] text-[14.1px] lg:text-[16.1px] line-through'>${product.discountPrice}</p>
                  </div>
                </div>
    
                <div className='flex flex-row justify-between'>
                    <button onClick={() => handleAddToCart(product)}  className='flex flex-row justify-between items-center bg-[#FFFFFF] hover:bg-[#634C9F] mx-2 ml-[15px] pt-[6px] lg:pt-[9px] pr-[15px] pb-[6px] lg:pb-[9px] pl-[10px] lg:pl-[15px] border border-[#634C9F] rounded-full w-full lg:w-[220px] font-medium text-[#634C9F] text-[11px] lg:text-[13px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                      Add to cart
                      <Plus className='w-[16px] h-[16px]' />
                    </button>
                  </div>
              </div>
             ))}
        </div>

        

          {/* New Arrival banners  */}
          <div className='hidden lg:block lg:py-[32px]'>
            <Image src="/assets/products/banner.svg" alt="arrow Image" width={1360} height={85} className="w-full h-[85px] object-center" />
          </div> 
      </div>
  )
}

export default BestSellers