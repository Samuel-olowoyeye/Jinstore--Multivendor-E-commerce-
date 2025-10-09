import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import CheckoutList from '@/components/CheckoutList';




const page = () => {
  return (
    <div>
         <Header />
         <Navs />
         <CheckoutList />
         <Footer/>
    </div>
  )
}

export default page