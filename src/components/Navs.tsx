"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const Navs = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  

  // Function to determine if the nav is active based on current path
  const isActive = (nav: string) => {
    switch (nav) {
      case 'Home':
        return pathname === '/';
      case 'Shop':
        return pathname.startsWith('/shop') && !category;
      case 'Fruits & Vegetables':
        return pathname.startsWith("/shop") && category === "fruits-vegetables"; 
      case 'Beverages':
        return pathname.startsWith("/shop") && category === "beverages";
      case 'Blog':
        return pathname.startsWith('/blog');
      case 'Contact':
        return pathname.startsWith('/contact');
      case 'Trending Products':
        return pathname.startsWith('/trending-products'); 
        case 'Almost Finished':
        return pathname.startsWith('/almost-finished'); 
        return false;
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Fruits & Vegetables', href: "/shop?category=fruits-vegetables" },
    { label: 'Beverages',href: "/shop?category=beverages" },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Trending Products', href: '/trending-products' },
    { label: 'Almost Finished', href: '/almost-finished', sale: true },
  ];

  return (
    <div className='hidden lg:flex lg:flex-row bg-[#ffff] stroke-[#E5E7EB] lg:px-[80px] 2xl:px-[600px] xl:px-[280px] w-full text-[#6B7280]'>
      <div className='flex flex-row justify-between border-[#E5E7EB] border-b w-full'>
        <div className='flex flex-row items-center'>
          {navItems.slice(0, 6).map((item) => (
            <div key={item.label} className='mr-[20px] cursor-pointer'>
              <Link href={item.href}>
                <h1 
                  className={`font-semibold text-[15px] focus:outline-none ${
                    isActive(item.label)
                      ? 'border-b-2 py-3 border-[#634c9f] text-[#634c9f]'
                      : 'text-[#030712] py-3 hover:text-[#634c9f]'
                  }`}
                >
                  {item.label}
                  {item.sale && (
                    <span className='bg-[#dc2626] mx-1.5 px-3 py-1 rounded-lg font-bold text-[#ffffff] text-[10px]'>
                      SALE
                    </span>
                  )}
                </h1>
              </Link>
            </div>
          ))}
        </div>

        <div className='flex flex-row items-center'>
          {navItems.slice(6).map((item) => (
            <div key={item.label} className='ml-[20px] cursor-pointer'>
              <Link href={item.href}>
                <h1
                  className={`font-semibold text-[15px] focus:outline-none ${
                    isActive(item.label)
                      ? 'border-b-2 py-3 border-[#634c9f] text-[#634c9f]'
                      : item.label === 'Almost Finished'
                      ? 'text-[#dc2626] hover:text-[#634c9f]'
                      : 'text-[#030712] hover:text-[#634c9f]'
                  }`}
                >
                  {item.label}
                  {item.sale && (
                    <span className='bg-[#dc2626] mx-1.5 px-3 py-1 rounded-lg font-bold text-[#ffffff] text-[10px]'>
                      SALE
                    </span>
                  )}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navs;

























