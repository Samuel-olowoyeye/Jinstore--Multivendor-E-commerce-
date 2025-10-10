"use client";

import React, { Suspense } from "react";
import Header from "@/components/Header";
import Navs from "@/components/Navs";
import RegisterForm from '@/FormComponents/registerForm';
import Footer from "@/components/Footer";



const page = () => {
  return (
    <div>
         <Header />
         {/*  Wrapping Navs in Suspense because it uses useSearchParams() */}
        <Suspense fallback={<p>Loading navigation...</p>}>
          <Navs />
        </Suspense>
         <RegisterForm />
         <Footer/>
    </div>
  )
}

export default page