import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopBanner from "@/components/TopBanner";
import Products from "@/components/Products";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div>
        <Header />
        <HeroSection/>
        <TopBanner/>
        <Products/>
        <Companies/>
        <Footer/>
    </div>
  );
}
