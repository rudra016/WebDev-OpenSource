import React from 'react'
import Laptop from '../components/Laptop'
import Navbar from "../components/Navbar"
import {BsApple} from "react-icons/bs"
import {DiAndroid} from "react-icons/di"
import {FiFigma} from "react-icons/fi"
import {AiFillInstagram ,  AiFillChrome} from "react-icons/ai"
import {Link} from "react-router-dom"


import airbnb from "../images/airbnb.png"
import apple from "../images/apple.png"
import dropbox from "../images/dropbox.png"
import ea from "../images/ea.png"
import github from "../images/github.png"
import netflix from "../images/netflix.png"
import om from "../images/om.png"
import ubisoft from "../images/ubisoft.png"
import windows from "../images/windows.png"
import asset from "../images/asset.png"
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
        <div className="h-screen w-screen relative border-b-2 border-gray-100">
            <div className='absolute  flex flex-col items-center justify-center w-1/3 text-center  left-10 top-28'>
                <p className="font-inter text-6xl font-black">The super fast color palettes generator!</p>
                <p className="text-gray-700 mt-6">Create the perfect palette or get inspired by<br/>
                    thousands of beautiful schemes.</p>
                <Link to="/generator" className="bg-blue-600 rounded-2xl text-white w-[220px] px-6 py-2 cursor-pointer mt-7 hover:bg-pink-500">Start the generator!
                </Link>
                <Link to="/palettes" className="bg-gray-100 w-[220px] rounded-2xl text-black px-4 py-2  mt-4 border-2 border-gray-300  hover:text-white hover:bg-black cursor-pointer">Explore trending palettes</Link>
            </div>
            <Laptop/>
        </div>
        <div className="h-screen w-screen flex flex-col items-center justify-center space-y-20 border-b-2 border-gray-100 bg-gray-50">
          <div className="flex space-x-2 mx-4 font-inter">
              <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-blue-200 duration-100 group relative">
                <BsApple className="group-hover:opacity-0 w-14 h-14"/>
                <div className='group-hover:opacity-0 w-44 text-center mt-2 font-bold text-2xl'>iOS App</div>
                <div className='group-hover:opacity-0 w-44 text-center mt-10'>Create , browser and save palettes on the go.</div>
                <div className="group-hover:opacity-100 group-hover:-translate-y-28 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-blue-600">
                  View on the App Store
                </div>
              </div>
              <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-green-200 duration-100 group relative">
                <DiAndroid className="group-hover:opacity-0 w-14 h-14"/>
                <div className='group-hover:opacity-0 w-44 text-center mt-2 font-bold text-2xl'>Android App</div>
                <div className='group-hover:opacity-0 w-44 text-center mt-10'>Thousands of palettes in your pocket.</div>
                <div className="group-hover:opacity-100 group-hover:-translate-y-28 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-green-600">
                  View on the Play Store
                </div>
              </div>
              <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-pink-200 duration-100 group relative">
                <FiFigma className="w-14 h-14 group-hover:opacity-0"/>
                <div className='group-hover:opacity-0 w-44 text-center mt-2 font-bold text-2xl' >Figma Pluggins</div>
                <div className='group-hover:opacity-0 w-44 text-center mt-[9px]'>All palettes right into your workspace.</div>
                <div className="group-hover:opacity-100 group-hover:-translate-y-32 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-pink-600">
                  Install Now
                </div>
              </div>
              <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-purple-200 duration-100 group relative">
                <AiFillChrome className="w-14 h-14 group-hover:opacity-0"/>
                <div className='group-hover:opacity-0 w-44 text-center mt-2 font-bold text-2xl'>Chrome Extension</div>
                <div className='group-hover:opacity-0 w-44 text-center mt-3'>Get and edit a palette every new tab.</div>
                <div className="group-hover:opacity-100 group-hover:-translate-y-32 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-purple-600">
                  Add To Chrome
                </div>
              </div>
              <div className="flex flex-col text-center items-center p-6  w-[250px] h-[280px] rounded-lg group hover:bg-yellow-200 duration-100 group relative">
                <AiFillInstagram className="w-14 h-14 group-hover:opacity-0"/>
                <div className='group-hover:opacity-0  w-44 text-center mt-2 font-bold text-2xl'>Instagram</div>
                <div className='group-hover:opacity-0  w-44 text-center mt-10'>Get your daily inspiration of beautiful palettes.</div>
                <div className="group-hover:opacity-100 group-hover:-translate-y-36 transition group-hover:ease-out  absolute -bottom-6 opacity-0 w-44 text-center mt-2 font-bold text-4xl group-hover:text-yellow-600">
                  Follow us
                </div>
              </div>
          </div>
          <div className="flex flex-col">
            <p className="text-center text-xl font-inter">Used by awesome companies</p>
            <div className="flex w-screen  space-x-20 px-28 mt-10">
              <img className="hover:scale-125 duration-200 w-16 h-16 " src={airbnb} alt="" />
              <img className="hover:scale-125 duration-200 w-16 h-16 " src={apple} alt="" />
              <img className="hover:scale-125 duration-200 w-16 h-16 " src={dropbox} alt="" />
              <img className="hover:scale-125 duration-200 w-20 h-20 " src={ea} alt="" />
              <img className="hover:scale-125 duration-200 w-16 h-16 " src={github} alt="" />
              <img className="hover:scale-125 duration-200 w-16 h-16 " src={netflix} alt="" />
              <img className="hover:scale-125 duration-200 w-16 h-16 " src={om} alt="" />
              <img className="hover:scale-125 duration-200 w-16 h-16 " src={ubisoft} alt="" />
              <img className="hover:scale-125 duration-200 w-16 h-16 " src={windows} alt="" />
            </div>
          </div>
        </div>
        <div className="h-screen w-screen flex items-center justify-center font-inter space-x-10 border-b-2 border-gray-100">
          <div className="flex flex-col w-[300px] items-center">
            <div className="w-[200px] h-[200px] flex items-center justify-center rounded-full bg-black">
              <p className="font-black text-[180px] text-white">1</p>
              <p className="text-4xl text-white">%</p>
            </div>
            <div className="w-[250px] flex flex-col items-center text-center mt-4">
              <p className="font-black text-5xl">FOR THE PLANET</p>
              <p className="font-black text-md">- MEMBER -</p>
            </div>
          </div>
          <div className="flex flex-col font-inter relative">
            <span className="font-black text-2xl">We've joined</span>
            <img src={asset} alt="" className='w-[100px] h-[100px] absolute right-4 -top-20'/>
            <span className="font-black text-2xl">1% for the Planet</span>
            <p className='text-sm mt-4'>We’re committing 1% of our annual sales to support<br/> environmental nonprofits.</p>
            <a href="https://www.onepercentfortheplanet.org/" className='text-blue-600 text-xs mt-4'>onepercentfortheplanet.org</a>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
export default Home