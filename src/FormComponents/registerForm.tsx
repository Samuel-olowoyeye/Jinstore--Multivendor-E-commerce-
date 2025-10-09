import React from 'react'
import {ChevronRight} from "lucide-react"
import Link from 'next/link'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const RegisterForm = () => {
  return (
    <div className='bg-[#ffff] stroke-[#E5E7EB] w-full h-auto text-[#6B7280] px-4 lg:px-[80px] xl:px-[280px] 2xl:px-[600px] pb-[167.61px]'>
        <div className='flex flex-row justify-between w-full h-[48px] items-center pb-[20px] '>
                <div className='flex flex-row items-center '>
            <div className='flex flex-row pr-[6px] items-center'>
                <h1 className='text-[#9CA3AF] hover:text-[#030712] lg:text-[12px] text-[10px] pt-[22.39px] cursor-pointer '>Home</h1>
                <ChevronRight  className='lg:w-4 w-3 space-x-1 mt-[24px] lg:mt-[22.39px]'/>
            </div>
                <h1 className='text-[#030712] font-normal lg:text-[12px] text-[10px] pt-[22.39px] '>My account</h1>
        </div>		
        </div>
				
				
        <div className='lg:w-[480px] lg:h-[593px] lg:mx-[440px] mt-[66px] lg:mt-[106px] '>
            <div>
                <div className='flex flex-row justify-center font-semibold'>
                    <Link href='/Login'><h1 className='text-[#9CA3AF] font-semibold text-[20px] lg:text-[24px] pr-[28px]'>Login</h1></Link>
                    <h1 className='text-[#030712] font-semibold text-[20px] lg:text-[24px]'>Register</h1>
                </div>
                        
								<div>
										<h3 className='text-center text-[#030712] text-[12px] lg:pl-[41.14px] lg:pr-[40.8px] pt-[31px] pb-[16px] tracking-tight'>There are many advantages to creating an account: the payment process is faster, shipment tracking is possible and much more.</h3>
								</div>
                        
								<div>
										<form className='flex flex-col px-[5px]'>
												<label className='text-[#6B7280] pt-[15.25px] pb-[5.75px] text-[13px]'>Username *</label>
												<input type="text" className='border-1 border-[#E5E7EB] rounded-lg  h-[42px] mt-[8px] px-4'/>

												<label className='text-[#6B7280] pt-[15.25px] pb-[5.75px] text-[13px]'>Email address *</label>
												<input type="email" className='border-1 border-[#E5E7EB] rounded-lg  h-[42px] mt-[8px] px-4'/>

												<label className='text-[#6B7280] text-[12px] mt-[15.25px]'>Password</label>
												<input type="password" className='border-1 border-[#E5E7EB] rounded-lg h-[42px] mt-[8px] px-4' />

												<div className='flex flex-col justify-between mt-[16.5px] '>
													<RadioGroup defaultValue="option-one">
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="option-one" id="option-one" />
																<Label className='text-[#030712] text-[13px]' htmlFor="option-one">I am a customer</Label>
															</div>
															<div className="flex items-center space-x-2">
																<RadioGroupItem value="option-two" id="option-two" />
																<Label className='text-[#030712] text-[13px]' htmlFor="option-two"> I am a vendor</Label>
															</div>
													</RadioGroup>
														<p className='text-[#030712] text-[12px] lg:text-[13px] pt-[17px] leading-[19.5px] tracking-tight'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-[#634C9F]'>privacy policy.</span></p>
												</div>

												<button type="submit" className='bg-[#634c9f] text-white font-semibold text-[13px] lg:text-[14px] h-[48px] rounded-lg mt-[35px]'>Register</button>
										</form>
								</div>

            </div>
        </div>
	</div>     
  )
}

export default RegisterForm