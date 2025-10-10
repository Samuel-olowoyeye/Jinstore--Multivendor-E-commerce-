"use client";

import React, { useState } from 'react';
import {  ChevronRight, Plus } from "lucide-react";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectSavedItems } from '../Reducers/itemSlice';
import { RootState } from '../store/store';
import HeartButton from '@/ButtonComponent/HeartButton';
import Link from 'next/link';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const SavedItem = () => {

  const savedItems = useSelector((state: RootState) => selectSavedItems(state));

  const [currentPage, setCurrentPage] = useState(1);
      const productsPerPage = 8;


    const totalPages = Math.ceil(savedItems.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentSavedItems = savedItems.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[60.61px] text-[#6B7280]">
      <div className='flex flex-row justify-between items-center lg:pb-[20px] w-full h-[48px]'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row items-center pr-[6px]'>
            <h1 className='pt-30 lg:pt-[22.39px] text-[#9CA3AF] text-[10px] lg:text-[12px] hover:text-[#030712] cursor-pointer'>Home</h1>
            <ChevronRight className='space-x-1 mt-30 lg:mt-[22.39px] w-4' />
          </div>
          <h1 className='pt-30 lg:pt-[22.39px] font-normal text-[#030712] text-[10px] lg:text-[12px]'>Saved Item</h1>
        </div>
      </div>

      {currentSavedItems.length > 0 ? (
        <div className='flex flex-row justify-between mt-12 lg:mt-0 py-2 lg:py-8'>
          <div className='border-[#E5E7EB]'>
          <div className='grid grid-cols-2 lg:grid-cols-4 mx-2'>
            {currentSavedItems.map((item, index) => (
              <div key={index} className='mt-4 w-full lg:w-[1360px] h-auto lg:h-[422.38px]'>
                <div className='shadow-md border border-[#E5E7EB] w-auto lg:w-[290px] xl:w-[300px] lg:h-[422.38px]'>
                  <div className='relative pt-[13px] pl-[25px]'>
                    <h3 className='inline-flex top-3 left-3 absolute bg-[#DC2626] py-[4px] lg:py-[6px] pr-[7px] lg:pr-[9.68px] pl-[6px] lg:pl-[8px] border rounded-full font-extrabold text-[#FEF2F2] text-[8px] lg:text-[10px]'>
                      {item.discount}%
                    </h3>
                    <Image src={item.image} alt={item.name} width={199} height={199} className='mx-auto w-[130px] lg:w-[199px] h-[130px] lg:h-[199px] object-cover' />
                    <HeartButton product={item} />
                  </div>

                  <div>
                    <h3 className='pt-[10px] pr-1.5 pl-[15px] xl:pl-[18px] w-auto h-auto font-regular text-[#030712] text-[13px] lg:text-[16px] line-clamp-2'>{item.name}</h3>

                    <div className='flex flex-row items-center pt-[9px]'>
                      <Image src="/assets/products/Icon.svg" alt="icon" width={50.88} height={11} className='ml-[15px] xl:ml-[18px] w-[45.88px] lg:w-[50.88px] h-[10px] lg:h-[11px] object-cover' />
                      <Image src="/assets/products/star.svg" alt="star" width={14.35} height={11} className='w-[10.35px] lg:w-[14.35px] h-[10px] lg:h-[11px] object-cover' />
                      <span className='pl-[8px] text-[#6b7280] text-[12px]'>{item.rating}</span>
                    </div>

                    <div className='flex flex-row pt-[5px] pb-[3px]'>
                      <p className='top-0 mb-[12px] ml-[15px] xl:ml-[18px] pr-[6px] font-bold text-[#dc2626] text-[18px] lg:text-[22px]'>${item.price}</p>
                      <p className='pt-2 font-medium text-[#111827] text-[14.1px] lg:text-[16.1px] line-through'>${item.discountPrice}</p>
                    </div>
                  </div>

                  <div className='flex flex-row justify-between mx-3'>
                    <button className='flex flex-row justify-between items-center bg-[#FFFFFF] hover:bg-[#634C9F] mb-[15px] pt-[6px] lg:pt-[9px] pr-[15px] pb-[6px] lg:pb-[9px] pl-[10px] lg:pl-[15px] border border-[#634C9F] rounded-full w-full font-medium text-[#634C9F] text-[11px] lg:text-[13px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
                      Add to cart
                      <Plus className='w-[13px] lg:w-[16px] h-[13px] lg:h-[16px]' />
                    </button>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
        </div>
      ) : (
        <div className='bg-[#ffff] stroke-[#E5E7EB] mt-24 lg:mt-0 pb-[60.61px] lg:w-[1920px] lg:h-[552.61px] text-[#6B7280]'>
          <div className='flex flex-col pt-[20px] lg:w-[1440px] lg:h-[472px]'>
            <div className='mx-auto lg:mx-[340px] lg:mt-[73px] lg:w-[760px] h-auto lg:h-[359px]'>
              <Image src="/assets/cart/favorite.svg" alt="empty-cart" width={120} height={120} className='mx-auto lg:mx-[300px] w-[60px] lg:w-[160px] h-[60px] lg:h-[160px]' />
              <div className='mx-auto lg:mx-3 mt-[30px] lg:mt-[60px] border border-[#E5E7EB] w-[260px] lg:w-[760px] h-auto lg:h-[61px]'>
                <h3 className='items-center px-[36px] py-[13px] lg:pr-[220.36px] lg:pl-[236.69px] font-bold text-[#F03E3E] text-[12px] lg:text-[18px]'>
                  You haven’t saved any item yet.
                </h3>
              </div>
              <Link href="/shop" >
              <button className='flex bg-[#212529] mx-auto mt-[20px] mb-4 lg:ml-[320px] pt-2.5 pr-[17.65px] pb-[13px] pl-[18px] rounded-lg lg:w-auto h-[42px] font-bold text-[#ffff] text-[12px] lg:text-[14px] cursor-pointer'>
                Return to shop
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}


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
  );
};

export default SavedItem;















