import React from 'react'
import { ChevronRight} from "lucide-react"
import Link from 'next/link'


const LoginForm = () => {
  return (
     <div className='bg-[#ffff] stroke-[#E5E7EB] text-[#6B7280] px-4 lg:px-[80px] xl:px-[280px] 2xl:px-[600px] pb-[150.61px]'>
				<div className='flex flex-row justify-between w-full h-[48px] items-center pb-[20px]'>
						<div className='flex flex-row items-center '>
                    <div className='flex flex-row pr-[6px] items-center'>
                        <h1 className='text-[#9CA3AF] hover:text-[#030712] lg:text-[12px] text-[10px] pt-[22.39px] cursor-pointer '>Home</h1>
                        <ChevronRight  className='lg:w-4 w-3 space-x-1 mt-[24px] lg:mt-[22.39px]'/>
                    </div>
                    	<h1 className='text-[#030712] font-normal lg:text-[12px] text-[10px] pt-[22.39px] '>My account</h1>
            	</div>		
				</div>
				
				
				<div className='lg:w-[480px]  lg:h-[593px] lg:mx-[440px] mt-[66px] lg:mt-[106px] '>
						<div>
							<div className='flex flex-row justify-center font-semibold'>
								<h1 className='text-[#030712] font-semibold text-[20px] lg:text-[24px] pr-[28px]'>Login</h1>
								<Link href='/Registration' ><h1 className='text-[#9CA3AF] font-semibold text-[20px] lg:text-[24px]'>Register</h1></Link>
							</div>
								
								<div>
									<h3 className='text-center text-[#030712] text-[12px] lg:pl-[41.14px] lg:pr-[40.8px] pt-[31px] pb-[16px] tracking-tight '>If you have an account, sign in with your username or email address.</h3>
								</div>
								
								<div>
									<form className='flex flex-col px-[5px]'>
										<label className='text-[#6B7280] pt-[15.25px] pb-[5.75px] text-[13px]'>Username or email address *</label>
										<input type="text" className='border-1 border-[#E5E7EB] rounded-lg  h-[42px] mt-[8px] px-4'/>

										<label className='text-[#6B7280] text-[12px] mt-[15.25px]'>Password</label>
										<input type="password" className='border-1 border-[#E5E7EB] rounded-lg h-[42px] mt-[8px] px-4' />

										<div className='flex flex-row justify-between mt-[16.5px]'>
											<div className='flex flex-row items-center'>
												<input type="checkbox" className='w-4 h-4 mr-2'/>
												<label className='text-[#6B7280] text-[12px]'>Remember me</label>
											</div>
											<a href="#" className='text-[#1D4ED8] text-[12px]'>Lost your password?</a>
										</div>

										<button type="submit" className='bg-[#634c9f] text-white font-semibold text-[14px] h-[48px] rounded-lg mt-[24px]'>Login</button>
									</form>
								</div>

				</div>
				</div>
		</div>     
  )
}

export default LoginForm