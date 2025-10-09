"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../Reducers/cartSlice';
import { selectSavedItems } from '../Reducers/itemSlice'
import { AlignJustify, Apple, Baby, Beef, BrushCleaning, ChartNoAxesCombined, Coffee, Database, Egg, Flower2, House, LayoutDashboard, MessageCircleMore, Package, Palette, Snowflake, Store, UserRound, Wheat, X } from 'lucide-react';


const navigation = [
    { title: "Home", href: "/", icon: <House className='w-4 h-4'/> },
    { title: "Shop", href: "shop", icon: <Store className='w-4 h-4'/> },
    { title: "Fruits & Vegetables ", href: "Fruits & Vegetables", icon: <Apple className='w-4 h-4'/>  },
    { title: "Beverages", href: "Beverages", icon: <Coffee className='w-4 h-4'/> },
    { title: "Blog", href: "blog", icon: <MessageCircleMore className='w-4 h-4'/>},
    { title: "Contact", href: "contact", icon: <UserRound className='w-4 h-4'/> },
    { title: "Trending Products", href: "Trending products", icon: <Package className='w-4 h-4'/> },
    { title: "Almost Finished", href: "Almost Finished", icon: <ChartNoAxesCombined className='w-4 h-4'/> },
  ];

const Categories = [
    { title: "All Categories", href: "/shop", icon: <LayoutDashboard className='w-4 h-4'/> },
    { title: "Fruits & Vegetables ", href: "Fruits & Vegetables", icon: <Apple className='w-4 h-4'/>  },
    { title: "Meats & Seafood", href: "Meats & Seafood", icon: <Beef className='w-4 h-4'/>  },
    { title: "Breakfast & Dairy", href: "Breakfast & Dairy", icon: <Egg className='w-4 h-4'/>  },
    { title: "Breads & brakery", href: "Breads & brakery", icon: <Palette className='w-4 h-4'/>  },
    { title: "Beverages", href: "Beverages", icon: <Coffee className='w-4 h-4'/> },
    { title: "Frozen Foods", href: "Frozen Foods", icon: <Snowflake className='w-4 h-4'/>},
    { title: "Biscuits & Snacks", href: "Biscuits & Snacks", icon: <Wheat className='w-4 h-4'/>},
    { title: "Grocery & Staples", href: "Grocery & Staples", icon: <Flower2 className='w-4 h-4'/>},
    { title: "Household Needs", href: "Household Needs", icon: <BrushCleaning className='w-4 h-4'/>},
    { title: "Healthcare", href: "Healthcare", icon: <Database className='w-4 h-4'/>},
    { title: "Baby & Pregnancy", href: "Baby & Pregnancy", icon: <Baby className='w-4 h-4'/>},
  ];


 const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    // const closeMenu = () => setMenuOpen(false);

    const totalItems = useSelector(selectTotalItems);
    const savedItems = useSelector(selectSavedItems);
    const totalSaved = savedItems.length;


    // Prevent background scroll when menu is open
      useEffect(() => {
        if (menuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
        return () => {
          document.body.style.overflow = "";
        };
      }, [menuOpen]);


  return (
    <div className='flex lg:flex-row flex-col justify-between items-center bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] w-full h-[39px] lg:h-[78px] text-[#6B7280]'>
       <div className='flex flex-row justify-between w-full'>
        {/* Mobile Menu Button */}      
      <div className='flex flex-row items-center gap-2 pt-4'>
        <button className="lg:hidden lg:pt-0" onClick={toggleMenu}>
                {menuOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
        <Link href='/'><h1 className='lg:hidden relative font-bold text-[#030712]'>JinStore <span className='-top-[0.5px] -right-[-4px] absolute text-[7px]'>com</span></h1></Link>
        </div>
      {/* Mobile Menu Button end */}  

        <div className='hidden lg:flex lg:flex-row items-center lg:space-x-[7px]'>
            <Link href='/'><Image src="/assets/header/Logo.svg" alt="Logo" width={45} height={41.92} className="w-[45px] h-[31.92px] lg:h-[41.92px]" /></Link>
            
           <Link href='/'><h1 className='relative mr-4 font-bold text-[#030712] text-2xl'>JinStore <span className='-top-[0.5px] -right-[-4px] absolute text-[7px]'>com</span></h1></Link>

           <Image src="/assets/header/map.svg" alt="Logo" width={26} height={26} className="hidden lg:block mr-2 w-[26px] h-[26px]" />

           <h2 className='text-[11px]'>Deliver to <br /> <span className='font-medium text-[#030712] text-[13px]'>all</span></h2>
        </div>

        <div className='mx-5'>
            <input className='hidden lg:block bg-[#F3F4F6] pl-[25px] rounded-lg lg:w-[760px] xl:w-[836px] h-[46px] placeholder:text-[#6b7280] placeholder:text-[14px]' type="text" placeholder='Search for products, categories or brands...' />
        </div>

        <div className='flex flex-row items-center lg:gap-[14px] pt-4 lg:pt-0' >
            <Image src="/assets/header/user.svg" alt="Logo" width={26} height={26} className="mr-3 w-[20px] lg:w-[26px] h-[20px] lg:h-[26px]" />

            <Link href='/Login'> <h2 className='hidden lg:block mr-3 text-[11px]'>Sign in <br /> <span className='font-medium text-[#030712] text-[13px]'>Account</span></h2> </Link>

            <div className='relative'>
            <Link href='/favouriteList'><Image src="/assets/header/heart.svg" alt="Logo" width={26} height={26} className="mr-3 w-[20px] lg:w-[26px] h-[20px] lg:h-[26px]" /></Link>
                {totalSaved > 0 && (
                <span className="absolute bg-[#DC2626] mx-3 -my-8 px-1.5 pt-0.5 pb-[3px] rounded-full font-semibold text-[#FEF2F2] text-[10px]">{totalSaved}</span>
                )}
            </div>

            <div className='relative'>
                <Link href='/cartList'><Image src="/assets/header/cart.svg" alt="Logo" width={26} height={26} className="w-[20px] lg:w-[26px] h-[20px] lg:h-[26px]" /></Link>
                {totalItems > 0 && (
                <span className="absolute bg-[#DC2626] mx-3 -my-8 px-1.5 pt-0.5 pb-[3px] rounded-full font-semibold text-[#FEF2F2] text-[10px]">{totalItems}</span>
                )}
            </div>
            
          </div>

            {/* Slide-in Mobile Menu */}
            <div
              className={` fixed overflow-y-auto top-23 left-0 h-screen w-[340px] px-4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                menuOpen ? " translate-x-0  " : "-translate-x-full"
              }`}
            >
              <div className='flex flex-row gap-1 p-4 border-b'>
                <Link href='/'><Image src="/assets/header/Logo.svg" alt="Logo" width={45} height={41.92} className="w-[40px] h-[26.92px] lg:h-[41.92px]" /></Link>
                <Link href='/'><h1 className='relative mr-4 font-bold text-[#030712] text-xl'>JinStore <span className='-top-[0.5px] -right-[-4px] absolute text-[7px]'>com</span></h1></Link>
              </div>

              <div>
                  <div className='flex flex-row justify-center gap-4 p-4 border-b font-semibold'>
                    <Link href='/Login'>
                      <button className='hover:bg-[#634c9f] px-12 py-1 border border-[#634c9f] text-[#030712] text-[12px] hover:text-[#ffffff] cursor-pointer'>
                        <h3 className='font-bold'>Login</h3>
                      </button>
                    </Link>
                    <Link href='/Registration'>
                      <button className='hover:bg-[#634c9f] px-10 py-1 border border-[#634c9f] text-[#030712] text-[12px] hover:text-[#ffffff] cursor-pointer hover'>
                        <h3 className='font-bold'>Register</h3>
                      </button>
                    </Link>
                  </div>
                  <div>
                    {/* create a grid for the order tracking, wishlist, your orders, about us */ }
                  </div>
              </div>
              
              <div className=''>
                {navigation.map((item) => (
                <ul key={item.title}>
                    <Link href={item.href} onClick={toggleMenu}>
                    <li className='flex flex-row items-center gap-3 hover:bg-[#634c9f] px-4 py-[2px] border-b font-semibold text-[#030712] hover:text-[#ffffff] cursor-pointer'>
                      <div  className="my-2">
                        {item.icon}
                      </div>
                      <div  className="py-2 text-[14px]">
                        {item.title}
                      </div>
                      </li>
                    </Link>  
                </ul>
                ))}
              </div>
              <div className='mt-4'>
                {Categories.map((item) => (
                <ul key={item.title}>
                    <Link href={item.href} onClick={toggleMenu}>
                  <li className='flex flex-row items-center gap-3 hover:bg-[#634c9f] px-4 py-[2px] border-b font-semibold text-[#030712] hover:text-[#ffffff] cursor-pointer'>
                      <div  className="my-2">
                        {item.icon}
                      </div>
                      <div  className="py-2 text-[14px]">
                        {item.title}
                      </div>
                      </li>
                    </Link>  
                </ul>
                ))}
              </div>
            </div>

            {/* Overlay */}
            {menuOpen && (
              <div
                className="z-40 fixed inset-0 bg-black/40"
                onClick={toggleMenu}
              />
            )}
    </div>

    <div className='pt-3 lg:pt-0 w-full lg:w-0'>
            <input className='lg:hidden bg-[#F3F4F6] py-2 pl-4 w-full placeholder:text-[#6b7280] placeholder:text-[11px]' type="text" placeholder='Search for products, categories or brands...' />
        </div>
    </div>
  )
}
export default NavBar
