import React from 'react'
import { ChevronDown } from "lucide-react"

 const Buttomnav = () => {
  return (
    <div className='hidden lg:flex flex-row justify-between bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] border-[#E5E7EB] border-b-1 w-full h-[41px] text-[#6B7280]'>
        <div className='flex flex-row pt-[12.5px] pb-[13.5px] font-medium text-[10px] lg:text-[12px]'>
            <h2  className='pr-[14.6px]'>About us</h2>
            <h2 className='pr-[14.6px]'>My account</h2>
            <h2 className='hidden lg:block lg:pr-[13.67px]'>wishlist</h2>
            <span className='hidden lg:block lg:border lg:border-[#E5E7EB]'></span>
            <p className='hidden lg:block lg:px-[15px]'>We deliver to you every day from <span className='lg:mr-[534.15px] xl:mr-[604.15px] font-extrabold text-[#EA580C]'>7:00 to 23:00</span></p>
        </div>
        <div className='flex flex-row gap-[8px] lg:gap-[14.6px] pt-[12.5px] pb-[13.5px] font-medium text-[10px] lg:text-[12px]'>   
          <div className='flex flex-row'>
              <h2>English</h2>
              <ChevronDown className='pb-1.5'/>
          </div>
          <div className='hidden lg:flex lg:flex-row'>
              <h2>USD</h2>
              <ChevronDown className='pb-1.5'/>
          </div>
          <div>
              <h2>Order Tracking</h2>
          </div>
        </div>
        
    </div>
  )
}
export default Buttomnav


