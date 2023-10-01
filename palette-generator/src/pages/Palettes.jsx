import React,{useState} from 'react'
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import {retro} from "../components/ColorPalettes"
import Footer from "../components/Footer"
const Palettes = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className="w-screen flex flex-col items-center justify-center font-inter pt-20">
            <p className="text-black font-black text-5xl">Trending Color Palettes</p>
            <div className="w-1/4 text-center mt-4">
                <p className="text-lg text-gray-600">Get inspired by thousands of beautiful color schemes and make something cool!</p>
            </div>
        </div>
        <div className="w-screen px-16 mt-20 grid grid-cols-4 gap-8">
            {
              retro.map((ele , idx)=>(
                <Card key={idx} idx={idx} ele={ele} fromlocal={false}/>
              ))
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Palettes