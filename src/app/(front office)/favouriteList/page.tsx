import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import SavedItem from '@/components/savedItem';



const page = () => {
  return (
    <div>
        <Header />
         <Navs />
         <SavedItem />
         <Footer/>
    </div>
  )
}

export default page