/* eslint-disable jsx-a11y/alt-text */
import React,{useState , useEffect} from 'react'
import randomColor from "randomcolor";
import {toast} from "react-hot-toast"
import github from "../images/github.png"
import html2canvas from "html2canvas"
import images from "../images/images.png"
import code from "../images/code.png"
import {BsImage} from "react-icons/bs"
import {VscJson} from "react-icons/vsc"
import {AiFillHeart , AiOutlineHeart} from "react-icons/ai"
import {retro} from "./ColorPalettes"
const ColorPaletteGenerator = () => {
    const [isfav , setisFav] = useState(false)
    const ind = Math.floor(Math.random() * retro.length);
    const [c1 , setc1] = useState("#FBF5F3")
    const [c2 , setc2] = useState("#E28413")
    const [c3 , setc3] = useState("#000022")
    const [c4 , setc4] = useState("#DE3C4B")
    const [c5, setc5] = useState("#C42847")
    useEffect(() => {
        window.addEventListener('keypress', e => {
            if(e.key === "Enter"){
                setisFav(false);
                const idx = Math.floor(Math.random()*retro.length)
                console.log(idx)
                setc1(retro[idx][0])
                setc2(retro[idx][1])
                setc3(retro[idx][2])
                setc4(retro[idx][3])
                setc5(retro[idx][4])
            }
        });
      }, []);
      const copyFunc = (c) =>{
        navigator.clipboard.writeText(c)
        toast.success("Coppied")
      }
      const copyJson = () =>{
          const obj = {
              c1:c1,
              c2:c2,
              c3:c3,
              c4:c4,
              c5:c5
          }
        navigator.clipboard.writeText(JSON.stringify(obj))
        toast.success("Coppied")
      }
      const convertCanvasToImage= ()=> {
        const container = document.getElementById(`palettes`);
        const containerStyles = window.getComputedStyle(container);
        const gradient = containerStyles.backgroundImage;
        html2canvas(container).then((canvas) => {
          const image = canvas.toDataURL('png');
          let a  = document.createElement('a');
          a.href = image;
          toast.success("Downloading")
          a.download = 'ZnoyPalettes.png';
          a.click()
        });
      }

    const addit_grad = (cond)=>{
        const local_obj = JSON.parse(localStorage.getItem("colorPalette")) || []
        const new_arr = []
        if(!local_obj.length){
          localStorage.setItem("colorPalette"  , JSON.stringify([[c1 , c2 , c3 , c4]]))
        }else{
          if(cond === "rem"){
            for(let i =0 ;i<local_obj.length ; i++){
              if((local_obj[i][0] === c1) && (local_obj[i][1] === c2) && (local_obj[i][2] === c3) && (local_obj[i][3] === c4)){
                continue;
              }else{
                new_arr.push([local_obj[i][0] , local_obj[i][1] , local_obj[i][2] , local_obj[i][3]])
                }
              }
              localStorage.removeItem("colorPalette")
              localStorage.setItem("colorPalette"  , JSON.stringify(new_arr))
            }else{
              const add_arr = [...local_obj, [c1 ,c2 , c3 ,c4]]
                localStorage.removeItem("colorPalette")
                localStorage.setItem("colorPalette"  , JSON.stringify(add_arr))
            }
        }
      }
      
  return (
    <div className='h-[88.8vh] w-[98.8vw] flex flex-col font-inter overflow-x-hidden overflow-y-hidden borderdownloadPalette-2 border-gray-100 ml-0'>
        <div className="flex justify-between px-[30px] font-inter border-1 border-gray-200">
            <div className="w-[70vw]">
                <p className="m-4 text-gray-500 text-sm">Press <span className="font-bold text-xl">Enter </span>  to generate palette</p>
            </div>
            <div className="w-[30vw] border-l-2 border-gray-200 flex space-x-6 pl-4 items-center relative">
               <div className="group">
                <BsImage className="w-6 h-6 cursor-pointer hover:text-orange-500 hover:scale-125 duration-100" onClick={convertCanvasToImage} />
                <span className="absolute -bottom-10 -left-4 bg-black text-white p-3 text-xs rounded-full z-50 opacity-0 group-hover:opacity-100 duration-200">Download Image</span>
               </div>
               <div className="group">
                <VscJson className="w-6 h-6 cursor-pointer hover:text-orange-500 hover:scale-125 duration-100" onClick={copyJson}/>
                <span className="absolute -bottom-10 left-10 bg-black text-white p-3 text-xs rounded-full z-50 opacity-0 group-hover:opacity-100 duration-200 ">Copy Json Code</span>
               </div>
               {isfav?<div className="group">
                <AiFillHeart className="w-6 h-6 cursor-pointer hover:text-orange-500 hover:scale-125 duration-100" onClick={()=> {
                    setisFav(false);
                    addit_grad("rem")
                    toast.success("Removed From favourites!")}}/>
                <span className="absolute -bottom-10 left-20 bg-black text-white p-3 text-xs rounded-full z-50 opacity-0 group-hover:opacity-100 duration-200 ">Remove From favourites</span>
               </div>:<div className="group">
                <AiOutlineHeart className="w-6 h-6 cursor-pointer hover:text-orange-500 hover:scale-125 duration-100" onClick={()=> {
                    setisFav(true);
                    addit_grad("add")
                    toast.success("Added to favourites!")}}/>
                <span className="absolute -bottom-10 left-20 bg-black text-white p-3 text-xs rounded-full z-50 opacity-0 group-hover:opacity-100 duration-200 ">Add to favourites</span>
               </div>}
            </div>
         </div>
        <div className='flex w-screen h-[91vh] ml-0'>
            <div className="h-full w-1/5 bg-[#FBF5F3] relative text-center group" style={{backgroundColor:`${c1}`}}>
                    <p className="absolute bottom-24 left-20 text-2xl text-white font-inter font-black cursor-pointer hover:scale-125 duration-200 bg-  
                    + z-50" onClick={()=>copyFunc(c1)} group>{c1.toUpperCase()}</p>
                <div className="w-[150px] h-[50px] backdrop-blur-3xl bg-white/30 absolute bottom-[90px] left-16 hover:bg-orange-500">
                </div>
            </div>
            <div className="h-full w-1/5 bg-[#E28413] relative" style={{backgroundColor:`${c2}`}}>
                <p className="absolute bottom-24 left-20 text-2xl text-white font-inter font-black cursor-pointer hover:scale-125 duration-200 z-50" onClick={()=>copyFunc(c2)}>{c2.toUpperCase()}</p>
                <div className="w-[150px] h-[50px] backdrop-blur-3xl bg-white/30 absolute bottom-[90px] left-16">
                </div>
            </div>
            <div className="h-full w-1/5 bg-[#000022] relative" style={{backgroundColor:`${c3}`}}>
                <p className="absolute bottom-24 left-20 text-2xl text-white font-inter font-black cursor-pointer hover:scale-125 duration-200 z-50" onClick={()=>copyFunc(c3)}>{c3.toUpperCase()}</p>
                <div className="w-[150px] h-[50px] backdrop-blur-3xl bg-white/30 absolute bottom-[90px] left-16">
                </div>
            </div>
            <div className="h-full w-1/5 bg-[#DE3C4B] relative" style={{backgroundColor:`${c4}`}}>
                <p className="absolute bottom-24 left-20 text-2xl text-white font-inter font-black cursor-pointer hover:scale-125 duration-200 z-50" onClick={()=>copyFunc(c4)}>{c4.toUpperCase()}</p>
                <div className="w-[150px] h-[50px] backdrop-blur-3xl bg-white/30 absolute bottom-[90px] left-16">
                </div>
            </div>
            <div className="h-full w-1/5 bg-[#C42847] relative" style={{backgroundColor:`${c5}`}}>
                <p className="absolute bottom-24 left-20 text-2xl text-white font-inter font-black cursor-pointer hover:scale-125 duration-200 z-50" onClick={()=>copyFunc(c5)}>{c5.toUpperCase()}</p>
                <div className="w-[150px] h-[50px] backdrop-blur-3xl bg-white/30 absolute bottom-[90px] left-16">
                </div>
            </div>
        </div>
    </div>
  )
}
export default ColorPaletteGenerator