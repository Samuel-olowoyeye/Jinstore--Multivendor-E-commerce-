"use client";
import React, { Suspense } from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import AlmostFinished from '@/components/AlmostFinished';



const page = () => {
  return (
    <div>
        <Header />
         <Suspense fallback={<p>Loading navigation...</p>}>
          <Navs />
        </Suspense>
         <AlmostFinished />
         <Footer/>
    </div>
  )
}

export default page