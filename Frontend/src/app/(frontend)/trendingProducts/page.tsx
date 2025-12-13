"use client";
import React, { Suspense } from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import TrendingProducts from '@/components/TrendingProducts';



const page = () => {
  return (
    <div>
        <Header />
         <Suspense fallback={<p>Loading navigation...</p>}>
          <Navs />
        </Suspense>
         <TrendingProducts />
         <Footer/>
    </div>
  )
}

export default page