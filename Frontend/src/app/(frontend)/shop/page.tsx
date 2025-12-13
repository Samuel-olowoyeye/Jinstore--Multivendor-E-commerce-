"use client";
import React, { Suspense } from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import Shop from '@/components/Shop';





const page = () => {
  return (
    <div>
         <Header />
         <Suspense fallback={<p>Loading navigation...</p>}>
          <Navs />
        </Suspense>
        	
          <Suspense fallback={<p>Loading shop...</p>}>
          <Shop />
          </Suspense>
         <Footer/>
    </div>
  )
}

export default page