import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Card from "../components/Card"
import FlagCard from '../components/FlagCard'
const Favourite = () => {
    const local_arr = JSON.parse(localStorage.getItem("favGradients")) || []
    const local_world = JSON.parse(localStorage.getItem("worldFlags")) || []
  return (
    <div className="bg-[#111827]">
        <Navbar/>
        <Header title={"FAVOURITE GENERATOR"} para={"Your Favourite Hypercolor Gradients"}/>
        {
            <div className="grid gap-0 grid-cols-3 mx-40">
            {
                local_arr.map((res)=>(
                    <Card key={res.title} title={res.title} code={res.code} fromLocal = {true}/>
                ))
            }
            {
                local_world.map((res)=>(
                    <FlagCard key={res.title} title={res.title} code={res.code} fromLocal={true}/>
                ))
            }
            </div>
        }
        <Footer/>
    </div>
  )
}
export default Favourite

