"use client";
import React, { Suspense } from 'react'
import Main from "@/components/main";
import HeroBanner from "@/components/heroBanner";
import Navs from "@/components/Navs";

const HeroSection = () => {
  return (
    <div>
        <Suspense fallback={<p>Loading navigation...</p>}>
            <Navs />
          </Suspense>
        <Main />
        <HeroBanner />
    </div>
  )
}

export default HeroSection