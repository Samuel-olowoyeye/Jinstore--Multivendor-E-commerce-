import React from 'react'
import {ChevronRight} from "lucide-react"
import Link from 'next/link'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import TextInput from './TextInput'
import { useForm } from 'react-hook-form'


const RegisterForm = () => {

	const {
				register,
				// handleSubmit,
				// reset,
				formState: { errors },
			} = useForm();
	

  return (
    <div className='bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[167.61px] w-full h-auto text-[#6B7280]'>
        <div className='flex flex-row justify-between items-center pb-[20px] w-full h-[48px]'>
                <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center pr-[6px]'>
                <h1 className='pt-30 lg:pt-[22.39px] text-[#9CA3AF] text-[10px] lg:text-[12px] hover:text-[#030712] cursor-pointer'>Home</h1>
                <ChevronRight  className='space-x-1 mt-30 lg:mt-[22.39px] w-3 lg:w-4'/>
            </div>
                <h1 className='pt-30 lg:pt-[22.39px] font-normal text-[#030712] text-[10px] lg:text-[12px]'>My account</h1>
        </div>		
        </div>
				
				
        <div className='lg:mx-[440px] mt-[66px] lg:mt-[106px] lg:w-[480px] lg:h-[593px]'>
            <div>
                <div className='flex flex-row justify-center font-semibold'>
                    <Link href='/Login'><h1 className='pr-[28px] font-semibold text-[#9CA3AF] text-[20px] lg:text-[24px]'>Login</h1></Link>
                    <h1 className='font-semibold text-[#030712] text-[20px] lg:text-[24px]'>Register</h1>
                </div>
                        
								<div>
										<h3 className='pt-[31px] lg:pr-[40.8px] pb-[16px] lg:pl-[41.14px] text-[#030712] text-[12px] text-center tracking-tight'>There are many advantages to creating an account: the payment process is faster, shipment tracking is possible and much more.</h3>
								</div>
                        
								<div>
										<form className='flex flex-col px-[5px]'>
											 <TextInput
												label="Username *"
												name="username"
												type='text'
												register={register}
												errors={errors}
												className="mt-[15.25px] w-full"
												/>

											<TextInput
												label="Email address *"
												name="email Address"
												type='email'
												register={register}
												errors={errors}
												className="mt-[15.25px] w-full"
												/>

											<TextInput
												label="Password"
												name="password"
												type='password'
												register={register}
												errors={errors}
												className="mt-[15.25px] w-full"
												/> 

												<div className='flex flex-col justify-between mt-[16.5px]'>
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
														<p className='pt-[17px] text-[#030712] text-[12px] lg:text-[13px] leading-[19.5px] tracking-tight'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-[#634C9F]'>privacy policy.</span></p>
												</div>

												<button type="submit" className='bg-[#634c9f] mt-[35px] rounded-lg h-[48px] font-semibold text-[13px] text-white lg:text-[14px]'>Register</button>
										</form>
								</div>

            </div>
        </div>
	</div>     
  )
}

export default RegisterForm