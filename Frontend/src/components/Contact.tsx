import { MapPin } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div>
        <div className="bg-[#ffff] stroke-[#E5E7EB] mt-8 lg:mt-0 px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[60.61px] w-full h-auto text-[#6B7280]">
            <div className='border-[#E5E7EB] border-b-1 text-center'>
               <p className='pt-[62.39px] font-bold text-[11px] lg:text-[13px]'>Contact With Us</p> 
               <h1 className='pt-2 font-bold text-[#030712] text-[32px] lg:text-[56px]'>You can ask us questions</h1>
               <p className='pt-2 text-[#030712] text-[13px] lg:text-[15px]'>Contact us for all your questions and opinions, or you can solve your</p>
               <p className='pt-2 pb-[60px] text-[#030712] text-[13px] lg:text-[15px]'>problems in a shorter time with our contact offices.</p>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-[85px] xl:gap-[174.4px] pt-[62px]'>
                <div>
                    <div>
                        <h2 className='pb-[9.25px] font-semibold text-[#030712] text-[18px] lg:text-[22px]'>Our Offices</h2>
                        <h3 className='w-auto lg:w-[638.67px] h-[58.5px] text-[12px] lg:text-[13px] tracking-tight'>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.</h3>
                    </div>
                    <div className='flex flex-row gap-2 lg:gap-[86.66px] pt-[50.75px] border-[#E5E7EB] border-b-2'>
                        <div className='flex flex-row gap-[14.41px]'>
                            <MapPin className='w-5 text-[#030712]'/>
                            <div className='flex flex-col'>
                                <h3 className='text-[#030712] text-[10px] lg:text-[12px]'>United States</h3>
                                <h2 className='pb-2 font-medium text-[#030712] text-[16px] lg:text-[18px]'>United States Office</h2>
                                <h3 className='pb-4 text-[#4B5563] text-[11px] lg:text-[13px]'>205 Middle Road, 2nd Floor, New York</h3>
                                <h1 className='pb-[3px] font-semibold text-[#030712] text-[14px] lg:text-[16px]'>+02 1234 567 88</h1>
                                <h3 className='pb-[50px] text-[#2563EB] text-[12px] lg:text-[14px]'>info@example.com</h3>
                            </div>
                        </div>
                        <div className='flex flex-row gap-[14.41px]'>
                            <MapPin className='w-5 text-[#030712]'/>
                            <div className='flex flex-col'>
                                <h3 className='text-[#030712] text-[10px] lg:text-[12px]'>Munich</h3>
                                <h2 className='pb-2 font-medium text-[#030712] text-[16px] lg:text-[18px]'>Munich States Office</h2>
                                <h3 className='pb-4 text-[#4B5563] text-[11px] lg:text-[13px]'>205 Middle Road, 2nd Floor, New York</h3>
                                <h1 className='pb-[3px] font-semibold text-[#030712] text-[14px] lg:text-[16px]'>+5 456 123 22</h1>
                                <h3 className='pb-[50px] text-[#2563EB] text-[12px] lg:text-[14px]'>contact@example.com</h3>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-row items-center pt-[61.5px] pb-[63.5px] lg:pb-[133.5px]'>
                        <h3 className='pr-[9.64px] text-[#4B5563] text-[12px]'>Follow us:</h3>
                        <div className='flex flex-row gap-[5px]'>
                            <Image src="/assets/contact/facebook.svg" alt="facebook" width={32} height={32} className='w-[32px] h-[32px] object-cover' />
                            <Image src="/assets/contact/twitter.svg" alt="twitter" width={32} height={32} className='w-[32px] h-[32px] object-cover' />
                            <Image src="/assets/contact/instagram.svg" alt="instagram" width={32} height={32} className='w-[32px] h-[32px] object-cover' />
                            <Image src="/assets/contact/linkedin.svg" alt="linkedin" width={32} height={32} className='w-[32px] h-[32px] object-cover' />
                        </div>
                    </div>
                </div>
                
                <div className='pt-1'>
                    <h3 className='w-auto lg:w-[532.35px] h-[33.8px] text-[#6B7280] text-[13px] tracking-tight'>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam
                    inte loba även om prerade i garanterad traditionell specialitet till bebel.</h3>

                    <div className='flex lg:flex-row flex-col lg:gap-[30px] pt-[60.43px] lg:pt-[20.43px]'>
                        <div className='flex flex-col'>
                            <label className ='pb-[5px] text-[13px] text-[#030712]'>Your name *</label>
                            <input type="text" className='border-[#D1D5DB] border-2 rounded-lg w-auto lg:w-[258.3px] h-[42px]'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className ='pb-[5px] pt-4 lg:pt-0 text-[13px] text-[#030712]'>Your email *</label>
                            <input type="email" className='border-[#D1D5DB] border-2 rounded-lg w-auto lg:w-[258.3px] h-[42px]'  />
                        </div>
                    </div>
                    <div className='flex flex-col pt-5'>
                            <label className ='pb-[5px] text-[13px] text-[#030712]'>Subject *</label>
                            <input type="email" className='border-[#D1D5DB] border-2 rounded-lg w-auto lg:w-[546.59px] h-[42px]'  />
                    </div>

                    <div className='flex flex-col pt-4'>
                            <label className ='pb-[5px] text-[13px] text-[#030712]'>Your message</label>
                            <input type="text" className='border-[#D1D5DB] border-2 rounded-lg w-auto lg:w-[546.59px] h-[90px]'  />
                    </div>

                    <button className='items-center bg-[#634c9f] hover:bg-violet-900 mt-[15.5px] pt-[12px] pr-[17.65px] pb-[13px] pl-[18px] rounded-lg font-bold text-[#ffffff] text-[14px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                        Send Message
                    </button>

                </div>
                
            </div>

        </div>
            <div className='bg-[#ffff] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[74.99px] w-full h-auto'>
                <div className='flex gap-4 lg:grid lg:grid-cols-4 lg:overflow-visible overflow-x-auto scroll-smooth scrollbar-hide'>
                    <div className='flex flex-row flex-shrink-0'>
                                <Image src="/assets/hero/banner/group1.svg" alt="hero-banner" width={56} height={56} className='mt-[48px] w-[56px] h-[56px]' />
                                <div className='mt-[42px] pl-[20px]'>
                                    <h2 className='mb-[6px] font-bold text-[#030712] text-[16px]'>Payment only online</h2>
                                    <p className='text-[#6b7280] text-[13px]'>Tasigförsamhet beteendedesign. Mobile <br />checkout. Ylig kärrtorpa.</p>
                                </div>
                            </div>
                    <div className='flex flex-row flex-shrink-0'>
                                <Image src="/assets/hero/banner/group.svg" alt="hero-banner" width={56} height={56} className='mt-[48px] w-[56px] h-[56px]' />
                                <div className='mt-[42px] pl-[20px]'>
                                    <h2 className='mb-[6px] font-bold text-[#030712] text-[16px]'>New stocks and sales</h2>
                                    <p className='text-[#6b7280] text-[13px]'>Tasigförsamhet beteendedesign. Mobile <br />checkout. Ylig kärrtorpa.</p>
                                </div>
                            </div>
                    <div className='flex flex-row flex-shrink-0'>
                                <Image src="/assets/hero/banner/fruits.svg" alt="hero-banner" width={56} height={56} className='mt-[48px] w-[56px] h-[56px]' />
                                <div className='mt-[42px] pl-[20px]'>
                                    <h2 className='mb-[6px] font-bold text-[#030712] text-[16px]'>Quality assurance</h2>
                                    <p className='text-[#6b7280] text-[13px]'>Tasigförsamhet beteendedesign. Mobile <br />checkout. Ylig kärrtorpa.</p>
                                </div>
                            </div>
                    <div className='flex flex-row flex-shrink-0'>
                                <Image src="/assets/hero/banner/drive.png" alt="hero-banner" width={56} height={56} className='mt-[48px] w-[56px] h-[56px]' />
                                <div className='mt-[42px] pl-[20px]'>
                                    <h2 className='mb-[6px] font-bold text-[#030712] text-[16px]'>Delivery from 1 hour</h2>
                                    <p className='text-[#6b7280] text-[13px]'>Tasigförsamhet beteendedesign. Mobile <br />checkout. Ylig kärrtorpa.</p>
                                </div>
                            </div>
                            </div>
                    </div>
    </div>
  )
}

export default Contact