import React from 'react'
import Topnav from "@/components/topnav";
import  Buttomnav  from "@/components/Buttomnav";
import NavBar from "@/components/navbar";

const Header = () => {
  return (
    <div>
        <Topnav />
        <Buttomnav />
        <NavBar />
    </div>
  )
}

export default Header