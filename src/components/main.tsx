import React from 'react'
import Image from 'next/image'
import { ChevronRight, ChevronDown  } from "lucide-react"


const Main = () => {

  return (
    <div className='flex flex-row justify-between gap-[30px] bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] w-full text-[#6B7280]'>
 <div className='hidden lg:block mt-6'>
        <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[48px]'>
                    <Image src="/assets/hero/icons/layout.svg" alt="Logo" width={14.69} height={14.71} className="mr-3 w-[14.69px] h-[14.71px]" />
                    <h1 className='font-semibold text-[#030712] text-[15px]'>All Categories</h1>
        
                    <ChevronDown className='ml-26 w-5'/>
            </div>
        <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/apple.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Fruits & Vegetables</h1>
        
                    <ChevronRight className='ml-18 w-5'/>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/meat.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Meats & Seafood</h1>
        
                    <ChevronRight className='ml-22 w-5'/>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/egg.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Breaksfast & Dairy</h1>
        
                    <ChevronRight className='ml-19.5 w-5'/>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/bread.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold 2xl:text-[15px]'>Breads & Bakery</h1>
        
                    <ChevronRight className='ml-23 w-5'/>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/cup.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Beverages</h1>
        
                    <ChevronRight className='ml-33 w-5'/>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/ice.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Frozen Foods</h1>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/snacks.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Biscuits & Snacks</h1>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/grocery.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Grocery & Staples</h1>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/household.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Household Needs</h1>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/care.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Healthcare</h1>
            </div>
            <div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
                    <Image src="/assets/hero/icons/baby.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
                    <h1 className='font-semibold text-[15px]'>Baby & Pregnancy</h1>
        </div>
        </div>
        
        
		<div className='mt-18 lg:mt-6 w-full'>
			<div className='relative'>
					<Image src="/assets/hero/sliders/slider-01.jpg.svg" alt="" width={540} height={540} className='w-full h-[540px] object-cover' />

					<div className='top-18 lg:top-20 left-4 lg:left-14 absolute'>
					<Image src="/assets/hero/sliders/header.svg" alt="Slider Image" width={124.2} height={25} className="w-[84.2px] lg:w-[124.2px] h-[20px] lg:h-[25px] object-cover font-semibold" />
					<h1 className='mt-[9px] font-bold text-[#39245f] text-[26px] lg:text-[42px] lg:leading-[50.4px] tracking-normal'>Get the best quality <br /> products at the lowest <br /> prices</h1>

					<h3 className='mt-[8.39px] w-[250.2px] lg:w-[420.2px] text-[#030712] text-[12px] lg:text-[16px]'>We have prepared special discounts for you on grocery products. Don&#39;t miss these opportunities...</h3>

					<div className='flex flex-cols'>
						<button className='items-center bg-[#634c9f] hover:bg-violet-900 mt-[41px] pt-[8px] lg:pt-[12px] pr-[26.89px] lg:pr-[48.89px] pb-[9px] lg:pb-[13px] pl-[10px] lg:pl-[18px] rounded-lg font-bold text-[#ffffff] text-[12px] lg:text-[14px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
							Shop Now 
						</button>
							<div className='flex flex-col mt-[37px] pl-3 lg:pl-4'>
								<div className='flex flex-row'>
												<p className='top-0 pr-[6px] font-bold text-[#dc2626] text-[22px] lg:text-[28px]'>$27.99</p>
												<p className='pt-2 font-medium text-[#111827] text-[14.8px] lg:text-[19.8px] line-through'>$56.67</p>
								</div>
									<p className='text-[#030712] text-[10px] lg:text-[11px]'>Don&#39;t miss this limited time offer.</p>
							</div>
					</div>
			</div>
			
			</div>
			
			
			</div>
 </div>
  )
}

export default Main