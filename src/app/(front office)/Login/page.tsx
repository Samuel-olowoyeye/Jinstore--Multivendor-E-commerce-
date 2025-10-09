import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import LoginForm from '@/FormComponents/loginForm';



const page = () => {
  return (
    <div>
         <Header />
         <Navs />
         <LoginForm />
         <Footer/>
    </div>
  )
}

export default page