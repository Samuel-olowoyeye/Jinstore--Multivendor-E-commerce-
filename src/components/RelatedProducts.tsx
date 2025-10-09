import React from 'react'
import Image from 'next/image'
import RelatedProduct from '@/Data/RelatedProducts'
import HeartButton from '@/ButtonComponent/HeartButton'
import Link from 'next/link'

const RelatedProducts = () => {
  return (
    <div className="bg-[#ffff] stroke-[#E5E7EB] pb-[60.61px] w-full h-auto text-[#6B7280]">
          <div className='flex flex-row justify-between lg:grid lg:grid-cols-6 mt-[26px] w-full lg:w-full h-auto lg:h-[383.45px] lg:overflow-visible overflow-x-auto scroll-smooth scrollbar-hide'>
            {RelatedProduct.map((product) => (
              <div key={product.id}  className='flex-shrink-0 border border-[#E5E7EB] w-[226.67px] lg:w-auto h-auto lg:h-[395px]'>
                <div className='relative pt-[13px] lg:pl-[25px]'>
                  <h3 className='inline-flex top-3 left-3 absolute bg-[#DC2626] py-[4px] lg:py-[6px] pr-[7px] lg:pr-[9.68px] pl-[6px] lg:pl-[8px] border rounded-full font-extrabold text-[#FEF2F2] text-[8px] g:text-[10px]'>{product.discount}%</h3>
                  <Link href={`/product/${product.id}`}>
                    <Image src={product.image} alt="New Arrival 1" width={199} height={199} className='mx-auto w-[130px] lg:w-[199px] h-[130px] lg:h-[199px] object-cover' />
                  </Link>
                  <HeartButton product={product} />
                </div>
                <div>
                  <h3 className='px-[12px] lg:px-[12px] pt-[15px] xl:pl-[16px] w-[176.72.3px] h-auto font-regular text-[#030712] text-[13px] lg:text-[14px] tracking-tighter'>{product.name}</h3>
    
                  <div className='flex flex-row px-[12px] lg:px-0 pt-[9px]'>
                    <Image src="/assets/products/icon.svg" alt="New Arrival 1" width={50.88} height={11} className='lg:ml-[12px] xl:ml-[16px] w-[50.88px] h-[11px] object-cover' />
                    <Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[14.35px] h-[11px] object-cover' />
                    <span className='-mt-[3px] pl-[8px] text-[#6b7280] text-[10px] lg:text-[12px]'>{product.rating}</span>
                  </div>
    
                  <div className='flex flex-row px-[12px] lg:px-0 pt-[5px]'>
                      <p className='top-0 mb-[12px] lg:ml-[12px] xl:ml-[16px] font-bold text-[#dc2626] text-[18px] lg:text-[22px]'>${product.price}</p>
                      <p className='ml-[8px] pt-2 font-medium text-[#111827] text-[14.1px] lg:text-[16.1px] line-through'>${product.discountPrice}</p>
                  </div>
                </div>
    
                <div >
                    <div className='flex flex-row px-[12px] lg:px-0 pb-4 lg:pl-[15px]'>
                        <div className='bg-[#16A34A] border border-[#E5E7EB] rounded-lg w-[36px] h-[36px]'>
                          <Image src="/assets/header/cart.svg" alt="cart" width={18.6} height={15} className="my-[9.79px] ml-[7.16px] w-[18.6px] h-[15px]" />
                        </div>
          
                        <h3 className='my-[12.79px] ml-2 font-bold text-[#16A34A] text-[11px]'>In Stock</h3>
                      </div>
                  </div>
                
              </div>
             ))}
    </div>
    </div>
    
  )
}

export default RelatedProducts