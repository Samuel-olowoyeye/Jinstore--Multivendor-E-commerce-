"use client";
import React, { useState } from 'react'
import { Bookmark, ChevronRight, Package} from 'lucide-react'
import { useSelector} from 'react-redux';
import { RootState } from '../store/store';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
//   selectTotalItems,
  CartItem
} from '../Reducers/cartSlice';

const  CheckoutList: React.FC = () => {

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [shippingCost, setShippingCost] = useState(15);

      const calculateTotalPrice = (items: CartItem[]) => {
        return items.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0);

        };
        const subtotal = calculateTotalPrice(cartItems);
        const totalPrice = subtotal + shippingCost;

  return (
    <div className="bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[60.61px] text-[#6B7280]">
      <div className='flex flex-row justify-between items-center mb-16 lg:mb-[32px] w-full h-[48px]'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row items-center pr-[6px]'>
            <h1 className='pt-30 lg:pt-[22.39px] text-[#9CA3AF] text-[11px] lg:text-[12px]'>Home</h1>
            <ChevronRight className='space-x-1 mt-30 lg:mt-[22.39px] w-3 lg:w-4' />
          </div>
          <h1 className='pt-30 lg:pt-[22.39px] font-normal text-[#030712] text-[11px] lg:text-[12px]'>Checkout</h1>
        </div>
      </div>

     
         <div className='flex flex-row items-center gap-2 bg-[#F7F7F7] py-[10px] lg:py-[20px] pr-[20px] pl-[15.6px]'>
            <Bookmark className='w-4 lg:w-5 text-[#EE403D]' />
            <input type="text" placeholder='Have a coupon? Click here to enter your code' className='bg-[#F7F7F7] pt-[4px] lg:pt-[18px] pb-[4px] lg:pb-[19.5px] pl-[17px] border border-[#E5E7EB] w-full lg:placeholder:text-[12.5px] placeholder:text-[#030712] placeholder:text-[10px]' />
         </div>

    <div className='flex lg:flex-row flex-col lg:gap-[30px] mt-5 lg:mt-[26.39px]'>
       <div className='flex flex-col'>
        {/* left side  */}
        <div className='flex flex-row bg-[#FFF5F5] border-[#FCA1A1] border-1 rounded-lg w-full lg:w-[850px] xl:w-[930px]'>
            <div className='flex flex-col pt-[10.87px] lg:pt-[20.87px] pr-[23px] pb-[9px] lg:pb-[19px] pl-[26.55px]'>
                <div className='flex flex-row items-center mb-3 lg:mb-[17.35px]'>
                    <Package className='mr-[9.39px] w-[17px] h-[17px] text-[#030712]' />
                    <h2 className='font-semibold text-[#030712] text-[12px] lg:text-[13px]'>Add <span className='text-[#DC2626] text-[14px] lg:text-[13px]'>$299.11</span> to cart and get free shipping! </h2> 
                </div>
                <span className='bg-[#FEE2E2] border border-[#FEE2E2] rounded-md lg:w-[795px] xl:w-[870px] h-[3.5px] lg:h-[5px]'></span>
            </div> 
            
        </div>

        {/* Form for order */}
        <form>
            <h2 className='pt-5 lg:pt-[10px] font-bold text-[#030712] text-[15px]'>Billing details</h2> 

            <div className='flex lg:flex-row flex-col justify-between pt-[9px] font-normal text-[#030712] text-[13px]'>
                <div className='flex flex-col'>
                    <label >First name *</label>
                    <input type="text" className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[410px] xl:w-[450px] h-[44px]' />
                </div>
                <div className='flex flex-col pt-[17px] lg:pt-0'>
                    <label >Last name *</label>
                    <input type="text" className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[410px] xl:w-[450px] h-[44px]' />
                </div>
            </div>
            <div className='flex flex-col pt-[17px] text-[13px]'>
                    <label className='text-[#030712]'>Company name (optional)</label>
                    <input type="text" className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[44px]' />
            </div>
            <div className='flex flex-col pt-[17px] text-[13px]'>
                    <label className='text-[#030712]'>Country / Region *</label>
                    <input type="text" placeholder='United States (US)' className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[44px] placeholder:text-[#444444] placeholder:text-[14px]' />
            </div>
            <div className='flex flex-col pt-[17px] text-[13px]'>
                    <label className='text-[#030712]'>Street address *</label>
                    <input type="text" placeholder='House number and street name' className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg w-full h-[44px] placeholder:text-[#9CA3AF] placeholder:text-[14px]' />
                    <input type="text" placeholder='Apartment, suite, unit, etc. (optional)' className='mt-[16px] px-5 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[44px] placeholder:text-[#9CA3AF] placeholder:text-[14px]' />
            </div>
            <div className='flex flex-col pt-[17px] text-[13px]'>
                    <label className='text-[#030712]'>Town / City *</label>
                    <input type="text" className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[44px]' />
            </div>
            <div className='flex flex-col pt-[17px] text-[13px]'>
                    <label className='text-[#030712]' >State *</label>
                    <input type="text" placeholder='California' className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[44px] placeholder:text-[#444444] placeholder:text-[14px]' />
            </div>
            <div className='flex flex-col pt-[17px] text-[13px]'>
                    <label className='text-[#030712]' >ZIP Code *</label>
                    <input type="text" className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[44px]' />
            </div>
            <div className='flex flex-col pt-[17px] text-[13px]'>
                    <label className='text-[#030712]'>Phone *</label>
                    <input type="text" className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[44px]' />
            </div>
            <div className='flex flex-col pt-[17px] text-[13px]'>
                    <label className='text-[#030712]'>Email address *</label>
                    <input type="text" className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[44px]' />
            </div>
            <div className='flex flex-row items-center gap-[8px] pt-[17px] text-[13px]'>
                    <input type="checkbox" className='px-4 border-[#D1D5DB] border-1 rounded-lg w-[13px] h-[13px]' />
                    <h2 className='text-[#030712] text-[14px]'>Create an account?</h2>
            </div>
            <div className='flex flex-row items-center gap-[8px] pt-[17px] text-[13px]'>
                    <input type="checkbox" className='px-4 border-[#D1D5DB] border-1 rounded-lg w-[13px] h-[13px]' />
                    <h2 className='font-bold text-[#030712] text-[14px]'>Ship to a different address?</h2>
            </div>
            <div className='flex flex-col mt-[30.99px] mb-12 lg:mb-[77px] text-[13px]'>
                    <label className='text-[#030712]' >Order notes (optional)</label>
                    <input type="text" placeholder='Notes about your order, e.g. special notes for delivery.' className='mt-[7.5px] px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[850px] xl:w-[930px] h-[90px] placeholder:text-[#444444] placeholder:text-[14px]' />
            </div>
        </form>
        {/* left side end */}
    </div>
    
     {/* right side  */}
    <div className='w-full lg:w-[380px] h-auto'>        
     <div className='bg-[#F7F7F7] border-[#E5E7EB] border-1 rounded-sm'>
         <h1 className='pt-[21px] pl-[21px] font-semibold text-[#030712] text-[15px]'>Your order</h1>

        <div className='flex flex-row justify-between mx-[21px] border-[#D1D5DB] border-b'>
            <h3 className='pt-[19px] pb-[12.5px] font-medium text-[#9CA3AF] text-[12px]'>Product</h3>
            <h3 className='pt-[19px] pb-[12.5px] font-medium text-[#9CA3AF] text-[12px]'>Subtotal</h3>
        </div>
        <div>
        {cartItems.map((item, index) => (
            <div key={index} className="flex flex-row justify-between mx-[21px] mt-6 border-[#D1D5DB] border-b">
                    <div>
                        <h2 className="pb-[12.5px] w-[137.97px] font-semibold text-[12px]">{item.description}</h2>
                    </div>   
                     <div>
                        <p className="pb-[12.5px] text-gray-700">$ {item.price * item.quantity}</p>
                    </div>
                  </div>
                  ))}
        </div>

        <div className='flex flex-row justify-between mx-[21px] border-[#D1D5DB] border-b'>
            <h3 className='pt-[39px] pb-[12.5px] font-medium text-[#9CA3AF] text-[12px]'>Shipping:</h3>
            <div className='flex flex-col'>
                
            <RadioGroup
                  defaultValue="flat"
                  onValueChange={(value) =>
                    setShippingCost(value === "flat" ? 15 : 0)
                  }
                >
                  <div className="flex flex-row items-center gap-2">
                    <Label
                      className="pt-[19px] pb-[12.5px] font-medium text-[#9CA3AF] text-[12px]"
                      htmlFor="flat"
                    >
                      Flat rate: $15.00
                    </Label>
                    <RadioGroupItem
                      value="flat"
                      id="flat"
                      className="mt-5 w-[13px] h-[13px]"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-2 pl-5">
                    <Label
                      className="pt-[19px] pb-[12.5px] font-medium text-[#9CA3AF] text-[12px]"
                      htmlFor="pickup"
                    >
                      Local pickup
                    </Label>
                    <RadioGroupItem
                      value="pickup"
                      id="pickup"
                      className="mt-1 w-[16px] h-[16px]"
                    />
                  </div>
                </RadioGroup>
            </div>
        </div>
        <div>
            <div  className="flex flex-row justify-between mx-[21px] mt-6 border-[#D1D5DB] border-b">
                <div>
                    <h2 className="pb-[12.5px] w-[137.97px] font-semibold text-[12px]">Total</h2>
                </div>   
                <div>
                    <p className="pb-[12.5px] text-gray-700">${totalPrice}</p>
                </div>
                  </div>
        </div>


         <div className='pr-[10px] lg:pr-[20.73px] pl-[21px]'>
            <div className='flex flex-row items-center gap-[8px] pt-[17px] pb-[11px]'>
                    <input type="radio" className='border-[#D1D5DB] border-1 rounded-lg w-[16px] h-[16px]' />
                    <h2 className='font-semibold text-[#030712] text-[13px] lg:text-[14px]'>Direct bank transfer</h2>
            </div>

            <h3 className='w-full lg:w-[338.27px] lg:h-[74.5px] text-[#4B5563] text-[12px] lg:text-[13px] leading-6 tracking-tighter lg:tracking-tight'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h3>

            <div className='flex flex-row items-center gap-[8px] mt-4 lg:mt-[39.5px]'>
                    <input type="radio" className='border-[#D1D5DB] border-1 rounded-lg w-[16px] h-[16px]' />
                    <h2 className='font-semibold text-[#030712] text-[13px] lg:text-[14px]'>Check payments</h2>
            </div>

            <div className='flex flex-row items-center gap-[8px] pt-[10px] pb-4 lg:pb-[26px]'>
                    <input type="radio" className='border-[#D1D5DB] border-1 rounded-lg w-[16px] h-[16px]' />
                    <h2 className='font-semibold text-[#030712] text-[12px] lg:text-[14px]'>Cash on delivery</h2>
            </div>

            <h3 className='lg:pb-[19.5px] w-full lg:w-[338.27px] h-[74.5px] text-[#4B5563] text-[12px] lg:text-[13px] leading-6 tracking-tighter lg:tracking-tight'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className ='text-[#374151] underline underline-offset-2 '>privacy policy.</span></h3>

            <div className='flex flex-row gap-[10px] pt-6 lg:pt-[17px]'>
                    <input type="checkbox" className='border-[#D1D5DB] border-1 rounded-lg w-[16px] h-[16px]' />
                    <h2 className='text-[#030712] text-[12px]'>I have read and agree to the website <span className='text-[#634C9F]'>terms and conditions</span>* </h2>
            </div>

            <button className='bg-[#634c9f] hover:bg-violet-900 mt-6 lg:mt-[15px] mb-[21px] pt-[12px] pb-[15px] rounded-lg w-full h-[46px] font-bold text-[#ffffff] text-[14px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                Place order
            </button>

         </div>
     </div>
     </div>    
    </div>
</div>
  )
}

export default CheckoutList


