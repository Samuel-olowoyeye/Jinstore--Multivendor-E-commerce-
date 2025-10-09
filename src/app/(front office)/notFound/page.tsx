import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import NotFound from '@/components/NotFound';


const page = () => {
  return (
    <div>
         <Header />
         <Navs />
         <NotFound />
         <Footer/>
    </div>
  )
}

export default page