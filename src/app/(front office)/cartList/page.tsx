import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import CardList from "@/components/cardList";

const page = () => {
  return (
    <div>
        <Header />
         <Navs />
         <CardList />
         <Footer/>
    </div>
  )
}

export default page