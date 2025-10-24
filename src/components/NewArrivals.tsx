"use client"
import React from 'react'
import Image from 'next/image'
import NewArrivalsProducts from '@/Data/NewArrivalsProducts'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Reducers/cartSlice'
import { MoveRight } from 'lucide-react';
// import { useParams } from 'next/navigation';
import Link from 'next/link';


const NewArrivals = () => {

  	const dispatch = useDispatch();
  
  return (
    <div className='bg-[#ffff] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] w-full h-auto'>
			{/* New Arrivals Header */}
		<div className='flex flex-row justify-between items-center'>
					<div className='flex lg:flex-row flex-col lg:items-center lg:gap-[16px] w-[240px] lg:w-auto'>
						<h1 className='lg:pt-[32.5px] font-bold text-[#030712] text-[16px] lg:text-[18px]'>New Arrivals</h1>
						<h3 className='pt-2 lg:pt-[38px] text-[#9CA3AF] text-[10px] lg:text-[13px]'>Don&apos;t miss this opportunity at a special discount just for this week.</h3>
					</div>
				<Link href="/shop" >
					<button className='flex flex-row items-center gap-2 lg:gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[28px] py-[28px] pt-[10px] pb-[10px] pl-[13px] border border-[#9CA3AF] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
							View All
							<MoveRight className='mr-[10px] lg:mr-[15px] w-2 lg:w-3 h-2 lg:h-3' />	
					</button>
				</Link>
				</div>
			
			{/* New Arrival proucts */}
			<div className='lg:flex lg:flex-row justify-between items-center grid grid-cols-2 mt-[26px] w-full h-auto'>
					
				{NewArrivalsProducts.map((product) => (

					<div key={product.id} className='border border-[#E5E7EB] w-auto lg:w-[227px] h-auto'>
					<div className='relative pt-[13px] pl-[28px]'>
						<h3 className='inline-flex top-3 left-3 absolute bg-[#DC2626] py-[4px] lg:py-[6px] pr-[7px] lg:pr-[9.68px] pl-[6px] lg:pl-[8px] border rounded-full font-extrabold text-[#FEF2F2] text-[8px] lg:text-[10px]'>{product.discount}%</h3>
						<Link href={`/product/${product.id}`}>
						<Image src={product.image} alt="New Arrival 1" width={177} height={177} className='mx-auto w-[130px] lg:w-[177px] h-[130px] lg:h-[177px] object-cover cursor-pointer' />
						</Link>
					</div>
					<div>
						<Image src={product.badge} alt="New Arrival 1" width={80.19} height={24} className='ml-[15px] w-[60.19px] lg:w-[80.19px] h-[20px] lg:h-[24px] object-cover' />

						<h3 className='pt-[10px] pr-1.5 pl-[15px] w-auto h-auto font-regular text-[#030712] text-[13px] lg:text-[14px] line-clamp-2'>{product.name}</h3>

						<div className='flex flex-row items-center pt-[15px]'>
							<Image src="/assets/products/Icon.svg" alt="New Arrival 1" width={50.88} height={11} className='ml-[15px] w-[43.88px] lg:w-[50.88px] h-[10px] lg:h-[11px] object-cover' />
							<Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[10.35px] lg:w-[11.35px] h-[10px] lg:h-[11px] object-cover' />
							<span className='pl-[8px] text-[#6b7280] text-[10px] lg:text-[12px]'>{product.rating}</span>
						</div>

						<div className='flex flex-row pt-[10px]'>
									<p className='top-0 mb-[12px] ml-[15px] pr-[6px] font-bold text-[#dc2626] text-[18px] lg:text-[22px]'>${product.price}</p>
									<p className='pt-2 font-medium text-[#111827] text-[14.1px] lg:text-[16.1px] line-through'>${product.discountPrice}</p>
							</div>
					</div>

					<button onClick={() => dispatch(addItemToCart({ ...product, id: String(product.id), quantity: 1 }))} className='items-center bg-[#FFFFFF] hover:bg-[#634C9F] mb-[15px] ml-[15px] pt-[6px] lg:pt-[9px] pr-[70px] xl:pr-[117px] pb-[6px] lg:pb-[9px] pl-[10px] lg:pl-[15px] border-[#634C9F] border-1 rounded-full font-medium text-[#634C9F] text-[11px] lg:text-[13px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
						Add to cart
					</button>

					</div>

				))}
			</div>
			
			
			{/* New Arrival banners */}
		<div className="py-8">
			{/* Wrapper: scrollable on mobile, grid on large screens */}
			<div className="flex gap-4 lg:grid lg:grid-cols-4 lg:overflow-visible overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar">
				
				{/* Banner 1 */}
				<div className="flex-shrink-0 w-[260px] lg:w-[307px] xl:w-[317px] h-[357px] lg:h-[397px]">
					<div>
							<h3 className='pt-[20px] pl-[20px] font-medium text-[#EA580C] text-[10px] lg:text-[12px]'>Only This Week</h3>
							<h1 className='pt-[10px] pl-[20px] font-bold text-[#111827] lg:text-[20px] text-lg tracking-tighter'>Provides you experienced <br /> quality products</h1>
							<h3 className='mt-[9px] pl-[20px] text-[#6B7280] text-[11px] lg:text-[13px]'>Feed your family the best</h3>
						<Link href="/shop" >
							<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[19px] ml-[20px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
									Shop Now 
								<MoveRight className='mr-[15px] w-3 h-3' />	
							</button>
						</Link>
					</div>
				</div>

				{/* Banner 2 */}
				<div className="flex-shrink-0 bg-[url('/assets/products/banner05.svg')] bg-cover bg-no-repeat rounded-lg w-[260px] lg:w-[307px] xl:w-[317px] h-[357px] lg:h-[397px]">
					<div>
							<h3 className='pt-[20px] pl-[20px] font-medium text-[#EA580C] text-[10px] lg:text-[12px]'>Only This Week</h3>
							<h1 className='pt-[10px] pl-[20px] font-bold text-[#111827] lg:text-[20px] text-lg tracking-tighter'>Shopping with us for better <br /> quality and the best price</h1>
							<h3 className='mt-[9px] pl-[20px] text-[#6B7280] text-[11px] lg:text-[13px]'>Only this week. Don’t miss...</h3>
							<Link href="/shop" >
							<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[19px] ml-[20px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
									Shop Now 
								<MoveRight className='mr-[15px] w-3 h-3' />	
							</button>
						</Link>
					</div>
				</div>

				{/* Banner 3 */}
				<div className="flex-shrink-0 bg-[url('/assets/products/banner06.svg')] bg-cover bg-no-repeat rounded-lg w-[260px] lg:w-[307px] xl:w-[317px] h-[357px] lg:h-[397px]">
					<div>
							<h3 className='pt-[20px] pl-[20px] font-medium text-[#EA580C] text-[10px] lg:text-[12px]'>Only This Week</h3>
							<h1 className='pt-[10px] pl-[20px] font-bold text-[#111827] lg:text-[20px] text-lg tracking-tighter'>Get the best quality products <br /> at the lowest prices</h1>
							<h3 className='mt-[9px] pl-[20px] text-[#6B7280] text-[11px] lg:text-[13px]'>A different kind of grocery store</h3>
							<Link href="/shop" >
							<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[19px] ml-[20px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
									Shop Now 
								<MoveRight className='mr-[15px] w-3 h-3' />	
							</button>
						</Link>
					</div>
				</div>

				{/* Banner 4 */}
				<div className="flex-shrink-0 bg-[url('/assets/products/banner07.svg')] bg-cover bg-no-repeat rounded-lg w-[260px] lg:w-[307px] xl:w-[317px] h-[357px] lg:h-[397px]">
				<div>
							<h3 className='pt-[20px] pl-[20px] font-medium text-[#EA580C] text-[10px] lg:text-[12px]'>Only This Week</h3>
							<h1 className='pt-[10px] pl-[20px] font-bold text-[#111827] lg:text-[20px] text-lg tracking-tighter'>Where you get your all favorite <br /> brands under one roof</h1>
							<h3 className='mt-[9px] pl-[20px] text-[#6B7280] text-[11px] lg:text-[13px]'>Only this week. Don’t miss...</h3>
							<Link href="/shop" >
							<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[19px] ml-[20px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
									Shop Now 
								<MoveRight className='mr-[15px] w-3 h-3' />	
							</button>
						</Link>
					</div>
				</div>

			</div>
		</div>
		
    </div>
  )
}

export default NewArrivals





  
