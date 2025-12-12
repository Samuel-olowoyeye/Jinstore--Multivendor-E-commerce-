import React from 'react'
import Image from 'next/image'
import { ChevronDown  } from "lucide-react"
import Link from 'next/link';
import Carousel from './Carousel';



const Main = () => {

  return (
    <div className='flex flex-row justify-between gap-[30px] bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] w-full text-[#6B7280]'>
			<div className='hidden lg:block mt-6'>
			<Link href="/shop" >
				<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[48px] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/layout.svg" alt="Logo" width={14.69} height={14.71} className="mr-3 w-[14.69px] h-[14.71px]" />
										<h1 className='font-semibold text-[#030712] text-[15px] hover:text-[#634c9f]'>All Categories</h1>
				
										<ChevronDown className='ml-26 w-5'/>
						</div>
				</Link>
			<Link href="/shop?category=fruits-vegetables" >
				<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/apple.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Fruits & Vegetables</h1>
				
										{/* <ChevronRight className='ml-18 w-5'/> */}
						</div>
					</Link>
					<Link href="/shop?category=meats-seafood" >
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/meat.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Meats & Seafood</h1>
				
										{/* <ChevronRight className='ml-22 w-5'/> */}
						</div>
						</Link>
					<Link href="/shop?category=breakfast-dairy" >
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/egg.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Breakfast & Dairy</h1>
				
										{/* <ChevronRight className='ml-19.5 w-5'/> */}
						</div>
						</Link>
					<Link href="/shop?category=breads-bakery" >
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/bread.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold 2xl:text-[15px]'>Breads & Bakery</h1>
				
										{/* <ChevronRight className='ml-23 w-5'/> */}
						</div>
						</Link>
					<Link href="/shop?category=beverages" >
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/cup.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Beverages</h1>
				
										{/* <ChevronRight className='ml-33 w-5'/> */}
						</div>
					</Link>
					<Link href="/shop?category=frozen-foods" >
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/ice.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Frozen Foods</h1>
						</div>
					</Link>
					<Link href="/shop?category=biscuits-snacks" >	
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/snacks.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Biscuits & Snacks</h1>
						</div>
						</Link>
					<Link href="/shop?category=grocery-staples" >	
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/grocery.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Grocery & Staples</h1>
						</div>
					</Link>
					<Link href="/shop?category=household-needs" >	
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/household.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Household Needs</h1>
						</div>
						</Link>
					<Link href="/shop?category=healthcare" >	
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/care.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Healthcare</h1>
						</div>
					</Link>
					<Link href="/shop?category=baby-pregnancy" >	
						<div className='flex flex-row items-center pl-[22px] border border-[#E5E7EB] w-[298px] h-[45px] text-[#030712] hover:text-[#634c9f] transition-all duration-100 ease-in cursor-pointer'>
										<Image src="/assets/hero/icons/baby.svg" alt="Logo" width={17.72} height={20.01} className="mr-3 mb-1 w-[17.72px] h-[20.01px]" />
										<h1 className='font-semibold text-[15px]'>Baby & Pregnancy</h1>
				</div>
			</Link>
			</div>

			<Carousel />
 </div>
  )
}

export default Main

