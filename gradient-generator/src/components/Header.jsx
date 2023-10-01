import React from 'react'
import { all_colors } from './Color_Combinations' 
const Header = ({title , para}) => {
  return (
    <div className="h-[480px] flex flex-col items-center justify-center font-inter">
        <div className="flex flex-col items-center justify-center">
            <p className="text-white font-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">{para}</p>
            <div className="text-wrap w-[500px]">
              <p className='text-6xl font-extrabold  tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-4 text-center'>{title}</p>
            </div>
        </div>
        <div className="w-[600px] break-all mt-8">
            <p className='text-center font-md text-white font-semibold'>A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.</p>
        </div>
    </div>
  )
}
export default Header