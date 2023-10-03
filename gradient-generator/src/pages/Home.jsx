import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Card from "../components/Card"
import {combinations} from "../components/Color_Combinations"
const Home = () => {
  return (
      <div className="bg-[#111827]">
        <Navbar/>
        <Header title={"ZNOYCOLOR"} para={"Gradients for Tailwind CSS"}/>
        <div className="grid gap-0 grid-cols-3 mx-40">
          {
            combinations.map((ele)=>(
              <Card key={ele.code} title={ele.name} code={ele.code} fromLocal={false}/>
            ))
          }
        </div>
        <Footer/>
      </div>
  )
}
export default Home