import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import FlagCard from "../components/FlagCard"
import {world_flags} from "../components/Color_Combinations"
const Flags = () => {
  return (
    <div className="bg-[#111827]">
        <Navbar/>
        <Header title={"WORLD FLAGS"} para={"Flag Gradients with Tailwind CSS"}/>
        {
            <div className="grid gap-0 grid-cols-3 mx-40">
            {
                 world_flags.map((res)=>(
                    <FlagCard key={res.title} title={res.name} code={res.code} fromLocal={false}/>
                ))
            }
            </div>
        }
        <Footer/>
    </div>
  )
}
export default Flags