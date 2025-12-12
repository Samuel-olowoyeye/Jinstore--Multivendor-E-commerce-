"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../Reducers/cartSlice';
import { selectSavedItems } from '../Reducers/itemSlice'
import { AlignJustify, Apple, Baby, Beef, BrushCleaning, ChartNoAxesCombined, Coffee, Database, Egg, Flower2, House, LayoutDashboard, MapPin, MessageCircleMore, Package, Palette, Snowflake, Star, UserRound, Wheat, X } from 'lucide-react';


const navigation = [
    { title: "Home", href: "/", icon: <House className='w-4 h-4'/> },
    { title: "Shop", href: "shop", icon: <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
                    </svg> },
    { title: "Fruits & Vegetables ", href: "/shop?category=fruits-vegetables" , icon: <Apple className='w-4 h-4'/>  },
    { title: "Beverages", href: "/shop?category=beverages", icon: <Coffee className='w-4 h-4'/> },
    { title: "Blog", href: "/blog", icon: <MessageCircleMore className='w-4 h-4'/>},
    { title: "Contact", href: "/contact", icon: <UserRound className='w-4 h-4'/> },
    { title: "Trending Products", href: "/Trending products", icon: <Package className='w-4 h-4'/> },
    { title: "Almost Finished", href: "/Almost Finished", icon: <ChartNoAxesCombined className='w-4 h-4'/> },
  ];

const Categories = [
    { title: "All Categories", href: "/shop", icon: <LayoutDashboard className='w-4 h-4'/> },
    { title: "Fruits & Vegetables ", href: "/shop?category=fruits-vegetables", icon: <Apple className='w-4 h-4'/>  },
    { title: "Meats & Seafood", href: "/shop?category=meats-seafood", icon: <Beef className='w-4 h-4'/>  },
    { title: "Breakfast & Dairy", href:"/shop?category=breakfast-dairy", icon: <Egg className='w-4 h-4'/>  },
    { title: "Breads & brakery", href: "/shop?category=breads-bakery", icon: <Palette className='w-4 h-4'/>  },
    { title: "Beverages", href: "/shop?category=beverages", icon: <Coffee className='w-4 h-4'/> },
    { title: "Frozen Foods", href: "/shop?category=frozen-foods", icon: <Snowflake className='w-4 h-4'/>},
    { title: "Biscuits & Snacks", href: "/shop?category=biscuits-snacks", icon: <Wheat className='w-4 h-4'/>},
    { title: "Grocery & Staples", href: "/shop?category=grocery-staples", icon: <Flower2 className='w-4 h-4'/>},
    { title: "Household Needs", href: "/shop?category=household-needs", icon: <BrushCleaning className='w-4 h-4'/>},
    { title: "Healthcare", href: "/shop?category=healthcare", icon: <Database className='w-4 h-4'/>},
    { title: "Baby & Pregnancy", href: "/shop?category=baby-pregnancy", icon: <Baby className='w-4 h-4'/>},
  ];



 const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
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
              className={` fixed overflow-y-auto top-0 left-0 h-screen w-full  bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                menuOpen ? " translate-x-0  " : "-translate-x-full"
              }`}
            >
            <div className='flex flex-row justify-between shadow-xs px-1 text-[#030712]'>
              <div className='flex flex-row gap-1 py-4'>
                <Link href='/'><Image src="/assets/header/Logo.svg" alt="Logo" width={45} height={41.92} className="w-[40px] h-[26.92px] lg:h-[41.92px]" /></Link>
                <Link href='/'><h1 className='relative mr-4 font-bold text-xl'>JinStore <span className='-top-[0.5px] -right-[-4px] absolute text-[7px]'>com</span></h1></Link>
              </div>
                <button onClick={toggleMenu} >
                  <X className='mr-2 w-6 h-6 cursor-pointer'/>
                </button>
            </div>
              <div>
                  <div className='flex flex-row justify-center gap-4 py-4 font-semibold'>
                    <Link href='/Login'>
                      <button className='active:bg-[#634c9f] px-12 py-1 border border-[#634c9f] w-full text-[#030712] text-[12px] active:text-[#ffffff] cursor-pointer'>
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
                  <div className='grid grid-cols-2 pb-2'>
                    <div className='flex flex-row items-center gap-2 py-2.5 border-1'>
                      <Image src="/assets/header/user.svg" alt="Logo" width={26} height={26} className="ml-4 w-5 h-5" />
                      <div className="items-center font-medium text-[#030712]">
                        <h2 className='text-[12px]'>My Account</h2>
                        <h3 className='text-[10px]'>view your profile</h3>
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2 py-2.5 border-y-1'>
                      <Star className='ml-4 w-5 h-5 text-[#030712]' />
                      <div className="items-center font-medium text-[#030712]">
                        <h2 className='text-[12px]'>Wishlist</h2>
                        <h3 className='text-[10px]'>view saved items</h3>
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2 py-2.5 border-r-1'>
                      <MapPin className='ml-4 w-5 h-6' />
                      <div className="items-center font-medium text-[#030712]">
                        <h2 className='text-[12px]'>Track Orders</h2>
                        <h3 className='text-[10px]'>view order status</h3>
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2 py-2.5'>
                      <svg className="ml-4 w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
                    </svg>
                      <div className="items-center pl-1 font-medium text-[#030712]">
                        <h2 className='text-[12px]'>Physical Stores</h2>
                        <h3 className='text-[10px]'>stores around you</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className=''>
                {navigation.map((item) => (
                <ul key={item.title}>
                    <Link href={item.href} onClick={toggleMenu}>
                    <li className='flex flex-row items-center gap-3 hover:bg-[#634c9f] px-4 py-[2px] border-b font-medium text-[#030712] hover:text-[#ffffff] cursor-pointer'>
                      <div  className="my-2">
                        {item.icon}
                      </div>
                      <div  className="py-2 text-[13px]">
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
                  <li className='flex flex-row items-center gap-3 hover:bg-[#634c9f] px-4 py-[2px] border-b font-medium text-[#030712] hover:text-[#ffffff] cursor-pointer'>
                      <div  className="my-2">
                        {item.icon}
                      </div>
                      <div  className="py-2 text-[13px]">
                        {item.title}
                      </div>
                      </li>
                    </Link>  
                </ul>
                ))}
              </div>
            </div>
          </div>
            {/* Overlay */}
            {menuOpen && (
              <div
                className="z-40 fixed inset-0 bg-black/40"
                onClick={toggleMenu}
              />
            )}
   

    <div className='pt-3 lg:pt-0 w-full lg:w-0'>
            <input className='lg:hidden bg-[#F3F4F6] py-2 pl-4 w-full placeholder:text-[#6b7280] placeholder:text-[11px]' type="text" placeholder='Search for products, categories or brands...' />
        </div>
    </div>
  )
}
export default NavBar

