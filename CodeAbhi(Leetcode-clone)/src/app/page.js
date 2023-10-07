"use client"
import { useEffect } from "react";

import Header from "./header";
import Image from 'next/image';

import bluebg from "./bluebg.png";



export default function Page(){
  
  useEffect(()=> {
    fetch('http://localhost:5173/').then(
      response => response.json().then(
        data=>console.log(data)
      )
    )

  })
  return (
    <div>
      <Header/>
      <div className="" style={{ position: 'fixed', top: 100, left: 0, width: '100%', height: '100%', zIndex: -2}} >
        <Image src={bluebg} layout="fill" objectFit="cover"></Image>
        </div>
      <div style={{zIndex:2}} className="  fixed flex justify-start flex-wrap ">
        
        <div className=" animate-flip-up animate-once animate-ease-in animate-delay-500 fixed text-7xl bottom-10  p-5 font-Oswald " style={{ WebkitTextStroke: "2px orange" }}>
        <span className="">Welcome to CodeAbhi: 
        <br />Where Innovation Meets Creation!
        </span>
        
        </div>
      </div>

    </div>


  );
};