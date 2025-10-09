import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'

const Companies = () => {
  return (
    <div className='bg-[#ffff] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[67.25px] w-full h-auto'>
			{/* Companies Header */}
				<div className='flex flex-row justify-between items-center'>
							<div className='flex lg:flex-row flex-col lg:items-center lg:gap-[16px] w-[240px] lg:w-auto'>
									<h1 className='pt-[32.5px] font-bold text-[#030712] text-[16px] lg:text-[18px]'>Popular Companies</h1>
									<h3 className='pt-2 lg:pt-[38px] text-[#9CA3AF] text-[10px] lg:text-[13px]'>Don&apos;t miss this opportunity at a special discount just for this week.</h3>
							</div>

								<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-[28px] py-[28px] pt-[10px] pb-[10px] pl-[13px] border border-[#9CA3AF] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
												View All
												<MoveRight className='mr-[10px] lg:mr-[15px] w-2 lg:w-3 h-2 lg:h-3' />	
								</button>
							</div> 

			{/* Companies stores  */}
			<div className='flex justify-between items-center gap-2 lg:grid lg:grid-cols-4 mt-[32px] w-full h-auto lg:h-[188px] lg:overflow-visible overflow-x-auto scroll-smooth scrollbar-hide'>
				<div className='flex-col flex-shrink-0 border border-[#E5E7EB] rounded-xl lg:rounded-r-none w-full lg:w-[340px] h-[188px]'>
					<div className='flex flex-row items-center pt-[20px] pl-[20px]'>
					<Image src="/assets/company/person.svg" alt="Amazon Logo" width={72} height={72} className="w-[72px] h-[72px]" />	
					<div className='pl-[20px]'>
							<h1 className='font-bold text-[#030712] text-[12px]'>Machic</h1>
							<h3 className='font-normal text-[#6B7280] text-[12px]'>Featured</h3>

							<div className='flex flex-row pt-[15px]'>
								<Image src="/assets/products/icon.svg" alt="New Arrival 1" width={67.88} height={11} className='w-[67.88px] h-[11px] object-cover' />
								<Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[14.35px] h-[11px] object-cover' />
								<span className='-mt-[3px] pl-[8px] text-[#6b7280] text-[12px]'>41</span>
							</div>
					</div>
					</div>
						<p className='mt-[20px] mr-[21px] ml-[16px] pt-[16px] border-[#E5E7EB] border-t-[1px] font-normal text-[#030712] text-[12px] tracking-tighter'>Good quality product can only be found in good stores</p>	
			</div>	
				<div className='flex-col flex-shrink-0 border border-[#E5E7EB] rounded-xl lg:rounded-none w-full lg:w-[340px] h-[188px]'>
					<div className='flex flex-row items-center pt-[20px] pl-[20px]'>
					<Image src="/assets/company/person.svg" alt="Amazon Logo" width={72} height={72} className="w-[72px] h-[72px]" />	
					<div className='pl-[20px]'>
							<h1 className='font-bold text-[#030712] text-[12px]'>Blonwe</h1>
							<h3 className='font-regular text-[#6B7280] text-[12px]'>Featured</h3>

							<div className='flex flex-row pt-[15px]'>
								<Image src="/assets/products/icon.svg" alt="New Arrival 1" width={67.88} height={11} className='w-[67.88px] h-[11px] object-cover' />
								<Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[14.35px] h-[11px] object-cover' />
								<span className='-mt-[3px] pl-[8px] text-[#6b7280] text-[12px]'>37</span>
							</div>
					</div>
					</div>
						<p className='mt-[20px] mr-[21px] ml-[16px] pt-[16px] border-[#E5E7EB] border-t-[1px] font-normal text-[#030712] text-[12px] tracking-tighter'>All kinds of grocery products are available in our store.</p>	
			</div>	
				<div className='flex-col flex-shrink-0 border border-[#E5E7EB] rounded-xl lg:rounded-none w-full lg:w-[340px] h-[188px]'>
					<div className='flex flex-row items-center pt-[20px] pl-[20px]'>
					<Image src="/assets/company/person.svg" alt="Amazon Logo" width={72} height={72} className="w-[72px] h-[72px]" />	
					<div className='pl-[20px]'>
							<h1 className='font-bold text-[#030712] text-[12px]'>Bacola</h1>
							<h3 className='font-regular text-[#6B7280] text-[12px]'>Featured</h3>

							<div className='flex flex-row pt-[15px]'>
								<Image src="/assets/products/icon.svg" alt="New Arrival 1" width={67.88} height={11} className='w-[67.88px] h-[11px] object-cover' />
								<Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[14.35px] h-[11px] object-cover' />
								<span className='-mt-[3px] pl-[8px] text-[#6b7280] text-[12px]'>35</span>
							</div>
					</div>
					</div>
						<p className='mt-[20px] mr-[21px] ml-[16px] pt-[16px] border-[#E5E7EB] border-t-[1px] font-normal text-[#030712] text-[12px] tracking-tighter'>Our work can definitely support the local economy.</p>	
			</div>	
				<div className='flex-col flex-shrink-0 border border-[#E5E7EB] rounded-xl lg:rounded-l-none w-full lg:w-[340px] h-[188px]'>
					<div className='flex flex-row items-center pt-[20px] pl-[20px]'>
					<Image src="/assets/company/person.svg" alt="Amazon Logo" width={72} height={72} className="w-[72px] h-[72px]" />	
					<div className='pl-[20px]'>
							<h1 className='font-bold text-[#030712] text-[12px]'>Medibazar</h1>
							<h3 className='font-regular text-[#6B7280] text-[12px]'>Featured</h3>

							<div className='flex flex-row pt-[15px]'>
								<Image src="/assets/products/icon.svg" alt="New Arrival 1" width={67.88} height={11} className='w-[67.88px] h-[11px] object-cover' />
								<Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[14.35px] h-[11px] object-cover' />
								<span className='-mt-[3px] pl-[8px] text-[#6b7280] text-[12px]'>30</span>
							</div>
					</div>
					</div>
						<p className='mt-[20px] mr-[21px] ml-[16px] pt-[16px] border-[#E5E7EB] border-t-[1px] font-normal text-[#030712] text-[12px] tracking-tighter'>Save your time – save your money – shop from our grocery store.</p>	
			</div>	
				</div>
				
		</div>
  )
}

export default Companies