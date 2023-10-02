import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import GeneratorComp from "../components/GeneratorComp"
const Generator = () => {
  return (
      <div className="bg-[#111827]">
        <Navbar/>
        <Header title={"GRADIENT GENERATOR"} para={"Gradient Generator for Tailwind CSS"}/>
        <GeneratorComp/>
        <Footer/>
      </div>
  )
}
export default Generator