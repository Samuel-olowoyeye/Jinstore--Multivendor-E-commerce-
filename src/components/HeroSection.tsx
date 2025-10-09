import React from 'react'
import Main from "@/components/main";
import HeroBanner from "@/components/heroBanner";
import Navs from "@/components/Navs";

const HeroSection = () => {
  return (
    <div>
        <Navs />
        <Main />
        <HeroBanner />
    </div>
  )
}

export default HeroSection