import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="bg-[#ffff] stroke-[#E5E7EB] text-[#6B7280] w-full h-auto lg:px-[80px] xl:px-[280px] 2xl:px-[600px] pb-[60.61px] " >
        <div className='text-center items-center py-[90px]'>
            <Image src="/assets/hero/banner/boxes.svg" alt="hero-banner" width={873} height={376} className='w-[873px] h-[376px] mx-[250px]' />
            <h1 className='text-[56px] text-[#030712] mt-[12.39px] font-bold'>That Page Cant Be Found</h1>
            <h3 className='text-[18px] text-[#6B7280] pt-[11px] pb-[33px]'>It looks like nothing was found at this location. Maybe try to <br /> search for what you are looking for?</h3>
            <Link href="/" >
            <button className='text-[14px] items-center font-bold bg-[#634c9f] text-[#ffffff] pt-[12px] pb-[13px] pl-[18px] pr-[17.65px] rounded-lg mt-[15.5px] 
                hover:bg-violet-900 hover:text-[#FFFFFF] transition-all ease-in duration-100 cursor-pointer '>
                Go To Homepage
            </button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound