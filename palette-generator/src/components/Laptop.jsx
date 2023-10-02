import React,{useState} from 'react'
import randomColor from "randomcolor";
import {one, two ,three} from "./ColorPalettes"
const Laptop = () => {
  const [c1 , setc1] = useState("#8ecae6")
  const [c2 , setc2] = useState("#219ebc")
  const [c3 , setc3] = useState("#023047")
  const [c4 , setc4] = useState("#ffb703")
  const [c5, setc5] = useState("#ffb705")
 /*  setInterval(async ()=>{
    setc1(randomColor())
    setc2(randomColor())
    setc3(randomColor())
    setc4(randomColor())
    setc5(randomColor())
  },1200) */
  return (
      <div className="w-screen h-screen  relative overflow-x-hidden -z-50">
        <div className="flex flex-col absolute right-[350px] top-[247px] z-50">
            <span className="bg-black w-[424px] h-3 block rounded-tl-full rounded-tr-full"></span>
            <div className="flex w-[500px]">
                <span className="bg-black w-3 h-[270px] block"></span>
                <div className="flex w-[400px] h-[270px]">
                    <div className={`w-1/5`} style={{backgroundColor:`${three[6][0]}`}}></div>
                    <div className={`w-1/5`} style={{backgroundColor:`${three[6][1]}`}}></div>
                    <div className={`w-1/5`} style={{backgroundColor:`${three[6][2]}`}}></div>
                    <div className={`w-1/5`} style={{backgroundColor:`${three[6][3]}`}}></div>
                    <div className={`w-1/5`} style={{backgroundColor:`${three[6][4]}`}}></div>
                </div>
                <span className="bg-black w-3 h-[270px] block"></span>
            </div>
              <span className="bg-black w-[424px] h-2 block rounded-lb-full rounded-rb-full"></span>
            <span className=" relative -left-10 text-center bg-gray-300 w-[500px] h-3 block rounded-bl-full rounded-br-full"></span>
        </div>
        <div className="flex flex-col absolute -right-12">
            <span className="bg-black w-[600px] h-3 block rounded-tl-full rounded-tr-full"></span>
            <div className="flex w-[600px]">
                <span className="bg-black w-3 h-[410px] block"></span>
                <div className="flex w-[600px] h-[410px]n">
                    <div className="flex space-x-4">
                        <div className="space-y-4 my-3 ml-3">
                        {
                           three.map((ele_three)=>(
                              <div className="flex w-[170px] h-6">
                                <span className="bg-pink-200 h-full w-1/5  block rounded-tl-md rounded-bl-md" style={{backgroundColor:`${ele_three[0]}`}}></span>
                                <span className="bg-green-200 block w-1/5" style={{backgroundColor:`${ele_three[1]}`}}></span>
                                <span className="bg-orange-200 block w-1/5" style={{backgroundColor:`${ele_three[2]}`}}></span>
                                <span className="bg-yellow-200 block w-1/5" style={{backgroundColor:`${ele_three[3]}`}}></span>
                                <span className="bg-blue-200 block w-1/5 rounded-tr-md rounded-br-md" style={{backgroundColor:`${ele_three[4]}`}}></span>
                              </div>
                           ))
                         }
                        </div>
                        <div className="space-y-4 my-3 ml-3">
                         {
                           two.map((ele_two)=>(
                            <div className="flex w-[170px] h-6 ">
                              <span className="bg-pink-200 h-full w-1/5  block rounded-tl-md rounded-bl-md"  style={{backgroundColor:`${ele_two[0]}`}}></span>
                              <span className="bg-green-200 block w-1/5"  style={{backgroundColor:`${ele_two[1]}`}}></span>
                              <span className="bg-orange-200 block w-1/5"  style={{backgroundColor:`${ele_two[2]}`}}></span>
                              <span className="bg-yellow-200 block w-1/5"  style={{backgroundColor:`${ele_two[3]}`}}></span>
                              <span className="bg-blue-200 block w-1/5 rounded-tr-md rounded-br-md"  style={{backgroundColor:`${ele_two[4]}`}}></span>
                            </div>
                           ))
                         }
                        </div>
                        <div className="space-y-4 my-3 ml-3 ">
                        {
                            one.map((ele_one)=>(
                              <div className="flex w-[170px] h-6 ">
                              <span className="bg-pink-200 h-full w-1/5  block rounded-tl-md rounded-bl-md" style={{backgroundColor:`${ele_one[0]}`}}></span>
                              <span className="bg-green-200 block w-1/5" style={{backgroundColor:`${ele_one[1]}`}}></span>
                              <span className="bg-orange-200 block w-1/5" style={{backgroundColor:`${ele_one[2]}`}}></span>
                              <span className="bg-yellow-200 block w-1/5" style={{backgroundColor:`${ele_one[3]}`}}></span>
                              <span className="bg-blue-200 block w-1/5 rounded-tr-md rounded-br-md" style={{backgroundColor:`${ele_one[4]}`}}></span>
                            </div>
                            ))
                          }
                        </div>
                    </div>
                </div>
                <span className="bg-black w-3 h-[410px] block"></span>
            </div>
              <span className="bg-black w-[600px] h-3 block rounded-lb-full rounded-rb-full"></span>
              <div className="flex flex-col items-center">
                <span className="w-[150px] h-[80px] block bg-gray-300"></span>
                <span className="w-[250px] h-3 block bg-gray-400 rounded-bl-full rounded-br-full "></span>
              </div>
        </div>
      </div>
  )
}

export default Laptop


// {
//   retro.map((ele)=>(
//     <div className="flex w-[170px] h-6 ">
//       <span className="bg-pink-200 h-full w-1/5  block rounded-tl-md rounded-bl-md" style={{backgroundColor:`${ele[0]}`}}></span>
      
//       <span className="bg-green-200 block w-1/5" style={{backgroundColor:`${ele[1]}`}}></span>
      
//       <span className="bg-orange-200 block w-1/5" style={{backgroundColor:`${ele[2]}`}}></span>
      
//       <span className="bg-yellow-200 block w-1/5" style={{backgroundColor:`${ele[3]}`}}></span>
      
//       <span className="bg-blue-200 block w-1/
//       5 rounded-tr-md rounded-br-md" style={{backgroundColor:`${ele[4]}`}}></span>
//     </div>
//   ))
// }