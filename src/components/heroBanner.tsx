import Image from 'next/image'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='bg-[#ffff] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] w-full h-auto'>
			<div className='flex lg:flex flex-row lg:flex-row pb-[16px] border-[#E5E7EB] border-b-1 overflow-x-auto scroll-smooth scrollbar-hide'>
			 
        <div className='flex flex-row flex-shrink-0'>
					<Image src="/assets/hero/banner/group1.svg" alt="hero-banner" width={56} height={56} className='mt-[72px] w-[28px] lg:w-[56px] h-[30px] lg:h-[56px]' />
					<div className='mt-[42px] pl-[8px] lg:pl-[20px]'>
						<h2 className='mb-[6px] font-bold text-[#030712] text-[13px] lg:text-[16px]'>Payment only online</h2>
						<p className='w-36 lg:w-60 xl:w-64 text-[#6b7280] text-[10px] lg:text-[13px]'>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
					</div>
				</div>
        <div className='flex flex-row flex-shrink-0'>
					<Image src="/assets/hero/banner/Group.svg" alt="hero-banner" width={56} height={56} className='mt-[72px] w-[28px] lg:w-[56px] h-[30px] lg:h-[56px]' />
					<div className='mt-[42px] pl-[8px] lg:pl-[20px]'>
						<h2 className='mb-[6px] font-bold text-[#030712] text-[13px] lg:text-[16px]'>New stocks and sales</h2>
						<p className='w-36 lg:w-60 xl:w-64 text-[#6b7280] text-[10px] lg:text-[13px]'>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
					</div>
				</div>
	

        <div className='flex flex-row flex-shrink-0'>
					<Image src="/assets/hero/banner/fruits.svg" alt="hero-banner" width={56} height={56} className='mt-[72px] w-[28px] lg:w-[56px] h-[30px] lg:h-[56px]' />
					<div className='mt-[42px] pl-[8px] lg:pl-[20px]'>
						<h2 className='mb-[6px] font-bold text-[#030712] text-[13px] lg:text-[16px]'>Quality assurance</h2>
						<p className='w-36 lg:w-60 xl:w-64 text-[#6b7280] text-[10px] lg:text-[13px]'>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
					</div>
				</div>
        <div className='flex flex-row flex-shrink-0'>
					<Image src="/assets/hero/banner/drive.png" alt="hero-banner" width={56} height={56} className='mt-[72px] w-[28px] lg:w-[56px] h-[30px] lg:h-[56px]' />
					<div className='mt-[42px] pl-[8px] lg:pl-[20px]'>
						<h2 className='mb-[6px] font-bold text-[#030712] text-[13px] lg:text-[16px]'>Delivery from 1 hour</h2>
						<p className='w-36 lg:w-60 xl:w-64 text-[#6b7280] text-[10px] lg:text-[13px]'>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
					</div>
				</div>
				</div>
    </div>
  )
}

export default HeroBanner


