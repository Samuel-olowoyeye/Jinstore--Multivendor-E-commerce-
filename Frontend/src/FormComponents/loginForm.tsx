"use client"
import React from 'react'
import { ChevronRight} from "lucide-react"
import Link from 'next/link'
import TextInput from './TextInput'
import { useForm } from 'react-hook-form'


const LoginForm = () => {

	const {
			register,
			// handleSubmit,
			// reset,
			formState: { errors },
		} = useForm();

  return (
     <div className='bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[150.61px] text-[#6B7280]'>
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
								<h1 className='pr-[28px] font-semibold text-[#030712] text-[20px] lg:text-[24px]'>Login</h1>
								<Link href='/Registration' ><h1 className='font-semibold text-[#9CA3AF] text-[20px] lg:text-[24px]'>Register</h1></Link>
							</div>
								
								<div>
									<h3 className='pt-[31px] lg:pr-[40.8px] pb-[16px] lg:pl-[41.14px] text-[#030712] text-[12px] text-center tracking-tight'>If you have an account, sign in with your username or email address.</h3>
								</div>
								
								<div>
									<form className='flex flex-col px-[5px]'>
										<TextInput
										label="Username or email address *"
										name="Username or email address"
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
										className="mt-[15.25px] w-full text-[12px]"
										/>

										<div className='flex flex-row justify-between mt-[16.5px]'>
											<div className='flex flex-row items-center'>
												<input type="checkbox" className='mr-2 w-4 h-4'/>
												<label className='text-[#6B7280] text-[12px]'>Remember me</label>
											</div>
											<a href="#" className='text-[#1D4ED8] text-[12px]'>Lost your password?</a>
										</div>

										<button  type="submit" className='bg-[#634c9f] mt-[24px] rounded-lg h-[48px] font-semibold text-[14px] text-white'>Login</button>
									</form>

									
								</div>

				</div>
				</div>
		</div>     
  )
}

export default LoginForm