import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import ProductDetails from '@/components/productDetails';

const page = () => {
  return (
    <div>
        <Header />
         <Navs />
         <ProductDetails />
         <Footer/>
    </div>
  )
}

export default page