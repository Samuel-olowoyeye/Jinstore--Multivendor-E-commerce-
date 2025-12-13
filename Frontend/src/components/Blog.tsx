"use client"

import Blogs from '@/Data/Blogs'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



const Blog = () => {

    const [currentPage, setCurrentPage] = useState(1);
      const productsPerPage = 3;


    const totalPages = Math.ceil(Blogs.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentBlogs = Blogs.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);



  return (
    <div className="bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[60.61px] w-full h-auto text-[#6B7280]">
      <div className='flex flex-row justify-between items-center mb-[32px] w-full h-[48px]'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row items-center pr-[6px]'>
            <h1 className='pt-30 lg:pt-[22.39px] text-[#9CA3AF] text-[10px] lg:text-[12px] hover:text-[#030712] cursor-pointer'>Home</h1>
            <ChevronRight className='space-x-1 mt-30 lg:mt-[22.39px] w-3 lg:w-4' />
          </div>
          <h1 className='pt-30 lg:pt-[22.39px] font-normal text-[#030712] text-[10px] lg:text-[12px]'>Blog</h1>
        </div>
      </div>

        <div className='flex flex-row justify-between gap-4 lg:gap-[35px] xl:gap-[45px] mt-16 lg:mt-0'>
            <div>
            {currentBlogs.map((item) => (
                <div key={item.title}>
                    <div >
                        <Image src={item.image} alt="Blog Post 1" width={1012.5} height={700.05} className="lg:w-[960px] xl:w-[1012.5px] h-auto lg:h-[700.05px] object-cover" />
                    </div>
                <div className='pt-[21px]'>
                    <h1 className='w-auto lg:w-[882.41px] h-auto lg:h-[90.79px] font-bold text-[#030712] text-[14px] lg:text-[36px] tracking-tight'>{item.title}</h1>
                    <h3 className='pt-2 lg:pt-[24.8px] w-auto text-[#374151] text-[10px] lg:text-[13px] tracking-tighter'>November 3, 2023 <span className='px-2'></span> {item.location}</h3>
                    <h3 className='mb-4 lg:mb-[54px] pt-4 lg:pt-[21px] w-auto lg:w-[960px] xl:w-[1012.5px] h-auto lg:h-[35.5px] text-[#4B5563] text-[11px] lg:text-[13px] tracking-tight'>{item.description}</h3>

                    
                    <button className='items-center bg-[#634c9f] hover:bg-violet-900 mb-[60px] pt-[8px] lg:pt-[12px] pr-[14px] lg:pr-[17.65px] pb-[8px] lg:pb-[13px] pl-[12px] lg:pl-[18px] rounded-lg font-bold text-[#ffffff] text-[10px] lg:text-[14px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                        Read More
                    </button>
                </div>
            </div>  
            ))}
               
            </div>
           
            {/* RIGHT SIDE */}
            <div>
                <div className='border-[#E5E7EB] border-b'>
                <h2 className='pl-2 font-semibold text-[#030712] text-[12px] lg:text-[14px]'>Blog Post List</h2>

                <div className='flex flex-row gap-2 lg:gap-[20px] pt-[20px]'>
                    <div>
                        <Image src="/assets/blog/blog-post-01-100x100.jpg.svg" alt="Blog Post 1" width={56} height={56} className="rounded-full w-[56px] h-[56px] object-cover" />
                    </div>
                    <div>
                        <h2 className='w-[105.53px] lg:w-[175.53px] h-auto lg:h-[49.81px] font-bold text-[#030712] text-[10px] lg:text-[13px] tracking-tight'>How grocers are approaching delivery as the market evolves</h2>
                        <h3 className='pt-1 lg:pt-[9px] text-[#374151] text-[10px] lg:text-[11px]'>November 3, 2023</h3>
                    </div>
                </div>

                <div className='flex flex-row gap-2 lg:gap-[20px] pt-[20px]'>
                    <div>
                        <Image src="/assets/blog/blog-post-02-100x100.jpg.svg" alt="Blog Post 1" width={56} height={56} className="rounded-full w-[56px] h-[56px] object-cover" />
                    </div>
                    <div>
                        <h2 className='w-[105.53px] lg:w-[175.53px] h-auto lg:h-[49.81px] font-bold text-[#030712] text-[10px] lg:text-[13px] tracking-tight'>The Friday Checkout: Food insecurity keeps retailers off balance</h2>
                        <h3 className='pt-1 lg:pt-[9px] text-[#374151] text-[10px] lg:text-[11px]'>November 3, 2023</h3>
                    </div>
                </div>

                <div className='flex flex-row gap-2 lg:gap-[20px] pt-[20px]'>
                    <div>
                        <Image src="/assets/blog/blog-post-03-100x100.jpg.svg" alt="Blog Post 1" width={56} height={56} className="rounded-full w-[56px] h-[56px] object-cover" />
                    </div>
                    <div>
                        <h2 className='w-[105.53px] lg:w-[175.53px] h-auto lg:h-[49.81px] font-bold text-[#030712] text-[10px] lg:text-[13px] tracking-tighter'>Consumer want grocer to use AI to help them save money Dunnhumby</h2>
                        <h3 className='pt-1 lg:pt-[9px] text-[#374151] text-[10px] lg:text-[11px]'>November 3, 2023</h3>
                    </div>
                </div>

                <div className='flex flex-row gap-2 lg:gap-[20px] pt-[20px]'>
                    <div>
                        <Image src="/assets/blog/blog-post-04-100x100.jpg.svg" alt="Blog Post 1" width={56} height={56} className="rounded-full w-[56px] h-[56px] object-cover" />
                    </div>
                    <div>
                        <h2 className='w-[105.53px] lg:w-[175.53px] h-auto lg:h-[49.81px] font-bold text-[#030712] text-[10px] lg:text-[13px] tracking-tight'>Order up! How grocers are replicating the restaurant experience in retail</h2>
                        <h3 className='pt-1 lg:pt-[9px] pb-[26px] text-[#374151] text-[10px] lg:text-[11px]'>November 3, 2023</h3>
                    </div> 
                    </div>
                </div>
                <div>
                    <h2 className='pt-[25px] pb-[20px] font-semibold text-[#030712] text-[11px] lg:text-[14px]'>Social Media Widget</h2>
                    
                    <div className='flex flex-row items-center bg-[#1877F2] py-[8px] lg:py-[12px] pl-[13.16px] lg:pl-[15.16px] rounded-lg'>
                        <Image src="/assets/blog/facebook.svg" alt="Social Media 1" width={8.56} height={16} className="mr-[10px] w-[7px] lg:w-[8.56px] h-auto lg:h-[16px] object-cover" />
                        <h2 className='font-bold text-[#ffffff] text-[10px] lg:text-[12px]'>facebook</h2>
                    </div>

                    <div className='flex flex-row items-center bg-[#1DA1F2] mt-[12px] py-[8px] lg:py-[12px] pl-[13.16px] lg:pl-[15.16px] rounded-lg'>
                        <Image src="/assets/blog/twitter.svg" alt="Social Media 1" width={16} height={12.99} className="mr-[10px] w-[11px] lg:w-[8.56px] h-auto lg:h-[16px] object-cover" />
                        <h2 className='font-bold text-[#ffffff] text-[10px] lg:text-[12px]'>twitter</h2>
                    </div>

                    <div className='flex flex-row items-center bg-[#FD1D1D] mt-[12px] py-[8px] lg:py-[12px] pl-[13.16px] lg:pl-[15.16px] rounded-lg'>
                        <Image src="/assets/blog/instagram.svg" alt="Social Media 1" width={14} height={14.02} className="mr-[10px] w-[11px] lg:w-[14px] h-auto lg:h-[14.02px] object-cover" />
                        <h2 className='font-bold text-[#ffffff] text-[10px] lg:text-[12px]'>instagram</h2>
                    </div>

                    <div className='flex flex-row bg-[#0077B5] mt-[12px] py-[8px] lg:py-[12px] pl-[13.16px] lg:pl-[15.16px] rounded-lg'>
                        <Image src="/assets/blog/linkedin.svg" alt="Social Media 1" width={14} height={14} className="mr-[10px] w-[12px] lg:w-[14px] h-[11px] lg:h-[14px] object-cover" />
                        <h2 className='font-bold text-[#ffffff] text-[10px] lg:text-[12px]'>linkedin</h2>
                    </div>
                </div> 
            </div>

        </div>

        <div className='items-center mt-4'>
            <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                    if (currentPage === 1) {
                        e.preventDefault(); // Prevent the default action if the button should be disabled
                        return;
                    }
                    paginate(currentPage - 1);
                    }}
                    className={`${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                    }`}
                />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                    <PaginationLink href="#" onClick={() => paginate(index + 1)}>
                    {index + 1}
                    </PaginationLink>
                </PaginationItem>
                ))}
                <PaginationItem>
                <PaginationNext
                    href="#"
                    onClick={(e) => {
                    if (currentPage === totalPages) {
                        e.preventDefault(); // Prevent the default action if the button should be disabled
                        return;
                    }
                    paginate(currentPage + 1);
                    }}
                    className={`${
                    currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
                    }`}
                />
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        </div>
    </div>
  )
}

export default Blog