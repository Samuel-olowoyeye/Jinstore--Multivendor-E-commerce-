import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import Blog from '@/components/Blog';



const page = () => {
  return (
    <div>
         <Header />
         <Navs />
         <Blog /> 
         <Footer/>
    </div>
  )
}

export default page