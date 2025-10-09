import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import Shop from '@/components/Shop';





const page = () => {
  return (
    <div>
         <Header />
         <Navs />
        	<Shop />
         <Footer/>
    </div>
  )
}

export default page