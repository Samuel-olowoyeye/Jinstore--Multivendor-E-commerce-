import React from 'react'

const topnav = () => {
  return (
    <div className='bg-[#634c9f] w-full h-[41px] lg:text-[12px] text-[9px] text-center text-[#ffff] lg:flex lg:flex-row px-4 lg:px-[80px] xl:px-[280px] 2xl:px-[600px]'>
        <div className='py-[11.5px] lg:pl-[100px] xl:pl-[150px]' >
            <p className='font-semibold lg:pr-[194.1px]'>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
        </div>
        <div className='lg:flex justify-center' >
            <p className='font-medium py-[3px]'>  Until the end of the sale:
            <span className='text-[18px] items-center font-bold pl-[13.6px] p-9 pr-[4.39px]'>47</span> <span className='text-[11px] pr-[7.66px] py-2 font-normal '>days </span>
            <span className='text-[18px] font-bold pr-[3.02px] '>06</span> <span className='text-[11px] pr-[7.64px]  font-normal'>hours </span>
            <span className='text-[18px] font-bold  pr-[4.09px]'>55</span> <span className='text-[11px] pr-[7.67px] font-normal'>minutes</span> 
            <span className='text-[18px] font-bold  pr-[3.5px]'>51</span> <span className='text-[11px]  font-normal'>sec.</span>
            </p>
        </div>
    </div>
  )
}

export default topnav