import React from 'react'
import {DiGithubAlt } from "react-icons/di"
import {BsStars} from "react-icons/bs"
const Navbar = () => {
  return (
    <div className="text-white border-b-2 border-gray-800 font-inter">
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-2 text-xs   flex justify-center space-x-2">
            <p>Znoy Colors</p>
            <BsStars/>
        </div>
        <div className="flex justify-between mx-28 py-4 text-sm sticky top-0 z-50 bg-[#111827]">
            <div className="flex space-x-4">
                <a href="/">Gradients</a>
                <a href="/generator">Generator</a>
                <a href="/favourites">Favourite</a>
                <a href="/flags">Flags</a>
            </div>
            <div className="flex space-x-3 items-center">
                <a href="https://www.linkedin.com/in/abhay-bisht-042662177/" target = "_blank" rel="noreferrer">Abhay</a>
                <a href="https://github.com/AbHaY108BiShT" className="cursor-pointer" target = "_blank" rel="noreferrer"><DiGithubAlt className="h-6 w-6"/></a>
            </div>
        </div>
    </div>
  )
}
export default Navbar