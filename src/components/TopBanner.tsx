import React from 'react'
import { MoveRight } from 'lucide-react'


const TopBanner = () => (
	<div className='bg-[#ffff] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] py-8 lg:py-[41px] w-full h-auto'>
		<div className='flex gap-4 lg:grid lg:grid-cols-3 lg:overflow-visible overflow-x-auto scroll-smooth scrollbar-hide'>
			<div className='flex-shrink-0 bg-[url("/assets/banner/banner01.svg")] bg-cover bg-no-repeat rounded-xl w-full lg:w-[410px] xl:w-[434px] h-auto'>
				<div className='py-[33px] pl-[20px]'>
					<h3 className='pb-[10px] font-medium text-[#EA580C] text-[10px] lg:text-[12px]'>Only This Week</h3>
					<h1 className='font-bold text-[#111827] text-[18px] lg:text-[22px]'>Quality eggs at an <br /> affordable price</h1>
					<h3 className='mt-[9px] text-[#6B7280] text-[11px] lg:text-[13px]'>Eat one every day</h3>
					<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[28px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
						Shop Now
						<MoveRight className='mr-[15px] w-3 h-3' />	
					</button>
				</div>
			</div>
			<div className='flex-shrink-0 bg-[url("/assets/banner/banner02.svg")] bg-cover bg-no-repeat rounded-xl w-full lg:w-[410px] xl:w-[434px] h-auto'>
				<div className='py-[33px] pl-[20px]'>
					<h3 className='pb-[10px] font-medium text-[#EA580C] text-[10px] lg:text-[12px]'>Only This Week</h3>
					<h1 className='font-bold text-[#111827] text-[18px] lg:text-[22px]'>Snacks that nourishes <br /> our mind and body</h1>
					<h3 className='mt-[9px] text-[#6B7280] text-[11px] lg:text-[13px]'>Shine the morning...</h3>
					<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[28px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
						Shop Now
						<MoveRight className='mr-[15px] w-3 h-3' />	
					</button>
				</div>
			</div>
			<div className='flex-shrink-0 bg-[url("/assets/banner/banner03.svg")] bg-cover bg-no-repeat rounded-xl w-full lg:w-[410px] xl:w-[434px] h-auto'>
				<div className='py-[33px] pl-[20px]'>
					<h3 className='pb-[10px] font-medium text-[#EA580C] text-[10px] lg:text-[12px]'>Only This Week</h3>
					<h1 className='font-bold text-[#111827] text-[18px] lg:text-[22px]'>Unbeatable quality, <br /> unbeatable prices.</h1>
					<h3 className='mt-[9px] text-[#6B7280] text-[11px] lg:text-[13px]'>Only this week. Don’t miss...</h3>
					<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[28px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
						Shop Now
						<MoveRight className='mr-[15px] w-3 h-3' />	
					</button>
				</div>
			</div>
		</div>
	</div>
)

export default TopBanner



