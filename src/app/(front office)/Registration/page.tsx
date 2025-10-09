import React from 'react'
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import RegisterForm from '@/FormComponents/registerForm';
import Footer from "@/components/Footer";



const page = () => {
  return (
    <div>
         <Header />
         <Navs />
         <RegisterForm />
         <Footer/>
    </div>
  )
}

export default page