"use client"
import { useState } from 'react';

import Header from '../header';

import '../globals.css'



export default function Page() {
   
    return (
        <>
        
        <div className=" rounded-lg   bg-gray-900 shadow-black/20 md: md:  backdrop-blur-[30px]">
            <Header />
            <div className="  border-b-8 border-gray-400 border-double">
                    <div className='flex object-center justify-center font-semibold p-4 text-5xl text-red-200 underline '  >Contact me</div>
                </div>
            <div className="container my-12 mx-auto md:px-6 bg-gray-900 ">
                <section className="mb-32">
                    <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
                    <div className="container px-6 md:px-12 bg-gray-900">
                        <div
                            className="block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,5%,0.7)] shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                            <div className="flex flex-wrap justify-around">
                              
                                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                    <div className="flex flex-wrap">
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="flex items-start">
                                                <div className="shrink-0">
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

                                                    </div>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold  text-white">
                                                        Email 
                                                    </p>
                                                    <p className="    text-neutral-200">
                                                        abhishekabbi.work
                                                    </p>
                                                    <p className="    text-neutral-200">
                                                        @gmail.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="flex items-start">
                                                <div className="shrink-0">
                                                <a href='https://github.com/aabbi15'>
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg>
                                                    
                                                    </div>
                                                    </a>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold  text-white">
                                                        Github Profile
                                                    </p>
                                                    <p className="    text-neutral-200">
                                                        aabbi15
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                                            <div className="align-start flex">
                                                <div className="shrink-0">
                                                <a href='https://www.linkedin.com/in/abhishek-abbi-b6280a278/'>
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                        
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>                                                    
                                                    
                                                    </div>
                                                    </a>
                                                    
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold  text-white">LinkedIn Profile</p>
                                                    <p className="    text-neutral-200">
                                                       Abhishek Abbi
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                            <div className="align-start flex">
                                                <div className="shrink-0">
                                                <a href='https://twitter.com/AbhishekAb70528'>
                                                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    
                                                    <svg width="26" height="26" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
</svg>          
                                                   
                                                    </div>
                                                    </a>
                                                </div>
                                                <div className="ml-6 grow">
                                                    <p className="mb-2 font-bold  text-white">X profile</p>
                                                    <p className="    text-neutral-200">
                                                        @AbhishekAb70528
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
        </>
    );
}
