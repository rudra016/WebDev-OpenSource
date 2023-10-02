import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
const Favourites = () => {
  const hi = JSON.parse(localStorage.getItem("colorPalette")) || []
  return (
    <div className="w-screen h-screen overflow-x-hidden">
        <Navbar/>
        <div className="w-screen flex flex-col items-center justify-center font-inter pt-20">
            <p className="text-black font-black text-5xl">Trending Color Palettes</p>
            <div className="w-1/4 text-center mt-4">
                <p className="text-lg text-gray-600">Get inspired by thousands of beautiful color schemes and make something cool!</p>
            </div>
        </div>
        <div className='w-screen px-16 mt-20 grid grid-cols-4 gap-8'>
          {
            (hi.length)?hi.map((ele , idx)=>(
              <Card key={idx} ele={ele} fromlocal={true}/>
            )):<div className="w-[93vw] flex justify-center items-center">
              <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_dmw3t0vg.json"  background="transparent"  speed="1"  style={{"width": "300px", "height": "300px"}}  loop  autoplay></lottie-player>
            </div>
          }
        </div>
        <Footer/>
    </div>
  )
}
export default Favourites