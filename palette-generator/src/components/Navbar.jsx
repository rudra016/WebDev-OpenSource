import React from 'react'
import {FaGithubAlt} from "react-icons/fa"
import {GrLinkedinOption} from "react-icons/gr"
import {AiFillInstagram} from "react-icons/ai"
import Hunt from "../images/hunt.png"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="flex justify-between px-2 py-1 mb-5 border-b-2 border-gray-100 bg-gray-50">
      <Link to="/" className="">
        <div className="flex items-center relative w-52 group">
          <img src={Hunt} alt="" className='w-24 h-12 bg-green-100'/>
          <p className="font-pop text-[#000000e6] text-xl cursor-pointer absolute right-4 top-3 group-hover:text-orange-600">Znoy Colors</p>
        </div>
      </Link>
      <div className="flex space-x-7 pt-2 font-pop">
         <Link to="/generator" className="hover:text-orange-500 hover:scale-125 duration-200">Generator</Link>
        <Link to="/palettes" className="hover:text-orange-500 hover:scale-125 duration-200">Palettes</Link>
        <Link to="/favourites" className="hover:text-orange-500 hover:scale-125 duration-200">Favourites</Link>
      </div>
      <div className="flex space-x-4 items-center font-rale pr-10">
        <a href="https://github.com/AbHaY108BiShT" target="_blank" rel="noreferrer"><FaGithubAlt className="h-6 w-6 hover:text-orange-500 hover:scale-125 duration-100"/></a>
        <a href="https://www.linkedin.com/in/abhay-bisht-042662177/" target="_blank" rel="noreferrer"><GrLinkedinOption className="h-6 w-6 hover:text-orange-500 hover:scale-125 duration-100 relative -top-0"/></a>
      </div>
    </div>
  )
}
export default Navbar