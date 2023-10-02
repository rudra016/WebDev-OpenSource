import React,{useState} from 'react'
import {AiFillHeart , AiOutlineHeart} from "react-icons/ai"
import {toast} from "react-hot-toast"


const Card = ({ele , idx , fromlocal}) => {
  const [isfav , setisFav] = useState(false)
  const [pre , setpre] = useState(false)


  const addit = (cond , fromlocal)=>{
    const local_obj = JSON.parse(localStorage.getItem("colorPalette")) || []
    const new_arr = []
    if(!local_obj.length){
      localStorage.setItem("colorPalette"  , JSON.stringify([[ele[0] , ele[1] , ele[2] , ele[3]]]))
      toast.success("Added to favourites")
    }else{
      if(cond === "rem"){
        for(let i =0 ;i<local_obj.length ; i++){
          if((local_obj[i][0] === ele[0]) && (local_obj[i][1] === ele[1]) && (local_obj[i][2] === ele[2]) && (local_obj[i][3] === ele[3])){
            continue;
          }else{
            new_arr.push([local_obj[i][0] , local_obj[i][1] , local_obj[i][2] , local_obj[i][3]])
            }
          }
          localStorage.removeItem("colorPalette")
          localStorage.setItem("colorPalette"  , JSON.stringify(new_arr))
          toast.success("removed from favourites")
          if(fromlocal){
            window.location.reload()
          }
        }else{
          const add_arr = [...local_obj, [ele[0] , ele[1] , ele[2] , ele[3]]]
            localStorage.removeItem("colorPalette")
            localStorage.setItem("colorPalette"  , JSON.stringify(add_arr))
            toast.success("Added to favourites")
        }
    }
  }


  return (
    <div className='w-full'>
        <div className='w-full h-28  bg-pink-100 flex rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl duration-300 font-inter'>
            <div className="duration-300 transition-width transition-slowest ease  flex-auto hover:w-[80px] h-full  bg-pink-200  group flex items-center justify-center" style={{backgroundColor:`${ele[0]}`}}>
              <p className="hidden  group-hover:block font-black text-md hover:text-orange-500">{ele[0]}</p>
            </div>
            <div className="group flex items-center justify-center flex-auto hover:w-[80px]  h-full bg-red-200" style={{backgroundColor:`${ele[1]}`}}>
              <p className="hidden group-hover:block font-black text-md hover:text-orange-500">{ele[0]}</p>
            </div>
            <div className="group flex items-center justify-center flex-auto hover:w-[80px] h-full bg-green-200" style={{backgroundColor:`${ele[2]}`}}>
              <p className="hidden group-hover:block font-black text-md hover:text-orange-500">{ele[0]}</p>
            </div>
            <div className="group flex items-center justify-center flex-auto hover:w-[80px] h-full bg-blue-200" style={{backgroundColor:`${ele[3]}`}}>
              <p className="hidden group-hover:block font-black text-md hover:text-orange-500">{ele[0]}</p>
            </div>
            <div className="group flex items-center justify-center flex-auto hover:w-[80px] h-full bg-purple-200" style={{backgroundColor:`${ele[4]}`}}>
              <p className="hidden group-hover:block font-black text-md hover:text-orange-500">{ele[0]}</p>
            </div>
        </div>
        <div className=" w-full h-10  text-gray-600 font-inter mt-0 flex justify-end space-x-2 items-center pr-4">
            {
              fromlocal?<AiFillHeart className="hover:scale-125 duration-200 cursor-pointer font-xs" onClick={()=>{
                addit("rem" , true)
                setisFav(false)
              }} 
              />:
              isfav?<AiFillHeart className="hover:scale-125 duration-200 cursor-pointer font-xs" onClick={()=>{
                addit("rem" , false)
                setisFav(false)
              }} 
              />:<AiOutlineHeart className="hover:scale-125 duration-200 cursor-pointer font-xs" onClick={()=>{
                addit("add")
                setisFav(true)}}/>
            }
            <p className="font-xs">{Math.trunc(Math.random().toFixed(2)*100)}k</p>
        </div>
    </div>
  )
}

export default Card