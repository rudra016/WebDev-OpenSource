import React, {useState , useRef} from 'react'
import {SiTailwindcss} from "react-icons/si"
import {BsCodeSlash, BsImages} from "react-icons/bs"
import {AiOutlineRight , AiOutlineLeft ,AiOutlineUp , AiOutlineDown , AiFillHeart}  from "react-icons/ai"
import toast from "react-hot-toast"
import html2canvas from "html2canvas"
 const Card = ({title , code , fromLocal}) => {
   const ref = useRef();
   const [canvasClass , setcanvasClass] = useState(`bg-gradient-to-l ${code}`)

   const arr_class_join = ()=>{
    const classDem = ref.current.classList
    const arr = [...classDem]
    return arr.slice(0,4).join(" ")
   }
   const changeColor = (str) =>{
      if(str==="l"){
        ref.current.className =  `bg-gradient-to-l ${code} w-80 h-64 rounded-3xl z-50`
        setcanvasClass(arr_class_join())
        toast.success("Left Gradient")
      }
      else if(str==="r"){
        ref.current.className =  `bg-gradient-to-r ${code} w-80 h-64 rounded-3xl z-50`
        setcanvasClass(arr_class_join())
        toast.success("Right Gradient")
      }
      else if(str==="t"){
        ref.current.className =  `bg-gradient-to-t ${code} w-80 h-64 rounded-3xl z-50`
        setcanvasClass(arr_class_join())
        toast.success("Top Gradient")
      }
      else{
        ref.current.className = `bg-gradient-to-b ${code} w-80 h-64 rounded-3xl z-50`
        setcanvasClass(arr_class_join())
        toast.success("Down Gradient")
      }
   }
   const handleCopy = ()=>{
     navigator.clipboard.writeText(arr_class_join())
     toast.success("Copied !")
   }
   const handleFavourites = (title , code)=>{
      const arr = JSON.parse(localStorage.getItem("favGradients")) || [];
      if(fromLocal){
        const len = arr.length
        const new_arr = [];
        for(let i =0;i<len;i++){
            if(arr[i].title !== title){
                new_arr.push({title:arr[i].title , code:arr[i].code})
            }
        }
        localStorage.removeItem("favGradients")
        localStorage.setItem("favGradients",JSON.stringify(new_arr))
        window.location.reload()
        toast.success("Removed From Favourites")
        return;
     }else{
        const len = arr.length
        let yes_or_no = 0;
        if(len === 0){
          const obj = {title:title , code:code}
          arr.push(obj)
          localStorage.setItem("favGradients",JSON.stringify(arr))
          toast.success("Added to favourites")
          return;
        }
        for(let i =0;i<len;i++){
          if(arr[i].title !== title){
              yes_or_no = 1
          }else{
            yes_or_no = 0
            break;
          }
        }
        if(yes_or_no){
          const obj = {title:title , code:code}
          arr.push(obj)
          localStorage.setItem("favGradients",JSON.stringify(arr))
          toast.success("Added to favourites")
        }else{
          toast.error("Already in favourites")
        }
     }
    }
    const convertCanvasToImage= ()=> {
      const container = document.getElementById(`${code}`);
      const containerStyles = window.getComputedStyle(container);
      const gradient = containerStyles.backgroundImage;
      html2canvas(container).then((canvas) => {
        const image = canvas.toDataURL('png');
        let a  = document.createElement('a');
        a.href = image;
        a.download = 'ZnoyColors.png';
        a.click()
      });
    }
   return (
     <div className="text-white w-80 relative">
       <div className="w-80 h-64 rounded-3xl overflow-hidden">
          <div ref={ref}  className={`bg-gradient-to-r ${code} w-80 h-64 z-50`}>
          </div>
          <div  id={`${code}`} className={`bg-gradient-to-r ${code} w-[1500px] h-[1000px] -z-50`}>
          </div>
       </div>
        <AiFillHeart className="absolute h-6 w-6 top-5 right-5 text-gray-800 bg-gray-300 
        rounded-full p-1 hover:scale-125 hover:text-pink-500 hover:border-2 hover:border-pink-500 duration-300" onClick={()=>handleFavourites(title , code)}/>
       <div className="bg-[#111827] rounded-3xl h-28 w-[310px] relative -top-10 mx-auto">
         <div className='flex justify-between items-center mx-4 py-4'>
           <p className='font-inter text-bold text-md'>{title}</p>
           <div className="flex space-x-2">
             <SiTailwindcss className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={handleCopy}/>
             <BsImages className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={convertCanvasToImage}/>
           </div>
         </div>
         <div className="flex space-x-2 justify-center">
            <AiOutlineUp  className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={()=>changeColor("t")}/>
           <AiOutlineDown className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={()=>changeColor("b")}/>
           <AiOutlineLeft className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={()=>changeColor("l")}/>
           <AiOutlineRight className="bg-gray-800 rounded-xl  h-8 w-8 py-2 hover:bg-gray-600 hover:text-pink-600" onClick={()=>changeColor("r")}/>
         </div>
       </div>
     </div>
   )
 }
 export default Card