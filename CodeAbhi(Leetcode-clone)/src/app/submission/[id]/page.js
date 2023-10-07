"use client"
import { useState,useEffect } from 'react';
import { useParams } from 'next/navigation'
import Image from 'next/image';



import yes from "../../yes.png";
import no from "../../no.png";
import Header from '../../header';





export default function Page() {

   const [mysubmission,Setmysubmission] = useState({});
   const submissionid = useParams().id;
   console.log(submissionid);
   const problink = "/problem/"+mysubmission.no;

    useEffect(() => {
        fetch("http://localhost:5173/submission/"+submissionid, {
            method: 'GET',
            credentials: 'include' // This is important to send cookies
        }).then(response => response.json()).then(data => {

            Setmysubmission(data);
            
        }).catch(err =>console.log(err));


    }, []);

    function Acceptance() {
        if (mysubmission.status == "ac") {
            return (
                <div className='inline-flex '>
                    <Image src={yes} className="w-5 h-5 block"></Image>
                    <div className='block ml-2 text-green-500'>Accepted</div>
                    
                </div>

            )
        }
        else {

            return (
                <div className='inline-flex items-center'>
                    <Image src={no} className="w-5 h-5 block"></Image>
                    <div className='block ml-2 text-red-500'>Not accepted</div>
                    
                </div>
            )
        }

    }

    return (
        <div  className='bg-gray-900 h-screen w-screen'>
            
            <Header />
            <div className="flex justify-center bg-gray-900 h-full w-screen">
                
                
                <div className="w-full flex flex-col items-center h-5/6 my-4">
                    <div className=" w-11/12 flex pl-5 items-center flex-col justify-center text-gray-900 font-bold bg-gray-600 border-2 border-blue-300 ">
                        <div className='text-2xl p-3'>{mysubmission.no}. {mysubmission.name}</div>
                        <div className='text-lg mb-3'><Acceptance/> </div> 
                    </div>
                    
                    <div className="flex justify-center items-center  h-full w-11/12 bg-gray-700 border-b-2 border-x-2 border-blue-300">
                        <div
                            className="codeinput w-full h-full p-3 bg-blue-950 text-gray-200">
                            {mysubmission.submission}
                        </div>
                        
                    </div>
                    <div className='flex items-end justify-end mt-3'>
                            <a href={problink} >
                            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Go to Problem</button>
                            </a>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}
