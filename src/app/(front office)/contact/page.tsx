"use client";
import React, { Suspense } from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import Contact from '@/components/Contact';


const page = () => {
  return (
    <div>
         <Header />
         <Suspense fallback={<p>Loading navigation...</p>}>
          <Navs />
        </Suspense>
         <Contact />
         <Footer/>
    </div>
  )
}

export default page