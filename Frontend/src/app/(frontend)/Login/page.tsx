"use client";
import React, { Suspense } from "react";
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import Footer from "@/components/Footer";
import LoginForm from '@/FormComponents/loginForm';



const page = () => {
  return (
    <div>
         <Header />
         {/*  Wrapping Navs in Suspense because it uses useSearchParams() */}
        <Suspense fallback={<p>Loading navigation...</p>}>
          <Navs />
        </Suspense>
         <LoginForm />
         <Footer/>
    </div>
  )
}

export default page