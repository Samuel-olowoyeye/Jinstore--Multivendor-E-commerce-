import { Mail, PhoneCall } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#E5E7EB] h-auto lg:h-[699.33px] px-4  lg:px-[80px] xl:px-[280px] 2xl:px-[600px] '>
        <div className='flex lg:flex-row flex-col justify-between items-center  pb-[68px] border-b-[1.5px] border-[#D1D5DB]'>
            <div className=''>
              <h1 className='lg:text-[20px text-[18px] mt-[50px] font-bold text-[#030712] tracking-wider '>Join our newsletter for £10 offs</h1>
              <h3 className='lg:text-[13px] text-[11px] text-[#6b7280] px-3 lg:px-0 pt-1 lg:pt-0 leading-[19.5px]'> Register now to get latest updates on promotions & <br />coupons. Don’t worry, we not spam!</h3>
            </div>
            <div className='mx-16 lg:mx-0'>
              <div className='flex flex-row items-center relative mt-[32px] lg:mt-[56.27px]'>
                <Mail className='lg:top-3 top-1.5 left-3 absolute text-[#9CA3AF] w-[16px] items-center lg:ml-1' />
                <input type="email" placeholder=' Enter your email' className='lg:w-[344.89px] w-[224.89px] h-[36px] lg:h-[48px]  rounded-l-xl border-[2px] border-[#D1D5DB] pl-[30px] lg:pl-[45px] lg:text-[16px] text-[12px] placeholder:text-[#9CA3AF]  placeholder:lg:text-[14px] placeholder:text-[12px] font-bold ' /> 
                <button className='lg:text-[14px] text-[12px] font-bold pl-[17.11px] pr-[18.58px] py-[3.43px] text-[#FFFFFF] bg-[#634C9F] w-auto h-[36px] lg:h-[48px] rounded-r-xl '>SEND</button>
              </div>
              <p className='lg:text-[11px] text-[10px] text-[#6B7280] pt-[10.75px] '>By subscribing you agree to our <span className='text-[#634C9F]'>Terms & Conditions and Privacy & Cookies Policy.</span> </p>
            </div>
        </div>

        <div className='lg:flex lg:flex-row grid grid-cols-2 w-full gap-10 lg:gap-0 px-4 lg:px-0 items-center justify-between pt-[51px] pb-[50px] border-b-[1.5px] border-[#D1D5DB]'>
          <div className='w-[190px] lg:w-[320px] lg:h-[252.3px] h-auto '>
            <h1 className='text-[#030712] text-[14px] font-semibold '>Do You Need Help ?</h1>
            <h3 className='text-[#6b7280] lg:text-[13px] text-[12px] pt-[19.25px] pb-[36.75px] tracking-tighter leading-[19.5px]'>Autoseligen syr. Nek diarask fröbomba. Nör <br />antipol kynoda nynat. Pressa fåmoska.</h3>

          <div className=''>
            <div className='text-[#111827] flex flex-row gap-[14px] lg:gap-[17px]'>
              <PhoneCall className='w-4 h-4 lg:w-6 lg:h-6' />
              <div className='flex flex-col '>
                <h3 className='lg:text-[12px] text-[10px] pb-[1px] '>Monday-Friday: 08am-9pm</h3>
                <h1 className='text-[16px] lg:text-[20px] font-bold'>0 800 300-353</h1>
              </div>
            </div>

            <div className='text-[#111827] flex flex-row space-x-[17px] pt-[30.5px]'>
              <Mail className='w-4 h-4 lg:w-6 lg:h-6'/>
              <div className='flex flex-col '>
                <h3 className='lg:text-[12px] text-[10px] pb-[1px] '>Need help with your order?</h3>
                <h1 className='text-[12px] lg:text-[14px] font-semibold'>info@example.com</h1>
              </div>
            </div>
          </div>
          
          </div>
          
          <div className=' w-[150.5px] lg:w-[252.5px] h-[252.3px] tracking-tighter'>
              <h1 className='text-[#030712] text-[14px] font-semibold'>Make Money with Us</h1>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[19px]'>Sell on Grogin</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Sell Your Services on Grogin</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Sell on Grogin Business</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Sell Your Apps on Grogin</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Become an Affilate</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Advertise Your Products</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Sell-Publish with Us</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[8px]'>Become an Blowwe Vendor</p>
          </div>       
          
          <div className='w-[150.5px] lg:w-[252.5px] h-[252.3px] tracking-tighter'>
              <h1 className='text-[#030712] text-[14px] font-semibold'>Let Us Help You</h1>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[19px]'>Accessibility Statement</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Your Orders</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Returns & Replacements</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Shipping Rates & Policies</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Refund and Returns Policy</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Privacy Policy</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Terms and Conditions</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[8px]'>Cookie Settings</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[8px]'>Help Center</p>
          </div>
          
            <div className='w-[150.5px] lg:w-[252.5px] h-[252.3px] tracking-tighter'>
              <h1 className='text-[#030712] text-[14px] font-semibold'>Get to Know Us</h1>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[19px]'>Careers for Grogin</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>About Grogin</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Inverstor Relations</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Grogin Devices</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Customer reviews</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Social Responsibility</p>
              <p className='text-[#4B5563] lg:text-[13px] text-[12px] pt-[6px]'>Store Locations</p>
          </div>
          
          <div className='w-[220px]'>
              <h1 className='text-[#030712] text-[14px] font-semibold'>Download our app</h1>
              <div className='flex flex-row mt-[20px]'>
                <Image src="/assets/footer/google.svg" alt="google play" width={120} height={38.92} className='xl:w-[120px] lg:w-[90px] h-[38.92px] object-fit  ' />
                  
                  <p className='text-[10px] text-[#6B7280] pl-[15px] tracking-tighter '>Download App Get <br /> -10% Discount</p>
                
              </div>
              <div className='flex flex-row  mt-[10px]'>
                <Image src="/assets/footer/appstore.svg" alt="app store" width={120} height={38.92} className='xl:w-[120px] lg:w-[90px] h-[38.92px] object-fit ' />
                  
                  <p className='text-[10px] text-[#6B7280] pl-[15px] pt-[2px] tracking-tighter '>Download App Get <br /> -20% Discount</p>
                
              </div>
              
              
              <p className='pt-[50px] text-[12px] text-[#111827] tracking-tighter'> Follow us on social media:</p>
                <div className='flex flex-row'>
                    <Image src="/assets/footer/facebook.svg" alt="facebook" width={36} height={36} className='w-[36px] h-[36px] object-cover pt-[10px] pr-[4px] rounded-md ' />
                    <Image src="/assets/footer/twitter.svg" alt="twitter" width={36} height={36} className='w-[36px] h-[36px] object-cover pt-[10px] pr-[4px] ' />
                    <Image src="/assets/footer/instagram.svg" alt="instagram" width={36} height={36} className='w-[36px] h-[36px] object-cover pt-[10px] pr-[4px] ' />
                    <Image src="/assets/footer/linkedin.svg" alt="linkedin" width={36} height={36} className='w-[36px] h-[36px] object-cover pt-[10px] pr-[4px] ' />
                </div>
          </div>
        </div>

        <div className='flex lg:flex-row flex-col  px-4 lg:px-4 justify-between mt-[32px] lg:mt-[50.28px]'>
            <div>
              <p className='text-[#6B7280] text-[11px] lg:text-[12px]'>Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by <span className='text-[#634C9F] font-bold'>BlackRise Themes.</span></p>
              <div className='flex flex-row lg:gap-0 gap-2 px-4 lg:px-0 '>
                <Image src="/assets/footer/visa.svg" alt="visa" width={41} height={13} className='w-[41px] h-[13px] object-cover mr-[10px] mt-[23.86px]' />
                <Image src="/assets/footer/mastercard.svg" alt="mastercard" width={24} height={15} className='w-[24px] h-[15px] object-cover mr-[10px] mt-[22.86px] ' />
                <Image src="/assets/footer/paypal.svg" alt="paypal" width={53} height={15} className='w-[53px] h-[15px] object-cover mr-[10px] mt-[24.56px]' />
                <Image src="/assets/footer/skrill.svg" alt="skrill" width={41} height={15} className='w-[41px] h-[15px] object-cover mr-[10px] mt-[22.86px] ' />
                <Image src="/assets/footer/klarna.svg" alt="klarna" width={64} height={15} className='w-[64px] h-[15px] object-cover mt-[22.86px]' />
              </div>
            </div>
                 
            <div className='flex flex-row space-x-[8px] justify-start my-[32px] lg:gap-0 gap-1 lg:my-0'>
                 <p className='text-[11px] lg:text-[12px] text-[#111827] underline underline-offset-2'>Terms and Conditions</p>
                  <p className='text-[11px] lg:text-[12px] underline underline-offset-2'>Privacy Policy</p>
                  <p className='text-[11px] lg:text-[12px] underline underline-offset-2'>Order Tracking</p>
            </div>
        </div>

    </div>
  )
}

export default Footer