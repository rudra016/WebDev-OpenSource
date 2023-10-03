"use client"; // This is a client component 👈🏽

import { useState } from "react";

import Header from "../header";
import PROBLEMS from ".";
import React from "react";
import "../globals.css"

export default function Page() {

    const [page,setpage]= useState(1);

    function RowGenerator(page){
        const mysize=27;
        let rows = [];
        let start=10*(page-1);
        let end=Math.min(start+10,mysize);
            for(var i=start;i<end;i++){
                    let difficultycolor = "text-green-400";
                    if((PROBLEMS[i].difficulty)=="Medium") difficultycolor = " text-yellow-500";
                    if((PROBLEMS[i].difficulty)=="Hard") difficultycolor = "text-red-600";
                
                rows.push(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td key="blank"className="w-4 p-4">
                                    
                                </td>
                                <th key="no" scope="row" className="px-6 py-4 ">
                                    {PROBLEMS[i].no}
                                </th>
                                <td key="name" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <a href={`/problem/${PROBLEMS[i].no}`}>{PROBLEMS[i].name}</a>
                                </td>
                                <td key = "difficulty" className={`px-6 py-4  ${difficultycolor}`} >
                                    {PROBLEMS[i].difficulty}
                                </td>
                                <td key="acceptance" className="px-6 py-4">
                                    {PROBLEMS[i].acceptance}
                                </td>
                                
                            </tr>
    
                )
            }
    
        
    
       
        return (rows);
    } 
    return (
        <>
            <Header />
            <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-top justify-start  pt-5 px-20  mx-auto md:h-screen lg:py-0 ">

                <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Difficulty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Acceptance
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {RowGenerator(page)}
                            
                        </tbody>
                    </table>
                    <div className="flex items-center justify-end pt-4" aria-label="Table navigation">
                        <ul className="inline-flex -space-x-px text-sm h-8">
                            <li>
                                <button onClick={() => {setpage(Math.max(1,page-1))}} className="page-button rounded-l-lg">Previous</button>
                            </li>
                            <li>
                                <button onClick={() => {setpage(1)}} className="page-button rounded-lg">1</button>
                            </li>
                            <li>
                                <button onClick={() => {setpage(2)}} className="page-button rounded-lg">2</button>
                            </li>
                            <li>
                                <button onClick={() => {setpage(3)}} className="page-button rounded-lg">3</button>
                            </li>
                            <li>
                                <button onClick={() => {setpage(Math.min(3,page+1))}} className="page-button rounded-r-lg ">Next</button>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </>


    );
};