import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AlmostFinished = () => {
  return (
    <div className="bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[60.61px] text-[#6B7280]">
    
    <div className='flex flex-row justify-between items-center lg:pb-[20px] w-full h-[48px]'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row items-center pr-[6px]'>
            <Link href="/" >
            <h1 className='pt-30 lg:pt-[22.39px] text-[#9CA3AF] text-[10px] lg:text-[12px] hover:text-[#030712] cursor-pointer'>Home</h1>
            </Link>
            <ChevronRight className='space-x-1 mt-30 lg:mt-[22.39px] w-4' />
          </div>
          <h1 className='pt-30 lg:pt-[22.39px] font-normal text-[#030712] text-[10px] lg:text-[12px]'>Almost Finished</h1>
        </div>
      </div>
    
    
    <div className='bg-[#ffff] stroke-[#E5E7EB] mt-24 lg:mt-0 pb-[60.61px] lg:w-[1920px] lg:h-[552.61px] text-[#6B7280]'>
          <div className='flex flex-col pt-[20px] lg:w-[1440px] lg:h-[472px]'>
            <div className='mx-auto lg:mx-[340px] lg:mt-[73px] lg:w-[760px] h-auto lg:h-[359px]'>
              <Image src="/assets/hero/banner/boxes.svg" alt="empty-cart" width={200} height={460} className='mx-auto lg:mx-[140px] w-[180px] lg:w-[460px] h-[80px] lg:h-[200px]' />
              <div className='mx-auto lg:mx-3 mt-[30px] lg:mt-[60px] border border-[#E5E7EB] w-[260px] lg:w-[760px] h-auto lg:h-[61px]'>
                <h3 className='items-center px-[36px] py-[13px] lg:pr-[160.36px] lg:pl-[166.69px] font-bold text-[#F03E3E] text-[12px] lg:text-[18px] text-center'>
                  still working on the ui for the almost finished page 
                </h3>
              </div>
              <Link href="/shop" >
              <button className='flex bg-[#212529] mx-auto mt-[20px] mb-4 lg:ml-[320px] pt-2.5 pr-[17.65px] pb-[13px] pl-[18px] rounded-lg lg:w-auto h-[42px] font-bold text-[#ffff] text-[12px] lg:text-[14px] cursor-pointer'>
                Return to shop
              </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AlmostFinished